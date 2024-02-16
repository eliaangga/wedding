import { useState } from 'react';
import CommentEnvelope from '../../img/CommentEnvelope.svg';

function UcapandanDoa() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState(''); 
  const [daftarPesan, setDaftarPesan] = useState([]);

  const kirimPesan = () => {
    if (nama.trim() !== '' && pesan.trim() !== '') {
      const waktuPesan = new Date().toLocaleString();
      setDaftarPesan([...daftarPesan, { nama, pesan, waktuPesan }]);
      setNama('');
      setPesan('');
    }
  };  

  return (
    <fieldset className="p-8 shadow-lg text-cente mt-4 bg-[#20669B]">
      <div className="border p-8 shadow-lg rounded-lg text-center mt-4 mb-4 bg-white ">
        <div className="mb-8 text-2xl text-cyan-900">
          Tinggalkan pesan/doa untuk kami
          <img 
            src={CommentEnvelope}
            alt='wow'
            className="w-15 h-20 mt-3 mx-auto"  
          /> 
        </div>
        <div className="flex flex-col items-center mb-6">
          <input 
            placeholder="Nama"
            className="w-1/2 border p-3 rounded mb-4 focus:outline-none"
            value={nama}
            onChange={(e) => setNama(e.target.value)} 
          />
          <input
            placeholder="Pesan Ucapan & Doa"
            className="w-1/2 border p-3 rounded mb-4 focus:outline-none"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />
          <button 
            className="bg-cyan-500 text-white px-4 py-2 rounded focus:outline-none"
            onClick={kirimPesan}  
          >
            Kirim
          </button>
        </div>
      </div>

      <div className="border border-gray-400 p-4 rounded-lg bg-white">
      {daftarPesan.map((item, index) => (
          <div key={index} className="bg-white-100 mb-4 p-4 rounded-lg text-left">
            <p className="font-semibold mb-1">{item.nama}</p>
            <p className="text-sm mb-1">{item.pesan}</p>
            <p className="text-xs text-gray-500">{item.waktuPesan}</p>
          </div>
        ))}
      </div>
    </fieldset>
  );
}

export default UcapandanDoa;


