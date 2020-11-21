import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { IntroPageView } from './pages/Intro/intro-page-view';
import { WorkPageView } from './pages/work/work-page-view';
import { PageTemplateView } from './components/page-template/page-template-view';
import ContactView from './pages/contact/contact-view';
import { AboutView } from './pages/about-me/about-view';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={'theme ' + (darkMode ? 'theme--dark' : 'theme--default')}>
        <Route path='/' component={IntroPageView} exact />
        <Route path='/my-work' component={WorkPageView}>
          <PageTemplateView darkModeHandler={changeDarkMode}><WorkPageView /></PageTemplateView>
        </Route>
        <Route path='/about-me' component={WorkPageView}>
          <PageTemplateView darkModeHandler={changeDarkMode}><AboutView /></PageTemplateView>
        </Route>
        <Route path='/contact' component={WorkPageView}>
          <PageTemplateView darkModeHandler={changeDarkMode}><ContactView /></PageTemplateView>
        </Route>
      </div>
    </Router>
  );
}

export default App;

/*

* */
