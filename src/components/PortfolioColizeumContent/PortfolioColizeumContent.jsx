/* eslint-disable react/prop-types */
import cls from "./PortfolioColizeumContent.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import ReactPlayer from 'react-player';
import ChevronLeft from "../../assets/icons/left-chevron.svg?react";
import ChevronRight from "../../assets/icons/right-chevron.svg?react";

function SliderNextArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={[cls.sliderArrow, className].join(' ')} onClick={onClick}>
      <ChevronRight className={cls.arrowIconSVG} />
    </div>
  );
}

function SliderPrevArrow(props) {
  const { onClick, className } = props;
  return (
    <div className={[cls.sliderArrow, className].join(' ')} onClick={onClick}>
      <ChevronLeft className={cls.arrowIconSVG}/>
    </div>
  );
}

export default function PortfolioColizeumContent() {

  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);

  const [slideBackground1, setSlideBackground1] = useState(1);
  const [slideBackground2, setSlideBackground2] = useState(2);
  const [slideBackground3, setSlideBackground3] = useState(3);

  const settings1 = {
    dots: false,
    // nextArrow: <SliderNextArrow/>,
    // prevArrow: <SliderPrevArrow/>,
    arrows: false,
    draggable: false,
    swipe: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    centerPadding: "2vw",
    beforeChange: (index) => {
      if(currentSlide1 === 3) {
        setCurrentSlide1(0);
      } else {
        setCurrentSlide1(index + 1);
      }

      if(slideBackground1 === 9){
        setSlideBackground1(1);
      } else {
        setSlideBackground1(slideBackground1 + 1);
      }
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          centerPadding: "-162vw",
          autoplay: true,
        }
      },
    ]
  };

  const settings2 = {
    dots: false,
    // nextArrow: <SliderNextArrow className={cls.secondSliderArrows}/>,
    // prevArrow: <SliderPrevArrow className={cls.secondSliderArrows}/>,
    arrows: false,
    draggable: false,
    swipe: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    centerPadding: "2vw",
    beforeChange: (index) => {
      if(currentSlide2 === 3) {
        setCurrentSlide2(0);
      } else {
        setCurrentSlide2(index + 1);
      }

      if(slideBackground2 === 9){
        setSlideBackground2(1);
      } else {
        setSlideBackground2(slideBackground2 + 1);
      }
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          centerPadding: "-180vw",
        }
      },
    ]
  };

  const settings3 = {
    dots: false,
    // nextArrow: <SliderNextArrow/>,
    // prevArrow: <SliderPrevArrow/>,
    arrows: false,
    draggable: false,
    swipe: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    slidesToShow: 3,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    centerPadding: "2vw",
    beforeChange: (index) => {
      if(currentSlide3 === 3) {
        setCurrentSlide3(0);
      } else {
        setCurrentSlide3(index + 1);
      }

      if(slideBackground1 === 9){
        setSlideBackground3(1);
      } else {
        setSlideBackground3(slideBackground3 + 1);
      }
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          autoplay: true,
          centerPadding: "-192vw",
        }
      },
    ]
  };

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
              Разработка контент-плана и графической подачи для социальных сетей
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
        
          <div className={cls.sliderContainer}>
            <div className={cls.sliderBackgroundImage} style={{backgroundImage: `url(/images/colizeum-slider-${slideBackground1}.png)`}}></div>

            <div className={[cls.slickContainer, cls.firstContainer].join(' ')}>
              <Slider {...settings1}>
                  <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 0 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-1.png)`}}></div>
                  </div>
                  <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 1 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-2.png)`}}></div>
                  </div>
                  <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 2 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-3.png)`}}></div>
                  </div>
                  <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 3 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-4.png)`}}></div>
                  </div>
                  {/* <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 4 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-5.png)`}}></div>
                  </div>
                  <div className={cls.sliderCardContainer}>
                    <div className={[cls.firstSliderCard, currentSlide1 === 5 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-1-6.png)`}}></div>
                  </div> */}
              </Slider>
            </div>
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
                разработка reels контента и привлечение целевых показателей
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
            <div className={[cls.sliderBackgroundImage, cls.secondSliderImage].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-${slideBackground2}.png)`}}></div>
            <div className={[cls.slickContainer, cls.secondContainer].join(' ')}>

              <Slider {...settings2}>
                  <div className={cls.videoSliderCardContainer}>
                    <div className={[cls.secondSliderCard, currentSlide2 === 0 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2-1.png)`}}>
                        <div className={cls.videoPlayer}>
                          <ReactPlayer playsinline={true} muted={true} playing={currentSlide2 === 0} width={'100%'} height={'100%'} url='/video/colizeum-video-1.mp4' />
                        </div>
                    </div>
                  </div>
                  <div className={cls.videoSliderCardContainer}>
                    <div className={[cls.secondSliderCard, currentSlide2 === 1 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2-2.png)`}}>
                      <div className={cls.videoPlayer}>
                        <ReactPlayer playsinline={true} muted={true} playing={currentSlide2 === 1} width={'100%'} height={'100%'} url='/video/colizeum-video-2.mp4' />
                      </div>
                    </div>
                  </div>
                  <div className={cls.videoSliderCardContainer}>
                    <div className={[cls.secondSliderCard, currentSlide2 === 2 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2-3.png)`}}>
                      <div className={cls.videoPlayer}>
                        <ReactPlayer playsinline={true} muted={true} playing={currentSlide2 === 2} width={'100%'} height={'100%'} url='/video/colizeum-video-3.mp4' />
                        </div>
                    </div>
                  </div>
                  <div className={cls.videoSliderCardContainer}>
                    <div className={[cls.secondSliderCard, currentSlide2 === 3 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2-4.png)`}}>
                      <div className={cls.videoPlayer}>
                        <ReactPlayer playsinline={true} muted={true} playing={currentSlide2 === 3} width={'100%'} height={'100%'} url='/video/colizeum-video-4.mp4' />
                      </div>
                    </div>
                  </div>
                  {/* <div className={cls.videoSliderCardContainer}>
                    <div className={[cls.secondSliderCard, currentSlide2 === 4 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-2-5.png)`}}>
                      <div className={cls.videoPlayer}>
                        <ReactPlayer playsinline={true} muted={true} playing={currentSlide2 === 4} width={'100%'} height={'100%'} url='/video/colizeum-video-5.mp4' />
                      </div>
                    </div>
                  </div> */}
              </Slider>
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
                разработка reels контента и привлечение целевых показателей
              </h3>
            </ScrollAnimation>
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</p>
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
            <p>Мы тут рассказываем про то, что создали рубрикатор и из этого получился полноценный контент-план. Создали с нуля графическую подачу дл каждой рубрики учитывая дизайн-код кибер арен колизеум, а вообще</p>
          </li>
        </ul>
      </section>
      <section className="fullWidthSection">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <div className={[cls.sliderContainer, cls.thirstSlider].join(' ')}>
            <div className={[cls.sliderBackgroundImage, cls.secondSliderImage].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-${slideBackground3}.png)`}}></div>
            <div className={[cls.slickContainer, cls.thirstContainer].join(' ')}>
              <Slider {...settings3}>
                <div className={cls.sliderCardContainer}>
                  <div className={[cls.thirstSliderCard, currentSlide3 === 0 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-3-1.png)`}}></div>
                </div>
                <div className={cls.sliderCardContainer}>
                  <div className={[cls.thirstSliderCard, currentSlide3 === 1 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-3-2.png)`}}></div>
                </div>
                <div className={cls.sliderCardContainer}>
                  <div className={[cls.thirstSliderCard, currentSlide3 === 2 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-3-3.png)`}}></div>
                </div>
                <div className={cls.sliderCardContainer}>
                  <div className={[cls.thirstSliderCard, currentSlide3 === 3 && cls.current].join(' ')} style={{backgroundImage: `url(/images/colizeum-slider-3-2.png)`}}></div>
                </div>
              </Slider>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    </div>
  );
}