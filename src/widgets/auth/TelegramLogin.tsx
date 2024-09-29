// import { useEffect } from 'react';

import useTelegramLogin from "@/shared/hooks/useTelegramLogin";

// import { useTelegramLogin } from "@/shared/hooks/useTelegramLogin";

// const TelegramLogin = () => {

//     console.log('start')

//     useEffect(() => {
//         console.log('start effect')

//         const script = document.createElement('script');
//         script.src = 'https://telegram.org/js/telegram-widget.js?15';
//         script.async = true;
//         script.setAttribute('data-telegram-login', 'taptoy_bot');
//         script.setAttribute('data-size', 'large');
//         script.setAttribute('data-auth-url', 'http://localhost:3501/auth/telegram');
//         script.setAttribute('data-request-access', 'write');
//         document.getElementById('telegram-login-container')?.appendChild(script);
//         console.log('end effect')

//     }, []);

//     console.log('end')

//     return <div id="telegram-login-container" style={{ color: "white" }}>asd</div>;
// };

// export default TelegramLogin;

const TelegramLoginComponent = () => {
  const { userData, loading, error } = useTelegramLogin(
    'mycrypto_bot', // Укажите ваше имя бота
    'http://localhost:3000/auth/telegram'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {/* Контейнер для виджета Telegram */}
      <div id="telegram-login-container"></div> 

      {/* Данные о пользователе, если они есть */}
      {userData && (
        <div>
          <h3>Welcome, {userData.first_name}</h3>
          <p>Username: {userData.username}</p>
          <p>User ID: {userData.id}</p>
        </div>
      )}
    </div>
  );
};

export default TelegramLoginComponent;
