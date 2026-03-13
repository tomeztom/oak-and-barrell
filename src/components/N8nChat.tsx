"use client";

import { useEffect } from "react";

export default function N8nChat() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.type = "module";
    script.textContent = `
      import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';
      createChat({
        webhookUrl: 'https://tomez.app.n8n.cloud/webhook/e4191d14-365e-4a9b-8f3d-52345f358444/chat',
        initialMessages: [
          'Hi there! 👋',
          'Welcome to Oak & Barrell. How can I help you today?',
        ],
        i18n: {
          en: {
            title: 'Oak & Barrell',
            subtitle: "Ask us anything — we're here to help!",
            getStarted: 'New Conversation',
            inputPlaceholder: 'Type your message...',
            footer: '',
          },
        },
      });
    `;
    document.body.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, []);

  return null;
}
