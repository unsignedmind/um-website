import React from 'react';
import './intro-page-styles.scss'
import { TitleView } from './title/title-view';
import { MenuView } from './menu/menu-view';
import { IntroCopyrightView } from './intro-copyright/intro-copyright-view';

export const IntroPageView = () => {
  return (
    <>
      <img src="images/bg.png" alt="background" className='intro-page__bg-image' />
      <div className='intro-page__wrapper'>
        <TitleView />
        <MenuView />
        <IntroCopyrightView />
      </div>
    </>
  );
};
