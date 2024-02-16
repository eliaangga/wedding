import React from 'react';
import { useState } from 'react';
import { IonIcon } from '@ionic/react';  
import { mailOutline } from 'ionicons/icons';
// import ReactPlayer from 'react-player';
import './OpeningButton.css'

import FotoSide from '../../img/backgorund/FotoSide.png';


function OpeningButton() {
  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    // Logic buka halaman selanjutnya
    setIsOpened(true);
    

    // Auto-scroll to the next section
    const bodyElement = document.getElementById('bodySection');
    if (bodyElement) {
      bodyElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div
      className={`h-screen flex flex-col justify-between  ${
        isOpened ? 'bg-blur' : ''
      }`}
      style={{
        backgroundImage: `url(${FotoSide})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* <ReactPlayer
        url="/melukis-senja.mp3"
        playing={isPlaying}
        controls={false}
        width="0"
        height="0"
        style={{ display: 'none' }}
      /> */}
      <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-white text-center font-myFont">
        <p className="text-2xl font-semibold ">Dear,</p>
        <h1 className="text-2xl font-bold my-3">Yth Bapa dan Ibu</h1>
        <p className="text-xl">You Are Invited!</p>
        <br/> <br/> <br/> 
        <h2 className="text-2xl">The Wedding Celebration of</h2>
        <h1 className="text-4xl font-bold my-3">Panji & Silvia</h1>
      </div>
      <button
        className={`bg-[#20669B] text-white p-3 w-56 self-center mb-10 flex items-center justify-center btn-three: font-myFont 
                    ${isOpened ? 'transform scale-110 transition duration-300' : 'transition-none'}`}
        onClick={handleClick}
      >
        <IonIcon icon={mailOutline} className="mr-2" />
        Buka Undangan
      </button>
      </div>

      {isOpened && <Body />}
    </div>
  );
}

function Body() {
  // Komponen isi undangan
  return (
    <div id="bodySection" className="mt-10">
      {/* ... content of the Body component ... */}
    </div>
  );
}

export default OpeningButton;
