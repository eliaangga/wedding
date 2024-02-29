import React from 'react';
import Kephalaman9 from '../../img/kephalaman9.png';

function UcapandanDoa() {
  const lirikLaguPujian = [
    {
      judul: "Roma 10:14 (TB) '",
      lirik: `Tetapi bagaimana mereka dapat berseru kepada-Nya, jika mereka tidak percaya kepada Dia? 
      Bagaimana mereka dapat percaya kepada Dia, jika mereka tidak mendengar tentang Dia. 
      Bagaimana mereka mendengar tentang Dia, jika tidak ada yang memberitakan-Nya?`
    }
  ];

  return (
    <div 
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${Kephalaman9})`,
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

export default UcapandanDoa;
