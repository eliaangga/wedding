import React from 'react';
import Kephalaman7 from '../../img/kephalaman7.png';

function RSVP() {
  const lirikLaguPujian = [
    {
      judul: "Matius 4:19 '",
      lirik: `Mari, ikutilah Aku, dan kamu akan Kujadikan penjala manusia`
    }
  ];

  return (
    <div 
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${Kephalaman7})`,
        backgroundSize: 'cover', // Mengatur backgroundSize ke 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
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
    </div>
  );
}

export default RSVP;
