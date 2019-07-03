import React from 'react';
import Header from '../Header';
import logo from '../../img/logo1.png';
import TextInfo from './TextInfo';

export default function Home() {
  return (
    <div className="wrapper-home">
      <div className="content-wrapper">
        <Header img={logo} />
        <TextInfo />
      </div>
    </div>
  );
}
