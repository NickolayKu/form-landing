/* eslint-disable react/prop-types */
import cls from "./ServiceCard.module.scss";

export default function ServiceCard(props) {
  const { number, title, text } = props;

  return (
    <div className={cls.serviceCard}>
      <div className={cls.number}>{`0${number}.`}</div>
      <div className={cls.title}>{title}</div>
      <div className={cls.text}>{text}</div>
    </div>
  );
}
