import React from 'react';

import WdPage2 from '../../img/backgorund/WdPage2.png';


function KutipanAyatdanQuotes() {
  const ayatKitabSuci = [
    {
      ayat: 'Kejadian 2:24',
      isi: 'Sebab itu laki-laki akan meninggalkan ayahnya dan ibunya dan bersatu dengan istrinya, sehingga keduanya itu menjadi satu daging.'
    },
    {
      ayat: 'Matius 19:6',
      isi: 'Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.'
    },
  ];

  return (
    <div 
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${WdPage2})`,
        backgroundSize: 'cover' 
      }}
    >
      <div className="text-center">
        
        {ayatKitabSuci.map(ayat => (
          <div 
            key={ayat.ayat}
            className=" bg-opacity-90 p-8 my-4 rounded-lg inline-block font-myFont">  
            <p className="font-bold text-3xl">{ayat.ayat}</p>
            <p className="font-bold text-xl">{ayat.isi}</p>
          </div>
        ))}
        
      </div>
    </div>
  );

}

export default KutipanAyatdanQuotes;
