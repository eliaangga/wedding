import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { mailOutline } from 'ionicons/icons';
import './OpeningButton.css';
import Kephalaman1 from '../../img/kephalaman1.png';

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
  
  const lirikLaguPujian = [
    {
      judul: "Wahyu 3:20 TB",
      lirik: `Lihat, Aku berdiri di muka pintu dan mengetok; 
      jikalau ada orang yang mendengar suara-Ku dan membukakan pintu, 
      Aku akan masuk mendapatkannya dan Aku makan bersama-sama dengan dia, 
      dan ia bersama-sama dengan Aku.`
    }
  ];

  return (
    <div
      className={`h-screen flex flex-col justify-between ${
        isOpened ? 'bg-blur' : ''
      }`}
      style={{
        backgroundImage: `url(${Kephalaman1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center max-w-md mx-auto">
          {lirikLaguPujian.map(lirik => (
            <div 
              key={lirik.judul}
              className=" bg-opacity-90 p-8 my-4 rounded-lg inline-block ">  
              <p className="font-bold text-3xl text-white">{lirik.judul}</p>
              <br /> <br />
              <p className="font-bold text-xl text-white">{lirik.lirik}</p>
            </div>
          ))}
        </div>
        <button
          className={`bg-gray-900 border border-solid text-white p-3 mt-5 w-56 self-center mb-10 flex items-center justify-center btn-three:  ${
            isOpened
              ? 'transform scale-110 transition duration-300'
              : 'transition-none'
          }`}
          onClick={handleClick}
        >
          <IonIcon icon={mailOutline} className="mr-2" />
          Scroll Kebawah
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
