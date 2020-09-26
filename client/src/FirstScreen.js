import React from 'react';
import './css/FirstScreen.css';

function FirstScreen() {
  return (
    <div className="FirstScreen_mainImage">
      <div className="FirstScreen_left">
        <div className="FirstScreen_left_text">
          <h1 className="FirstScreen_left_text_name">ОМГ Европа</h1>
          <p className="FirstScreen_left_text_desc">
            <p>Реклама в Череповце на радиостанциях "Европа Плюс Череповец"</p>
            <p> и "Ретро FM Череповец"</p>
          </p>
        </div>
        <div className="FirstScreen_left_buttons">
          <a href="#PricesScreen" className="FirstScreen_left_buttons_item">Посмотреть цены</a>
          <a href="#OrderScreen" className="FirstScreen_left_buttons_item FirstScreen_left_buttons_order">Заказать рекламу</a>
        </div>
      </div>
      <div className="FirstScreen_right">

      </div>
    </div>
  );
}

export default FirstScreen;
