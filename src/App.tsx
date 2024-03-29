import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.scss';
import { IntroPage } from './pages/Intro/intro-page';
import { WorkPage } from './pages/work/work-page';
import { PageTemplateView } from './components/page-template/page-template-view';
import Contact from './pages/contact/contact';
import { About } from './pages/about-me/about';
import { UIStore } from './state/state';
import { Imprint } from './pages/imprint/imprint';


function App() {
  const darkMode = UIStore.useState(s => s.darkMode)

  const history = useHistory();
  let prevRoute: string;

  useEffect(() => {
    return history.listen((location) => {
      if (location.pathname !== prevRoute) {
        UIStore.update(s => { s.showMenu = false });
      }
      prevRoute = location.pathname;
    })
  },[history])

  document.body.style.backgroundColor = darkMode ? '#011225' : '#fff';

  return (
    <div className={'theme ' + (darkMode ? 'theme--dark' : 'theme--default')}>
      <Route path='/' component={IntroPage} exact />
      <Route path='/my-work'>
        <PageTemplateView><WorkPage /></PageTemplateView>
      </Route>
      <Route path='/about-me'>
        <PageTemplateView><About /></PageTemplateView>
      </Route>
      <Route path='/contact'>
        <PageTemplateView><Contact /></PageTemplateView>
      </Route>
      <Route path='/imprint'>
        <PageTemplateView><Imprint /></PageTemplateView>
      </Route>
    </div>
  );
}

export default App;

/*

* */
