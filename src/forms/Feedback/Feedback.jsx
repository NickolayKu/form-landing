/* eslint-disable react/prop-types */
import { useState } from "react";
import cls from "./Feedback.module.scss";
import ArrowTopRight from "../../assets/icons/top-right-arrow.svg?react";
import { Link } from "react-router-dom";

export default function Feedback(props) {
  const { handleFormSended } = props;

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isEmailError, setIsEmailError] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    about: '',
  });

  const sendDataToServer = async () => {
    const response = await fetch('https://formspree.io/f/mvoenbky', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const result = await response.json();
    console.log(result);
  }

  const handleChangeData = (key, event) => {
    setFormData({...formData, [key]: event.target.value});

    if(formData.email.length >= 3 && formData.name.length >= 3 && formData.phone.length >= 6) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }

  const handleSendForm = () => {
    setIsButtonDisabled(true);
    setIsEmailError(false);

    const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const validationSuccess = emailRegexp.test(formData.email);

    if(validationSuccess){
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //sendDataToServer();
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      setFormData({email: '', name: '', phone: '', about: ''});
      if(typeof handleFormSended !== 'undefined') {
        handleFormSended();
      }
    } else {
      setIsEmailError(true);
      setIsButtonDisabled(false);
    }
  }

  return (
    <>
      <div className={cls.feedback}>
        <div className={cls.formRow}>
          <input type="email" className={isEmailError ? cls.fieldError : ''} value={formData.email} onChange={(event) => handleChangeData('email', event)} placeholder="почта" />
          <input type="text" value={formData.name} onChange={(event) => handleChangeData('name', event)} placeholder="имя" />
        </div>
        <div className={cls.formRow}>
          <input type="tel" value={formData.phone} onChange={(event) => handleChangeData('phone', event)} placeholder="телефон" />
          <input type="text" value={formData.about} onChange={(event) => handleChangeData('about', event)} placeholder="о проекте" />
        </div>
      </div>
      <div className={[cls.sendButton, isButtonDisabled && cls.disabled].join(' ')} onClick={() => handleSendForm()}>
        Отправить 
        <ArrowTopRight className={cls.arrowIcon} />
      </div>

      <div className={cls.policyBlock}>
        <span>
          Нажав на кнопку, я соглашаюсь на обработку<br/>
          <Link to='/'>персональных данных</Link>
        </span>
      </div>
    </>
  )
}
