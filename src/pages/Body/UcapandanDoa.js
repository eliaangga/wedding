import { useState, useEffect } from 'react';
import CommentEnvelope from '../../img/CommentEnvelope.svg';
import { getDatabase, ref, push, set, onValue } from 'firebase/database'; // Mengimpor modul database Firebase

// Inisialisasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZFXqYaqW_CWvVwVT078_XB7yqSAMNbEg",
  authDomain: "wedding-a0e2f.firebaseapp.com",
  projectId: "wedding-a0e2f",
  storageBucket: "wedding-a0e2f.appspot.com",
  messagingSenderId: "926994583732",
  appId: "1:926994583732:web:b08122e9ef916d0868c7e1",
  measurementId: "G-TLTDG7QG6F"
};

const database = getDatabase(); // Menginisialisasi database Firebase

function UcapandanDoa() {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [daftarPesan, setDaftarPesan] = useState([]);

  // Mendapatkan data komentar saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await onValue(ref(database, 'daftarPesan'));
      const data = snapshot.val();
      if (data) {
        setDaftarPesan(Object.values(data));
      }
    };
    fetchData();
  }, []);

  const kirimPesan = () => {
    if (nama.trim() !== '' && pesan.trim() !== '') {
      const waktuPesan = new Date().toLocaleString();
      const newMessageRef = push(ref(database, 'daftarPesan'));
      set(newMessageRef, { nama, pesan, waktuPesan });
      setNama('');
      setPesan('');
    }
  };

  return (
    <fieldset className="p-8 shadow-lg text-center mt-4 bg-[#20669B]">
      <div className="border p-8 shadow-lg rounded-lg text-center mt-4 mb-4 bg-white ">
        <div className="mb-8 text-2xl text-cyan-900">
          Tinggalkan pesan/doa untuk kami
          <img
            src={CommentEnvelope}
            alt="wow"
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
