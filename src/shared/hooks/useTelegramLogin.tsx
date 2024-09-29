import { useEffect, useState } from 'react';

const useTelegramLogin = (botName: string, authUrl: string) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleLoginResponse = (event: MessageEvent) => {
      if (event.origin === window.location.origin) {
        setUserData(event.data); // Сохраняем данные пользователя
        setLoading(false);
      }
    };

    window.addEventListener('message', handleLoginResponse);

    // Попробуем дождаться рендеринга контейнера
    const appendScript = () => {
      const container = document.getElementById('telegram-login-container');
      if (container) {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-widget.js?15';
        script.async = true;
        script.setAttribute('data-telegram-login', botName); // Имя бота
        script.setAttribute('data-size', 'large');
        script.setAttribute('data-auth-url', authUrl); // URL для авторизации
        script.setAttribute('data-request-access', 'write');
        container.appendChild(script); // Вставляем скрипт в контейнер
      } else {
        setError('Container not found');
        setLoading(false);
      }
    };

    // Дождаться появления контейнера, если его нет сразу
    setTimeout(appendScript, 500);

    return () => {
      window.removeEventListener('message', handleLoginResponse);
    };
  }, [botName, authUrl]);

  return { userData, loading, error };
};

export default useTelegramLogin;
