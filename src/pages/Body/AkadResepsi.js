import { useState, useEffect } from 'react';
import Logoparoki from '../../img/logoparoki.png';
import Kephalaman6 from '../../img/kephalaman6.png';
import Qris from '../../img/qris.png';
import { IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';

function AkadResepsi() {

  const targetDate = new Date('2024-05-19T00:00:00').getTime();

  const [countdown, setCountdown] = useState({
    days: 0, 
    hours: 0,
    minutes: 0,
    seconds: 0
  });


  const [copied, setCopied] = useState(false);
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); 
  }

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
      backgroundImage: `url(${Kephalaman6})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="p-4 md:p-8 rounded-lg max-w-3xl mx-auto border border-solid border-gray-500 mt-4  md:mt-8 md:mb-8 bg-gray-900 bg-opacity-70 ">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div className="flex items-center">
          <img src={Logoparoki} alt="Logo Paroki" className="h-12 mr-5" /> 
            <div>
              <h1 className=" text-xl text-white font-medium mb-1">Kursus  Evangelisasi Pribadi  (kep) Angkatan III </h1>
              <h1 className=" text-xl text-white font-medium mb-1">untuk umum & omk tahun 2024</h1>
            </div>
          </div>
          {/* <IonIcon icon={calendarOutline} className="mr-2 w-8 h-8"/> */}
        </div>

        <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-2xl capitalize mb-2">Misa Pembukaan</h2>
          <p className=" text-xl font-medium mb-1 ">Tanggal 19 Mei 2024</p>
        </div>

        <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h2 className="text-2xl capitalize mb-2">Pengajaran</h2>
          <p className=" text-xl font-medium mb-1 ">Tanggal 19 Mei – 18  September 2024
</p>
        </div>

        <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h3 className="text-2xl capitalize mb-2">Paroki St. Mikael Cilegon</h3> 
          <p className='text-xl font-medium mb-1'>Jl. Ahmad Yani No.55, Sukmajaya, Kec. Jombang, Kota Cilegon, Banten 42416</p>
        </div>

        <a 
          href="https://maps.app.goo.gl/1U34eg27MtK9uo3R7" 
          className="inline-block bg-gray-900 border border-solid text-white font-medium rounded-lg px-4 py-2 p-4 mb-8"
        >
          <IonIcon icon={locationOutline} className="mr-3 w-4 h-4"/>
          View Location  
        </a>

        <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
          <h3 className="text-xl font-medium capitalize mb-4">Misa Pembukaan - Pengajaran</h3>
          <div className="text-xl md:text-4xl flex gap-4">
            <div>{countdown.days} Days </div>
            <div>:</div> 
            <div>{countdown.hours} Hours </div>
            <div>:</div>
            <div>{countdown.minutes} Minutes </div> 
            <div>:</div>
            <div>{countdown.seconds} Seconds </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold mb-4 text-white text-center">Pendaftaran</h2>

        <div className="text-center">
            <img
              src={Qris}
              alt="gambar aja" 
              className="w-64 h-64 object-cover mx-auto md:mx-0 mb-4 transform hover:scale-105 transition duration-300 rounded-lg max-w-full"
              style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
            />
          </div>

        
          <div className="text-center">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdl1JM17ZLVirlKMMz3WgZXnFDvMqmlaQ_NldUPyemrPAEdGg/viewform" 
              className="inline-block bg-gray-900 border border-solid text-white font-medium rounded-lg px-4 py-2 p-4 mb-4 mt-4"
            >
              Link Pendaftaran  
            </a>
          </div>

          <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
              <h2 className="text-2xl capitalize mb-2">Biaya Pendaftaran</h2>
              <p className=" text-xl font-medium mb-1 ">Umum Rp 200,000/Peserta</p>
              <p className=" text-xl font-medium mb-1 ">OMK Rp 100,000/Peserta</p>
            </div>

            <div className="bg-white-500 text-white rounded-lg p-4 mb-8 shadow border border-solid border-gray-500 hover:bg-black hover:text-white transform transition-transform duration-500 hover:scale-105">
                <h2 className="text-2xl capitalize mb-2">Contact Person</h2>

                <div className="flex justify-between items-center">
                  <p className="text-xl font-medium mb-1">Sastra Barus: 0821-1323-0648</p>
                  <div className="flex items-center">
                    <button className="bg-white text-purple-500 rounded-full py-1 px-4 text-sm" onClick={() => handleCopy("082113230648")}>
                      {copied ? "Copied" : "Copy Number"}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-medium mb-1">Eka Elkana Br Ginting: 0812-1707-2310</p>
                  <div className="flex items-center">
                    <button className="bg-white text-purple-500 rounded-full py-1 px-4 text-sm" onClick={() => handleCopy("081217072310")}>
                      {copied ? "Copied" : "Copy Number"}
                    </button>
                  </div>
                </div>
              </div>



      </div>
    </div>


  );

}

export default AkadResepsi;
