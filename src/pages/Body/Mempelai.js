import { UilInstagram } from '@iconscout/react-unicons';
import pria from '../../img/pria.png';
import Wanita from '../../img/Wanita.png';
import Verse from '../../img/backgorund/Verse.png';

function Mempelai() {
  return (
    <div className="relative" style={{backgroundImage: `url(${Verse})`}}>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center leading-tight">
        </div>
        <br className="my-5"/>
          
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left font-myFont">
            <h2 className="text-4xl font-semibold mb-4">Albertus Magnus Panji Kusuma Wibawa</h2>
            <div className="flex items-center justify-center md:justify-start">
              <img
                  src={pria}
                  alt="gambar aja" 
                  className="w-64 h-64 object-cover mx-auto md:mx-0 mb-4 transform hover:scale-105 transition duration-300"
                />
              <div className="md:ml-6">
              <p className="text-3xl">Putra dari</p>
              <p className="text-lg font-medium">Bapak Susila Dibya Sumana (alm) & Ibu Afra Lenny</p>
              </div>
            </div>
          </div>
          
          <br/>
          <div className="flex items-center justify-center w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0 font-myFont">
            <div className="mx-2 text-4xl">&nbsp;&</div>
          </div>
          <br/>

          <div className="w-full md:w-1/2 text-center md:text-left font-myFont">
            <h2 className="text-4xl font-semibold mb-4">Silvia Ling</h2>
            <div className="flex items-center justify-center md:justify-start">
              <img
                    src={Wanita}
                    alt="gambar aja" 
                    className="w-64 h-64 object-cover mx-auto md:mx-0 mb-4 transform hover:scale-105 transition duration-300"
                  />
              <div className="md:ml-6">
              <p className="text-3xl">Putri dari</p>
              <p className="text-lg font-medium">Bapak Felix Uray & Ibu Yohana</p>

                <div className="flex justify-center md:justify-start"> {/* Menggunakan justify-center pada mode mobile dan justify-start pada mode desktop */}
                  <a href="https://www.instagram.com/silvialing4276/" target="_blank" rel="noreferrer" className="flex items-center text-xl gap-2 text-pink-500">
                    <UilInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mempelai;
