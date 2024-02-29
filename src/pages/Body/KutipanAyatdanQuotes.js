import React from 'react';
import Kephalaman2 from '../../img/kephalaman2.png';

function KutipanAyatdanQuotes() {
  const lirikLaguPujian = [
    {
      judul: "Mari Nyanyikan 'Jiwaku Terbuka'",
      lirik: `Jiwaku terbuka
      Untuk-Mu, Tuhan
      S'lidiki, nyatakan
      S'gala perkara

      Singkapkan semua
      Yang terselubung
      Supaya 'ku layak
      Di hadapan-Mu, Tuhan

      Supaya 'ku layak
      Di hadapan-Mu, Tuhan`
    }
  ];

  return (
    <div 
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${Kephalaman2})`,
        backgroundSize: 'cover', // Mengatur backgroundSize ke 'contain'
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center max-w-md mx-auto">
        {lirikLaguPujian.map(lirik => (
          <div 
            key={lirik.judul}
            className=" bg-opacity-90 p-8 my-4 rounded-lg inline-block font-myFont">  
            <p className="font-bold text-3xl text-white">{lirik.judul}</p>
            <br /> <br />
            <p className="font-bold text-xl text-white">{lirik.lirik}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KutipanAyatdanQuotes;
