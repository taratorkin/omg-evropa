import React from 'react';
import './css/SecondScreen.css';

function SecondScreen() {
  return (
    <div className="SecondScreen">
      <div id="PricesScreen">
        <div className="PricesScreen_text">
          <h2 className="SecondScreen_headline PricesScreen_text_item">Цены</h2>
          <p className="PricesScreen_text_item">"Европа Плюс Череповец": от 12 р. до 28 р. за секунду*</p>
          <p className="PricesScreen_text_item">"Ретро FM Череповец": от 8 р. до 18 р. за секунду</p>
          <p className="PricesScreen_text_item">Изготовление аудиороликов: 1500 р.</p>
          <p className="PricesScreen_text_item_end">*Цена за секунду зависит от времени и дня вещания</p>
          <p className="PricesScreen_text_item">Скачать прейскурант "Европа Плюс Череповец"</p>
          <a className="SecondScreen_button PricesScreen_text_item" href="/docs/EuropaPlus.docx">Скачать</a>
          <p className="PricesScreen_text_item">Скачать прейскурант "Ретро FM Череповец"</p>
          <a className="SecondScreen_button PricesScreen_text_item" href="/docs/RetroFM.docx">Скачать</a>
        </div>
        <div className="PricesScreen_image">

        </div>
      </div>
      <div id="OrderScreen">
        <div className="OrderScreen_image">

        </div>
        <div className="OrderScreen_text">
          <h2 className="SecondScreen_headline">Заказ рекламы</h2>
          <p>Звоните по телефону: 205-635</p>
          <p>Или пишите на: reklama35.omg@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default SecondScreen;
