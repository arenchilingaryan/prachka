import React from 'react'
import { CheckCircleOutlined } from '@ant-design/icons'
import './HomePage.scss'

export default function HomePage() {
  return (
    <div className="home">
      <h1 className="home__title">Сам<strong>ПРАЧКА</strong></h1>
      <div className="home__block block-1" >
        <CheckCircleOutlined className="homePage__icon"/>
        <span>Достойная альтернатива химчистке по низким ценам!</span>
      </div>
      <div className="home__block block-2">
        <CheckCircleOutlined className="homePage__icon" />
        <span>Избавим от таких недугов, как шерсть животных, неприятный запах и сложные пятна.</span>
      </div>
      <div className="home__block block-3">
        <CheckCircleOutlined className="homePage__icon"/>
        <span>Наша забота - ваша безопасная стирка!</span>
      </div>
    </div>
  )
}
