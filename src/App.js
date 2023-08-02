import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StartMap from '../src/components/map.js'
import wordBtn from './imgs/wordBtn.png'
import startBtn from './imgs/gameBtn.png'
import main_img from './imgs/video_main.png'
import main_logo_img from './imgs/THEKEYOPSNADEUL-I.png'
import character1 from './imgs/champion1.png'
import character2 from './imgs/champion2.png' 


function App() {
  return (
      <div>
      <div className='absolute flex z-40 w-full mt-20 justify-between px-8'>
        <img src={character2} alt=''/>
        <img src={character1} alt=''/>
      </div>
      <div className='z-50 absolute w-full flex justify-center'>
      <Router>
        <div className='h-[90vh] flex items-center'>
          <img src={main_logo_img} alt=''/>
        </div>
        <div className='fixed bottom-0'>
            <div className='mb-4'>
              <button>
                <Link to="/start">
                  <img src={wordBtn} alt=''/>
                </Link>
              </button>
              <button>
                <a href="https://keyops.gabia.io/">
                  <img src={startBtn} alt=''/>
                </a>
              </button>
            </div>
          <Routes>
            <Route path="/start" element={<StartMap />} />
          </Routes>
        </div>
      </Router>
      </div>
      <img className='absolute z-10 bg-cover w-full h-full' src={main_img} alt=''/>
    </div>
  );
}

export default App;
