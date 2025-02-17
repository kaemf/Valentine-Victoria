import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div id='falling-hearts'></div>
      <div className="bsod"></div>

      <div className="entire-screen">
        <div className="valentine-container fade-in">
          <div className="main-part">
            <div className="text-appear">Вікторіє, будеш моєю Валентиною? 💖</div>
            <div className="button-group">
              <button className="btn-accept pulse">Так, моя киця!</button>
              <div className="btn-deny-group">
                <button className="btn-deny wobble">Ніколи в житті!</button>
                <button className="deny-empty">Ніколи в житті!</button>
              </div>
            </div>
          </div>
          <div className="image-container zoom-effect">
            <img src="./data/source/intro-bear.gif" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
