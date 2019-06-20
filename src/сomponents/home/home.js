import React from 'react';
import Header from '../header';
import logo from '../../img/logo.svg';
import TextInfo from './textInfo';

export default function Home() {
  return (
    <div className="wrapper-home wrapper">
      <div className="content-wrapper">
        <Header img={logo} />
        <TextInfo />
      </div>
    </div>
  );
}
