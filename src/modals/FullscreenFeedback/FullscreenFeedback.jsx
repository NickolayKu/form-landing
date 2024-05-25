/* eslint-disable react/prop-types */
import Feedback from "../../forms/Feedback/Feedback";
import CloseCross from "../../assets/icons/cross.svg?react";
import cls from "./FullscreenFeedback.module.scss";

export default function FullscreenFeedback(props) {
  const { handleCloseModal, isShowing } = props;

  const handleFormSended = () => {
    handleCloseModal();
  }

  return (
    <div className={[cls.fullscreenFeedback, isShowing && cls.showing].join(' ')}>
      <section>
        <div className={cls.content}>
          <h2>Добро пожаловать</h2>
          <CloseCross className={cls.closeIcon} onClick={() => handleCloseModal()}/>
          <Feedback handleFormSended={() => handleFormSended()}/>
        </div>
      </section>
    </div>
  )
}