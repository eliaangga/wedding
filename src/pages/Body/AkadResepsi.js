import { useState, useEffect } from 'react';
import Ellipse from '../../img/Ellipse.png';
import BackgroundAkad from '../../img/backgorund/BackgroundAkad.png';
import { IonIcon } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';

function AkadResepsi() {

  const targetDate = new Date('2024-02-24T00:00:00').getTime();

  const [countdown, setCountdown] = useState({
    days: 0, 
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });

    }, 1000);

    return () => clearInterval(interval);
  },
  );

  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundImage: `url(${BackgroundAkad})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="p-4 md:p-8 rounded-lg max-w-3xl mx-auto border border-solid border-gray-500 mt-4  md:mt-8 md:mb-8 font-myFont">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div className="flex items-center">
            <div className="w-16 h-16 text-white flex items-center justify-center rounded-full mr-4" 
            style={{backgroundImage: `url(${Ellipse})`}}>
              <span className="text-3xl font-semibold">24</span>
            </div>
            <div>
              <h1 className="capitalize text-xl text-gray-800 font-medium mb-1">Sabtu</h1>
              <p className="text-xl font-semibold">24 Februari 2024</p>
            </div>
          </div>
          <IonIcon icon={calendarOutline} className="mr-2 w-8 h-8"/>
        </div>

        <div className="bg-white-500 text-gray-500 rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-[#20669B] hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-2xl capitalize mb-2">Sakramen Perkawinan</h2>
          <p>Pukul 09.00 - 11.00</p>
        </div>

        <div className="bg-white-500 text-gray-500 rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-[#20669B] hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h3 className="text-2xl capitalize mb-2">Paroki St. Mikael Cilegon</h3> 
          <p>Jl. Ahmad Yani No.55, Sukmajaya, Kec. Jombang, Kota Cilegon, Banten 42416</p>
        </div>

        <a 
          href="https://maps.app.goo.gl/1U34eg27MtK9uo3R7" 
          className="inline-block bg-[#20669B] text-white font-medium rounded-lg px-4 py-2 p-4 mb-8"
        >
          <IonIcon icon={locationOutline} className="mr-3 w-4 h-4"/>
          View Location  
        </a>

        <div className="bg-white-500 text-gray-500 rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-[#20669B] hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h3 className="text-lg capitalize mb-4">Hari yang ditunggu</h3>
          <div className="font-myFont text-xl md:text-4xl flex gap-4">
            <div>{countdown.days} Days </div>
            <div>:</div> 
            <div>{countdown.hours} Hours </div>
            <div>:</div>
            <div>{countdown.minutes} Minutes </div> 
            <div>:</div>
            <div>{countdown.seconds} Seconds </div>
          </div>
        </div>
        <button
          onClick={() => window.location.href = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MnRydXRmaDRicnZkdW8xN3E4amYzdHBtbzYgZWxpYW5nZ2EyMDAyQG0&tmsrc=eliangga2002%40gmail.com"}
          className="bg-[#20669B] text-white font-medium rounded-lg px-4 py-2 hover:bg-gray-400 mt-4 mb-4"
        >
          Add to Calendar
        </button>

      </div>
    </div>


  );

}

export default AkadResepsi;
