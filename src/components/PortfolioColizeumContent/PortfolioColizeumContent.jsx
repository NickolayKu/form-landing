import cls from "./PortfolioColizeumContent.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';

export default function PortfolioColizeumContent() {

  return (
    <div className={cls.content}>
      <section>
        <img className={cls.firstImage} src="/images/colizeum-1-min.jpg" />
        <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
          <h2>задачи</h2>
        </ScrollAnimation>
        <ul>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
            <h3>
              <span>1.</span>
              Разработка контент-плана и графической подачи для<br/> социальных сетей
            </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-кодкибер арен колизеум, а вообще</p>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className={cls.socialBlockImages}>
                <img src="/images/colizuem-2.png" />
                <img src="/images/colizeum-3.jpg" />
              </div>
            </ScrollAnimation>
          </li>
        </ul>   
      </section>
      <section className="fullWidthSection">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className={cls.sliderContainer}>
            <div className={cls.sliderBackgroundImage} style={{backgroundImage: `url(/images/colizeum-slider-1.png)`}}>

            </div>
          </div>
        </ScrollAnimation>
      </section>
      <section>
        <ul>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3>
                <span>2.</span>
                запуск telegram-канала и привлечение целевой аудитории
              </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-кодкибер арен колизеум, а вообще </p>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className={cls.statsTelegram}>
                <div className={cls.cardsBlock}>
                  <div className={cls.statsTelegram_card}>
                    <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                      <div className={cls.statsTelegram_card_number}>+ 15 000</div>
                    </ScrollAnimation>
                    <div className={cls.statsTelegram_card_text}>подписчиков</div>
                  </div>
                  <div className={cls.statsTelegram_card}>
                    <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                      <div className={cls.statsTelegram_card_number}>+ 7 000</div>
                    </ScrollAnimation>
                    <div className={cls.statsTelegram_card_text}>комментариев</div>
                  </div>
                  <div className={cls.statsTelegram_card}>
                    <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                      <div className={cls.statsTelegram_card_number}>+ 400</div>
                    </ScrollAnimation>
                    <div className={cls.statsTelegram_card_text}>участников чата</div>
                  </div>
                </div>
                <div className={cls.schemeBlock}>
                  <img className={cls.schemeImageBack} src="/images/colizuem-scheme-back.png" />
                  <img className={cls.schemeImageFront} src="/images/colizeum-scheme-front.jpg" />
                </div>
              </div>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3>
                <span>3.</span>
                разработка reels контента и привлечение целевых<br/> показателей
              </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</p>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className={cls.statsReels}>
                <div className={cls.statsReels_card}>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <div className={cls.statsReels_card_number}>
                      11 <span>млн</span>
                    </div>
                  </ScrollAnimation>
                  <div className={cls.statsReels_card_text}>просмотров</div>
                </div>
                <div className={cls.statsReels_card}>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <div className={cls.statsReels_card_number}>
                      480 <span>тыс</span>
                    </div>
                  </ScrollAnimation>
                  <div className={cls.statsReels_card_text}>лайков</div>
                </div>
                <div className={cls.statsReels_card}>
                  <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
                    <div className={cls.statsReels_card_number}>
                      359 <span>тыс</span>
                    </div>
                  </ScrollAnimation>
                  <div className={cls.statsReels_card_text}>сохранений</div>
                </div>
              </div>
            </ScrollAnimation>
          </li>
        </ul> 
      </section>
      <section className="fullWidthSection">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className={[cls.sliderContainer, cls.secondSliderContainer].join(' ')}>
            <div className={[cls.sliderBackgroundImage, cls.secondSliderImage].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2.png)`}}>

            </div>
          </div>
        </ScrollAnimation>
      </section>
      <section>
        <ul>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3>
                <span>4.</span>
                разработка reels контента и привлечение целевых<br/> показателей
              </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</p>
            <img className={cls.photoGroup} src="/images/colizeum-photos-group.png" />
          </li>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3>
                <span>5.</span>
                разработка гибкого и модулированного прайс-листа для всех<br/> арен colizeum
              </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</p>
          </li>
        </ul>
      </section>
      <section className="fullWidthSection">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className={[cls.sliderContainer, cls.thirstSlider].join(' ')}>
            <div className={[cls.sliderBackgroundImage, cls.secondSliderImage].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-3.png)`}}>

            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}