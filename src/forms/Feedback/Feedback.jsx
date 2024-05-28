/* eslint-disable react/prop-types */
import { useState } from "react";
import cls from "./Feedback.module.scss";
import ArrowTopRight from "../../assets/icons/top-right-arrow.svg?react";
import { Link, useNavigate  } from "react-router-dom";

export default function Feedback() {
  const navigate = useNavigate();

  const [isEmailError, setIsEmailError] = useState(false);
  const [isPhoneError, setIsPhoneError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);

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
  }

  const handleSendForm = () => {
    setIsPhoneError(false);
    setIsEmailError(false);
    setIsNameError(false);

    const emailRegexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const validationSuccess = emailRegexp.test(formData.email);

    if(!validationSuccess){
      setIsEmailError(true);
    }

    if(formData.phone.length < 6){
      setIsPhoneError(true);
    }

    if(formData.name.length < 3){
      setIsNameError(true);
    }
    
    if(validationSuccess && formData.phone.length >= 6 && formData.name.length >= 3){
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      //sendDataToServer();
      //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
      setFormData({email: '', name: '', phone: '', about: ''});
      navigate('/form/success');
    }
  }

  return (
    <>
      <div className={cls.feedback}>
        <div className={cls.formRow}>
          <input type="text" value={formData.name} className={isNameError ? cls.fieldError : ''} onChange={(event) => handleChangeData('name', event)} placeholder="имя" />
          <input type="email" className={isEmailError ? cls.fieldError : ''} value={formData.email} onChange={(event) => handleChangeData('email', event)} placeholder="почта" />
        </div>
        <div className={cls.formRow}>
          <input type="number" className={isPhoneError ? cls.fieldError : ''} value={formData.phone} onChange={(event) => handleChangeData('phone', event)} placeholder="телефон" />
          <input type="text" value={formData.about} onChange={(event) => handleChangeData('about', event)} placeholder="о проекте" />
        </div>
      </div>
      <div className={cls.sendButton} onClick={() => handleSendForm()}>
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
