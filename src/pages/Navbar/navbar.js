import { useState } from 'react';
import Logoparoki from '../../img/logoparoki.png';
import Logokep from '../../img/logokep.png';
import Qris from '../../img/qris.png'; 

function Navbar() {
  const [isJadwalModalOpen, setIsJadwalModalOpen] = useState(false);
  const [isPendaftaranModalOpen, setIsPendaftaranModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleJadwalModal = () => {
    setIsJadwalModalOpen(!isJadwalModalOpen);
  };

  const togglePendaftaranModal = () => {
    setIsPendaftaranModalOpen(!isPendaftaranModalOpen);
  };

  return (
    <>
      {/* Navbar dengan latar belakang dark */}
      <nav className="bg-gray-900 text-white fixed w-full top-0 z-10">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <img src={Logoparoki} alt="Logo Paroki" className="h-8" />
          <img src={Logokep} alt="Logo Paroki" className="h-8 ml-3" />  
          <div className="flex space-x-4 flex-grow justify-center">
            <button onClick={toggleJadwalModal} className="text-gray-300 hover:text-white mx-4 text-medium font-semibold focus:outline-none">Jadwal Kegiatan</button>
            <button onClick={togglePendaftaranModal} className="text-gray-300 hover:text-white mx-4 text-medium font-semibold focus:outline-none">Pendaftaran</button>
          </div>
        </div>
      </nav>
      {/* Add padding to push content down */}
      <div className="pt-16">
        {/* Your page content goes here */}
      </div>

      {/* Modal Jadwal Kegiatan */}
      {isJadwalModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg max-w-md">
                  <h1 className="text-xl font-semibold mb-4">Kursus Evangelisasi Pribadi</h1>
                  <p>Paroki Santo Mikael Cilegon</p>
                  <p>Angkatan II</p>
                  <p>Umum & OMK</p>
                  <p>Tema: Mari Bersyukur dan Hidup Sebagai Saksi Tuhan</p>
                  <h2 className="text-lg font-semibold mt-4">Jadwal Kegiatan:</h2>
                  <p>Misa Pembukaan: 19 Mei 2024 (18:00)</p>
                  <p>Pengajaran: 19 Mei - 18 Sept 2024</p>
                  <p>Retret: 29 Nov - 01 Des 2024</p>
                  <div className="mt-4">
                    <p>Pengajaran (offline)</p>
                    <p>Rabu: 19:00-21:30</p>
                    <p>Minggu: 19:30-21:30</p>
                    <p>Ruangan Filipus PSMC</p>
                  </div>
                  <button onClick={toggleJadwalModal} className="bg-gray-900 text-white font-medium rounded-lg px-4 py-2 mt-4">Close</button>
                </div>
              </div>
      )}

      {/* Modal Pendaftaran */}
      {isPendaftaranModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h1 className="text-xl font-semibold mb-4">Pendaftaran</h1>
            <div className="flex items-center mb-4">
              <img src={Qris} alt="QR Code" className="w-18 h-18 mr-4" /> {/* Ubah ukuran sesuai kebutuhan */}
              <div>
                <p className="mb-2">Biaya Pendaftaran:</p>
                <p>Umum: Rp 200,000/Peserta</p>
                <p>OMK: Rp 100,000/Peserta</p>
              </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdl1JM17ZLVirlKMMz3WgZXnFDvMqmlaQ_NldUPyemrPAEdGg/viewform" target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white font-medium rounded-lg px-4 py-2 mt-4 block text-center">Link Pendaftaran</a>
            <button onClick={togglePendaftaranModal} className="bg-gray-900 text-white font-medium rounded-lg px-4 py-2 mt-2 block text-center">Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
