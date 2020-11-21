import React, { useEffect, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.scss';
import { IntroPage } from './pages/Intro/intro-page';
import { WorkPage } from './pages/work/work-page';
import { PageTemplateView } from './components/page-template/page-template-view';
import Contact from './pages/contact/contact';
import { About } from './pages/about-me/about';
import { UIStore } from './state/state';


  function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const history = useHistory()

  useEffect(() => {
    return history.listen((location) => {
      UIStore.update(s => { s.showMenu = false });
      console.log('Route changed', location.pathname);
    })
  },[history])

  document.body.style.backgroundColor = darkMode ? '#011225' : '#fff';

  return (
    <div className={'theme ' + (darkMode ? 'theme--dark' : 'theme--default')}>
      <Route path='/' component={IntroPage} exact />
      <Route path='/my-work'>
        <PageTemplateView darkModeHandler={changeDarkMode}><WorkPage /></PageTemplateView>
      </Route>
      <Route path='/about-me'>
        <PageTemplateView darkModeHandler={changeDarkMode}><About /></PageTemplateView>
      </Route>
      <Route path='/contact'>
        <PageTemplateView darkModeHandler={changeDarkMode}><Contact /></PageTemplateView>
      </Route>
    </div>
  );
}

export default App;

/*

* */
