import cls from "./PortfolioTopgunContent.module.scss";

export default function PortfolioTopgunContent() {

  return (
    <div className={cls.content}>
      <img src="/images/topgun-1-min.png" />
      <img src="/images/topgun-2-min.png" />
      <img src="/images/topgun-3-min.jpg" className={cls.bigImage} />
    </div>
  );
}