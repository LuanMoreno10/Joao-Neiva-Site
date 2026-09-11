import { ArrowLeft } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { Header } from '../components/layout/Header'
import { EmailCopy } from '../components/ui/EmailCopy'
import { Eyebrow } from '../components/ui/Eyebrow'
import { formAccessKey, schedule, site } from '../data/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fieldClasses =
  'w-full border border-gold/30 bg-plum-deep/40 px-4 py-3 text-[0.9375rem] text-bone placeholder:text-bone/40 focus:border-gold focus:outline-none'

const labelClasses = 'text-eyebrow font-medium uppercase text-gold'

export function SchedulePage() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form))
    setStatus('sending')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: formAccessKey,
          subject: `Novo pedido de conversa — ${data.nome}`,
          from_name: 'Site João Neiva',
          ...data,
        }),
      })

      if (!response.ok) throw new Error('Envio recusado')

      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Header />

      <main id="conteudo" className="px-gutter pt-28 pb-section lg:pt-36">
        <div className="mx-auto w-full max-w-[720px]">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-bone/70 transition-colors hover:text-gold"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
            Voltar ao início
          </a>

          <div className="mt-8 flex flex-col gap-3">
            <Eyebrow>{schedule.eyebrow}</Eyebrow>
            <h1 className="font-serif text-title">{schedule.title}</h1>
            <p className="text-[0.9375rem] font-light leading-relaxed text-linen">
              {schedule.intro}
            </p>
          </div>

          {!formAccessKey && (
            <p className="mt-8 border border-gold/40 p-4 text-sm text-linen">
              O formulário ainda não está ligado a nenhum serviço de envio, por isso as mensagens
              não chegam ao destino. Até lá, escreva diretamente para <EmailCopy />.
            </p>
          )}

          {status === 'sent' ? (
            <div className="mt-10 border border-gold/40 p-6">
              <h2 className="font-serif text-2xl">Mensagem enviada.</h2>
              <p className="mt-3 text-[0.9375rem] font-light leading-relaxed text-linen">
                Obrigado pelo seu contacto. Respondo pessoalmente, em regra no mesmo dia.
              </p>
              <a
                href="/"
                className="mt-6 inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                <ArrowLeft size={16} strokeWidth={1.5} />
                Voltar ao início
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="nome" className={labelClasses}>
                  Nome
                </label>
                <input id="nome" name="nome" type="text" required className={fieldClasses} />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className={labelClasses}>
                    Email
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClasses} />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="telefone" className={labelClasses}>
                    Telefone (opcional)
                  </label>
                  <input id="telefone" name="telefone" type="tel" className={fieldClasses} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="assunto" className={labelClasses}>
                  Assunto
                </label>
                <select id="assunto" name="assunto" className={fieldClasses} defaultValue="Ainda não sei">
                  {schedule.subjects.map((subject) => (
                    <option key={subject} value={subject} className="bg-plum text-bone">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <fieldset className="flex flex-col gap-3">
                <legend className={labelClasses}>Formato preferido</legend>
                <div className="flex flex-wrap gap-6 pt-1">
                  {schedule.formats.map((format, index) => (
                    <label key={format} className="flex items-center gap-2 text-[0.9375rem]">
                      <input
                        type="radio"
                        name="formato"
                        value={format}
                        defaultChecked={index === 0}
                        className="accent-gold"
                      />
                      {format}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className={labelClasses}>
                  O que o traz aqui
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={6}
                  required
                  className={fieldClasses}
                  placeholder="Duas linhas chegam."
                />
              </div>

              <label className="flex items-start gap-3 text-sm font-light text-linen">
                <input type="checkbox" name="consentimento" required className="mt-1 accent-gold" />
                Autorizo que os meus dados sejam usados para responder a este contacto.
              </label>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full border border-gold px-7 py-3 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:bg-gold hover:text-plum-deep disabled:opacity-50 sm:w-auto"
                >
                  {status === 'sending' ? 'A enviar…' : 'Enviar pedido'}
                </button>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-linen">
                    Não foi possível enviar. Escreva para <EmailCopy />.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </main>

      <footer className="border-t border-gold/20 px-gutter py-8">
        <div className="mx-auto flex w-full max-w-[720px] flex-col gap-2 text-[0.6875rem] text-bone/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <EmailCopy className="text-[0.6875rem]" />
        </div>
      </footer>
    </>
  )
}
