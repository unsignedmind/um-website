import React from 'react';
import './intro-page.scss';
import { Title } from './title/title';
import { IntroMenu } from './menu/intro-menu';
import { IntroCopyright } from './intro-copyright/intro-copyright';
import { Link } from 'react-router-dom';
import { NavPages, UIStore } from '../../state/state';

export const IntroPage = () => {
  UIStore.update(s => { s.activePage = NavPages.INTRO })

  return (
    <>
      <Link className="intro-page__skip" to='/about-me'>Skip</Link>
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
