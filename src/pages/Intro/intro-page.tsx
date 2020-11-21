import React from 'react';
import './intro-page.scss'
import { Title } from './title/title';
import { IntroMenu } from './menu/intro-menu';
import { IntroCopyright } from './intro-copyright/intro-copyright';

export const IntroPage = () => {
  return (
    <>
      <div className='intro-page__full-size intro-page__bg-color' />
      <img src="images/intro-bg.jpg" alt="background" className='intro-page__full-size intro-page__bg-image' />
      <div className='portrait-info'>Please rotate device to portrait view</div>
      <div className='intro-page__container'>
        <div className='intro-page__wrapper'>
          <Title />
          <IntroMenu />
          <IntroCopyright />
        </div>
      </div>
    </>
  );
};
