import React from 'react';
import Kephalaman8 from '../../img/kephalaman8.png';

function Transfer() {
  const lirikLaguPujian = [
    {
      judul: "Mazmur 105:1 '",
      lirik: `Bersyukurlah kepada TUHAN, serukanlah 
      nama-Nya, perkenalkanlah perbuatan-Nya di antara bangsa
      bangsa!`
    }
  ];

  return (
    <div 
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${Kephalaman8})`,
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

export default Transfer;
