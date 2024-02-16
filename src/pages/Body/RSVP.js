import { useState } from 'react';
import { hourglass } from 'ldrs';
import '../../style.css';
import RSVPBackground from '../../img/backgorund/RSVPBackground.png';

hourglass.register();

function RSVP() {
  const [isGoing, setIsGoing] = useState(null);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [familyName, setFamilyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);

    try {
      const response = await fetch (
        "https://v1.nocodeapi.com/eliaangga/google_sheets/WifTIutoFkYeRqUK?tabId=Kehadiran1", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([
            [familyName, numberOfGuests, new Date().toLocaleString()],
          ]),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to submit data');
      }
      setIsSuccess(true);
      setFamilyName('');
      setNumberOfGuests(1);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${RSVPBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-lg font-myFont">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">RSVP</h1>
        
        <p className="text-gray-700 mb-6 text-center">
          Merupakan suatu kehormatan dan kebahagian bagi kami, apabila 
          Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada 
          kedua mempelai.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-center">Konfirmasi Kehadiran</h2>
        
        <div className="flex justify-center mb-4">
          <button 
            className={`px-6 py-2 rounded ${isGoing === true ? 'bg-[#20669B] text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setIsGoing(true)}
          >
            Saya Bisa Hadir
          </button>
          <button
            className={`px-6 py-2 rounded ml-4 ${isGoing === false ? 'bg-[#20669B] text-white' : 'bg-gray-300 text-gray-800'}`}
            onClick={() => setIsGoing(false)}        
          >
            Saya Tidak Bisa Hadir
          </button>
        </div>

        {isGoing === true && (
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Nama Keluarga
              </label>
              <input
                type="text"
                className="border p-2 w-full rounded focus:outline-none focus:border-blue-500" 
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)} 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Jumlah Tamu
              </label>
              <select
                value={numberOfGuests}
                onChange={(e) => setNumberOfGuests(e.target.value)}
                className="border p-2 rounded focus:outline-none focus:border-blue-500"
              >
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              ‎ ‎ maksimal 2 orang
            </div>

            {isLoading ? (
              <div className="loading-overlay">
                <div className="loading-message">Tunggu beberapa saat...</div>
                <l-hourglass size="40" bg-opacity="0.1" speed="1.75" color="white" />
              </div>
            ) : (
              <button 
                className="bg-[#20669B] hover:bg-white text-white hover:text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleSubmit}
              >
                Kirim
              </button>
            )}


          </form>
        )}

        {/* Error message */}
        {isError && ( 
          <div className="text-center mt-4 text-red-500">Ups, terjadi kesalahan, silakan coba lagi</div>
        )}
        {/* Success message */}  
        {isSuccess && (
          <div className="text-center mt-4 text-green-500">Data berhasil dikirim, terima kasih!</div>
        )}
      </div>
    </div>
  );
}

export default RSVP;

