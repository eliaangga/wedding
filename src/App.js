import React, { useState } from 'react';
import './style.css';
import ReactPlayer from 'react-player';
import OpeningButton from "./pages/OpeningAwal/OpeningButton";  

import Navbar from './pages/Navbar/navbar';
import KutipanAyatdanQuotes from './pages/Body/KutipanAyatdanQuotes';  
import Mempelai from './pages/Body/Mempelai';  
import Kepinformasi from './pages/Body/Kepinformasi';  
import AkadResepsi from './pages/Body/AkadResepsi';
import UcapandanDoa from './pages/Body/UcapandanDoa';
import Transfer from './pages/Body/Transfer';
import RSVP from './pages/Body/RSVP';
import Footer from './pages/Footer/Footer';

import { waveform } from 'ldrs';
waveform.register();

function App() {
  const [isPlaying, setIsPlaying] = useState(false); 

  const togglePlay = () => {
    setIsPlaying(!isPlaying); 
  };

  const handleOpeningButtonClick = () => {
    setIsPlaying(true); // Memulai lagu ketika tombol "Buka Undangan" ditekan
  };

  return (
    <div className="overflow-x-auto">
      <ReactPlayer
        url="/jiwakuterbuka.mp3"
        playing={isPlaying}
        controls={false}
        width="0"
        height="0"
        style={{ display: 'none' }}
      />

      <Navbar />
      <OpeningButton onButtonClick={handleOpeningButtonClick} />

      <KutipanAyatdanQuotes />
      <Kepinformasi />
      <Mempelai />   
      <AkadResepsi />
      <RSVP />
      <Transfer />
      <UcapandanDoa />
      <Footer />

      <div className="fixed bottom-8 right-8 z-10">
        <button className="focus:outline-none" onClick={togglePlay}>
          <div className={`w-10 h-10 rounded-full bg-black flex items-center justify-center border-2 border-solid border-white ${isPlaying ? 'bg-red-500' : 'bg-black'}`}>
            <l-waveform
              className="w-full h-full rounded-full"
              size="20"
              stroke="3.5"
              speed="1" 
              color="white" 
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default App;
