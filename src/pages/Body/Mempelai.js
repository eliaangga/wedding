import Keuskupan from '../../img/keuskupan.png';
import Romocilegon from '../../img/romocilegon.png';
import Kephalaman4 from '../../img/kephalaman4.png';

function Mempelai() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${Kephalaman4})`,
    }}>
      <div className="container mx-auto px-4 py-16 relative">
        <div className="text-center leading-tight">
          {/* Konten */}
        </div>
        <br className="my-5"/>
          
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left text-white  md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">mgr. Paskalis Bruno Syukur OFM</h2>
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={Keuskupan}
                alt="gambar aja" 
                className="w-64 h-64 object-cover mx-auto md:mx-0 mb-4 transform hover:scale-105 transition duration-300 rounded-lg max-w-full"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="md:ml-6">
                <p className="text-lg font-medium">"Dengan Mengikuti kep kita akan mendapatkan sukacita hidup menggereja secara sinodai berkatekese"</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left text-white mt-20 md:mt-0">
            <h2 className="text-3xl font-semibold mb-4">RD. Thomas Vilkanova Saidi</h2>
            <div className="flex items-center justify-center md:justify-start">
              <img
                src={Romocilegon}
                alt="gambar aja" 
                className="w-64 h-64 object-cover mx-auto md:mx-0 mb-4 transform hover:scale-105 transition duration-300 rounded-lg"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="md:ml-6">
                <p className="text-lg font-medium">"Dengan Mengikuti kep akan semakin bagus dalam menggereja baik dalam pelayanan maupun dalam perayaan ekaristi"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mempelai;
