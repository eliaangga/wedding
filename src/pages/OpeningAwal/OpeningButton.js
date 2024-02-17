import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline } from 'ionicons/icons';
import './OpeningButton.css';
import FotoSide from '../../img/backgorund/FotoSide.png';

function OpeningButton({ onButtonClick }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
    onButtonClick(); // Memberi sinyal ke parent component bahwa tombol telah ditekan
    // Auto-scroll to the next section
    try {
      const bodyElement = document.getElementById('bodySection');
      if (bodyElement) {
        bodyElement.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Error while scrolling:', error);
    }
  };

  return (
    <div
      className={`h-screen flex flex-col justify-between ${
        isOpened ? 'bg-blur' : ''
      }`}
      style={{
        backgroundImage: `url(${FotoSide})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-white text-center font-myFont">
          <p className="text-2xl font-semibold">YTH,</p>
          <h1 className="text-2xl font-bold my-3">Bapa dan Ibu</h1>
          <p className="text-xl">You Are Invited!</p>
          <br /> <br /> <br />
          <h2 className="text-2xl">The Wedding Celebration of</h2>
          <h1 className="text-4xl font-bold my-3">Panji & Silvia</h1>
        </div>
        <button
          className={`bg-[#20669B] text-white p-3 w-56 self-center mb-10 flex items-center justify-center btn-three: font-myFont ${
            isOpened
              ? 'transform scale-110 transition duration-300'
              : 'transition-none'
          }`}
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
  return <div id="bodySection" className="mt-10"></div>;
}

export default OpeningButton;
