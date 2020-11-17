import React from 'react';
import './intro-page-styles.scss'
import { TitleView } from './title/title-view';
import { MenuView } from './menu/menu-view';
import { IntroCopyrightView } from './intro-copyright/intro-copyright-view';

export const IntroPageView = () => {
  return (
    <>
      <div className='intro-page__full-size intro-page__bg-color' />
      <img src="images/intro-bg.jpg" alt="background" className='intro-page__full-size intro-page__bg-image' />
      <div className='portrait-warning'>Please rotate device to portrait view</div>
      <div className='intro-page__container'>
        <div className='intro-page__wrapper'>
          <TitleView />
          <MenuView />
          <IntroCopyrightView />
        </div>
      </div>
    </>
  );
};
