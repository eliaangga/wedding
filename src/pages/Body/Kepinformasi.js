import React from 'react';
import Kephalaman3 from '../../img/kephalaman3.png';

function AyatAlkitab({ ayat, isi }) {
  return (
    <div className="bg-gray-900 bg-opacity-75 text-white p-4 md:p-5 mt-4 rounded-lg max-w-lg text-center shadow-lg hover:bg-gray-900 transform transition-transform duration-500 hover:scale-105">
      <h1 className="text-xl md:text-3xl font-semibold mb-2 md:mb-4">{ayat}</h1>
      <p className="text-sm md:text-lg">{isi}</p>
    </div>
  );
}

function Kepinformasi() {

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{
      backgroundImage: `url(${Kephalaman3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="bg-gray-900 bg-opacity-80 text-white p-4 md:p-8 mt-4 rounded-lg max-w-lg text-center shadow-lg mb-4 hover:bg-gray-900 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6">Informasi Kursus Evangelisasi</h1>
        <p className="text-xs md:text-lg">Paroki Santo Mikael Cilegon, Angkatan III, Umum & OMK</p>
        <p className="italic text-xs md:text-lg mt-2">Tema: Mari Bersyukur dan Hidup Sebagai Saksi Tuhan</p>
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-2xl font-bold mb-2">Jadwal Kegiatan:</h2>
          <ul className="text-xs md:text-lg">
            <li>Misa Pembukaan: 30 Juni 2024 (17:30)</li>
            <li>Pengajaran: 30 Juni - 30 Oktober 2024</li>
            <li>Retret: Januari 2025</li>
          </ul>
        </div>
        <div className="mt-4 md:mt-6">
          <h2 className="text-lg md:text-2xl font-bold mb-2">Pengajaran (Offline)</h2>
          <ul className="text-xs md:text-lg">
            <li>Rabu: 19:00-21:30</li>
            <li>Minggu: 19:30-21:30</li>
            <li>Ruangan Filipus PSMC</li>
          </ul>
        </div>
      </div>
      
      <AyatAlkitab
        ayat="Injil Yohanes 20:21"
        isi={`"Maka kata Yesus sekali lagi: 'Damai sejahtera bagi kamu! Sama seperti Bapa mengutus Aku, demikian juga sekarang Aku mengutus kamu.'"`}
      />
    </div>
  );
}

export default Kepinformasi;
