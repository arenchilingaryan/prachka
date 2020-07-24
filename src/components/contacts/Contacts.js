import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import './Contacts.scss'

export default function Contacts() {
  return (
    <div className="contacts">
      <h1 className="contacts__title">Contacts</h1>
      <div className="contacts__phone" >
        <FontAwesomeIcon icon={faPhone} className="contacts__icon" />
        <span>+79185320842</span>
      </div>
      <div className="contacts__location">
        <FontAwesomeIcon icon={faLocationArrow} className="contacts__icon" />
        <span>Социалистическая 144-146 магазин Ассорти</span>
      </div>
      <div className="contacts__location">
        <FontAwesomeIcon icon={faLocationArrow} className="contacts__icon" />
        <span>Ерёменко 64 магазин БУМ</span>
      </div>
      <div className="contacts__filials">
        СамПРАЧКА имеет множество филиалов по всей России, 
        в таких городах как: Москва, Пермь, Ростов-на-Дону и т.д. 
        <p>В Московской области расположено более 65 точек этой франшизы</p>
      </div>
    </div>
  )
}
