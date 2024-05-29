import cls from "./PortfolioColizeumContent.module.scss";

export default function PortfolioColizeumContent() {

  return (
    <div className={cls.content}>
      <section>
        <img src="/images/colizeum-1.jpg" />
        <h2>задачи</h2>
        <ul>
          <li>
            <h3>Разработка контент-плана и графической подачи для социальных сетей</h3>
            <span>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-кодкибер арен колизеум, а вообще</span>
            <div className={cls.socialBlockImages}>
              <img src="/images/colizeum-2.png" />
              <img src="/images/colizeum-3.jpg" />
            </div>
          </li>
        </ul>   
      </section>
      <section className="fullWidthSection">
        <div className={cls.sliderContainer} style={{backgroundImage: `url(/images/colizeum-slider-1.png)`}}>

        </div>
      </section>
      <section>
        <ul>
          <li>
            <h3>запуск telegram-канала и привлечение целевой аудитории</h3>
            <span>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-кодкибер арен колизеум, а вообще </span>
            <div className={cls.statsTelegram}>
              <div className={cls.cardsBlock}>
                <div className={cls.statsTelegram_card}>
                  <div className={cls.statsTelegram_card_number}>+ 15 000</div>
                  <div className={cls.statsTelegram_card_text}>подписчиков</div>
                </div>
                <div className={cls.statsTelegram_card}>
                  <div className={cls.statsTelegram_card_number}>+ 7 000</div>
                  <div className={cls.statsTelegram_card_text}>комментариев</div>
                </div>
                <div className={cls.statsTelegram_card}>
                  <div className={cls.statsTelegram_card_number}>+ 400</div>
                  <div className={cls.statsTelegram_card_text}>участников чата</div>
                </div>
              </div>
              <div className={cls.schemeBlock}>
                <img className={cls.schemeImageBack} src="/images/colizuem-scheme-back.png" />
                <img className={cls.schemeImageFront} src="/images/colizeum-scheme-front.jpg" />
              </div>
            </div>
          </li>
          <li>
            <h3>разработка reels контента и привлечение целевых показателей </h3>
            <span>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</span>
            <div className={cls.statsReels}>
              <div className={cls.statsReels_card}>
                <div className={cls.statsReels_card_number}>
                  11 <span>млн</span>
                </div>
                <div className={cls.statsReels_card_text}>просмотров</div>
              </div>
              <div className={cls.statsReels_card}>
                <div className={cls.statsReels_card_number}>
                  480 <span>тыс</span>
                </div>
                <div className={cls.statsReels_card_text}>лайков</div>
              </div>
              <div className={cls.statsReels_card}>
                <div className={cls.statsReels_card_number}>
                  359 <span>тыс</span>
                </div>
                <div className={cls.statsReels_card_text}>сохранений</div>
              </div>
            </div>
          </li>
        </ul> 
      </section>
      <section className="fullWidthSection">
        <div className={cls.sliderContainer} style={{backgroundImage: `url(/images/colizeum-slider-2.png)`}}>

        </div>
      </section>
      <section>
        <ul>
          <li>
            <h3>разработка reels контента и привлечение целевых показателей</h3>
            <span>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</span>
            <img src="/images/colizeum-photos-group.png" />
          </li>
          <li>
            <h3>разработка гибкого и модулированного прайс-листа для всех арен colizeum</h3>
            <span>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</span>
            <img src="/images/colizeum-photos-group.png" />
          </li>
        </ul>
      </section>
      <section className="fullWidthSection">
        <div className={cls.sliderContainer} style={{backgroundImage: `url(/images/colizeum-slider-3.png)`}}>

        </div>
      </section>
    </div>
  );
}