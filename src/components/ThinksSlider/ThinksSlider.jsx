import { useState } from "react";
import cls from "./ThinksSlider.module.scss";
import ArrowRight from "../../assets/icons/arrow-right.svg?react";
import ScrollAnimation from "react-animate-on-scroll";

export default function ThinksSlider() {

  const [selectedSlideIndex, setSelectedSlideIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);

  const peoplesCards = [
    {
      avatar: '35da89bdd3707689a0cae1633af8d5cb.png',
      name: 'Николай Антонов',
      job: 'сооснователь colizeum',
      text: 'Стратегия которая нам была нужна здесь и сейчас реализована так, что мы даже не успев полностью взглянуть на нее поняли то, что лучше что можно было ожидать',
    },
    {
      avatar: '35da89bdd3707689a0cae1633af8d5cb.png',
      name: 'Антонов Николай',
      job: 'один из основателей colizeum',
      text: 'Нужная нам стратегия, в которой мы все очень нуждались, была успешно применена, и мы все сразу же осознали, что она превзошла любые наши ожидания',
    },
  ]

  const handleChangeSlide = (type) => {
    setIsTransparent(true);
    setTimeout(() => {
      if(type === 'minus') {
        setSelectedSlideIndex(selectedSlideIndex - 1);
      } else {
        setSelectedSlideIndex(selectedSlideIndex + 1);
      }
    }, 200);
    setTimeout(() => {
      setIsTransparent(false);
    }, 300);
  }

  return (
    <div className="container">
      <ScrollAnimation animateIn="fadeInUp" duration={0.6} animateOnce={true}>
        <h2 className={cls.h2}>Мысли вслух</h2>
      </ScrollAnimation>

      <div className={cls.slider}>
        <span className={isTransparent ? cls.transparent : ''}>
          {peoplesCards[selectedSlideIndex].text}
        </span>

        <div className={cls.bottomBlock}>
          <div className={[cls.card, isTransparent && cls.transparent].join(' ')}>
            <div className={cls.avatar} style={{backgroundImage: `url(/images/avatars/${peoplesCards[selectedSlideIndex].avatar})`}}></div>
            <div className={cls.cardContent}>
              <div className={cls.name}>
                {peoplesCards[selectedSlideIndex].name}
              </div>
              <div className={cls.job}>
                {peoplesCards[selectedSlideIndex].job}
              </div>
            </div>
          </div>

          <div className={cls.controls}>
            <div onClick={() => handleChangeSlide('minus')} 
              className={[cls.arrowButton, selectedSlideIndex - 1 < 0 && cls.disabled].join(' ')}>
              <ArrowRight className={cls.arrowLeftIcon}/>
            </div>
            <div onClick={() => handleChangeSlide('plus')} 
              className={[cls.arrowButton, selectedSlideIndex + 1 >= peoplesCards.length && cls.disabled].join(' ')}>
              <ArrowRight className={cls.arrowRightIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}