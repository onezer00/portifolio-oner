import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

***REMOVED***
***REMOVED***
***REMOVED***

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('sent');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-xl w-full mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">Contato</h2>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 mb-6">
          <input name="name" type="text" placeholder="Seu nome" required className="px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" />
          <input name="email" type="email" placeholder="Seu e-mail" required className="px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" />
          <input name="title" type="text" placeholder="Assunto" required className="px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" />
          <textarea name="message" placeholder="Sua mensagem" required rows={4} className="px-4 py-2 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" />
          <button type="submit" disabled={status === 'sending'} className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
            {status === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>
        </form>

        {status === 'sent' && <p className="text-green-600 dark:text-green-400 mb-4">Mensagem enviada com sucesso!</p>}
        {status === 'error' && <p className="text-red-600 dark:text-red-400 mb-4">Erro ao enviar. Tente novamente.</p>}

      </div>
    </section>
  );
};

export default Contact;
