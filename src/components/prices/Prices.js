import React from 'react'
import './Prices.scss'

export default function Prices() {
  return (
    <div className="prices">
      <h1 className="prices__title">Цены</h1>
      <h3>Стирка:</h3>
      <p><strong>Режим A :</strong> 200 рублей</p>
      <p><strong>Режим B :</strong> 300 рублей</p>
      <p><strong>Режим C :</strong> 400 рублей</p>
      <hr />
      <h3>Сушка:</h3>
      <p>100 рублей</p>
    </div>
  )
}
