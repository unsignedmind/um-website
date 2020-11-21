import React, { useState } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { IntroPage } from './pages/Intro/intro-page';
import { WorkPage } from './pages/work/work-page';
import { PageTemplateView } from './components/page-template/page-template-view';
import Contact from './pages/contact/contact';
import { About } from './pages/about-me/about';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  document.body.style.backgroundColor = darkMode ? '#011225' : '#fff';

  return (
    <Router>
      <div className={'theme ' + (darkMode ? 'theme--dark' : 'theme--default')}>
        <Route path='/' component={IntroPage} exact />
        <Route path='/my-work' component={WorkPage}>
          <PageTemplateView darkModeHandler={changeDarkMode}><WorkPage /></PageTemplateView>
        </Route>
        <Route path='/about-me' component={WorkPage}>
          <PageTemplateView darkModeHandler={changeDarkMode}><About /></PageTemplateView>
        </Route>
        <Route path='/contact' component={WorkPage}>
          <PageTemplateView darkModeHandler={changeDarkMode}><Contact /></PageTemplateView>
        </Route>
      </div>
    </Router>
  );
}

export default App;

/*

* */
