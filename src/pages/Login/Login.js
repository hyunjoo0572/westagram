import React, { useState } from 'react';
import './Login.scss';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleIdInput = (e) => {
    setId(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='Login'>
      <form className='loginContainer'>
        <div className='loginLogo'>Westagram</div>
        <input
          className='idBox'
          type='text'
          placeholder='전화번호, 사용자 이름 또는 이메일'
          onChange={(e) => {
            handleIdInput(e);
          }}
        />
        <input
          className='passwordBox'
          type='password'
          placeholder='비밀번호'
          onChange={(e) => {
            handlePasswordInput(e);
          }}
        />
        <button className='loginButton' disabled>
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
