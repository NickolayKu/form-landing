/* eslint-disable react/prop-types */
import cls from "./PortfolioColizeumContent.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from 'react-player';

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
              Разработка контент-плана и графического наполнения социальных сетей
            </h3>
            </ScrollAnimation>
            <p>Мы полностью переработали контент план Colizeum и создали принципиально новый стиль и формат подачи информации для целевой аудитории, состоящей в основном из молодежи. В основу контента легли яркие образы и крупные заголовки.</p>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className={cls.socialBlockImages}>
                <img src="/images/colizuem-2.png" />
                <img src="/images/colizeum-3.jpg" />
              </div>
            </ScrollAnimation>
          </li>
        </ul>   
      </section>
      <section>
        <div className={cls.sliderVideoSection}>
          <ReactPlayer loop={true} playsinline={true} autoplay={true} muted={true} playing={true} width={'100%'} height={'100%'} url='/video/slider-video-1.mp4' />
        </div>
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
            <p>Colizeum общался со своими пользователями через сообщество в VK с момента основания. Мы разработали и запустили Telegram канал бренда, создав устойчивую альтернативу основной площадке.</p>
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
                разработка reels контента и привлечение целевых показателей  
              </h3>
            </ScrollAnimation>
            <p>Внедрили новую рубрику Reels, в которой публиковали новостной контент, мемы и смешные ситуации из игр, а также информирующие видео на игровую тему.</p>
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
      <section>
        <div className={cls.sliderVideoSection} >
          <ReactPlayer loop={true} playsinline={true} autoplay={true} muted={true} playing={true} width={'100%'} height={'100%'} url='/video/slider-video-2.mp4' />
        </div>
      </section>
      <section>
        <ul>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3>
                <span>4.</span>
                продюсирование специальных акций и разработка дополнительного контена
              </h3>
            </ScrollAnimation>
            <p>Команда FORM помогает прорабатывать и реализовывать масштабные акции, которые часто устраивает Colizeum.</p>
            <div>
              <img className={cls.photoGroupLines} src="/images/colizeum-photos-group-2.png" />
              <img className={cls.photoGroup} src="/images/colizeum-photos-group-1.png" />
            </div>
          </li>
          <li>
            <ScrollAnimation animateIn="fadeInUp" duration={1} animateOnce={true}>
              <h3 style={window.screen.width > 450 ? {marginTop: 150} : {marginTop: 60}}>
                <span>5.</span>
                разработка гибкого и модулированного прайс-листа для всех арен colizeum
              </h3>
            </ScrollAnimation>
            <p>Старый прайс-лист не отвечал современным требованиям пользователей. Количество арен растет, конфигураций становится все больше. Мы разработали гибкий прайс-лист, адаптируемый под клуб любого размера, начиная от одной и заканчивая шестью зонами для игр.</p>
          </li>
        </ul>
      </section>
      <section>
        <div className={cls.sliderVideoSection}>
          <ReactPlayer loop={true} playsinline={true} autoplay={true} muted={true} playing={true} width={'100%'} height={'100%'} url='/video/slider-video-3.mp4' />
        </div>
      </section>
    </div>
  );
}