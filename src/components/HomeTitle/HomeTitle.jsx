import cls from "./HomeTitle.module.scss";

export default function HomeTitle() {

  return (
      <div className={cls.homeTitle}>
        <h1>
          <div className={cls.formLogoImage}></div>
          Креативная студия, создающая<br/>
          взаимодействие человека
          <span>
            с Вашим предложением
            <div className={cls.line}></div>
            <div className={cls.formThingImage}></div>
            <div className={cls.formArrowImage}></div>
          </span>
        </h1>
      </div>
  )
}