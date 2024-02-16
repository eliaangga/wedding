import { useState } from 'react';
import BCA from '../../img/BCA.png';
import { IonIcon } from '@ionic/react';
import { walletOutline } from 'ionicons/icons';

function Transfer() {

    const [showBank, setShowBank] = useState(false);
    const [copied, setCopied] = useState(false);
  
    const handleCopy = (text) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
  
      setTimeout(() => {
        setCopied(false);
      }, 2000); 
    }

  return (
    <div className="p-4 text-center mt-8 mb-8 font-myFont">

      <h2 className="text-2xl font-medium mb-3">Wedding Gift</h2>

      <p className="mb-4">
        Bagi keluarga dan sahabat yang ingin mengirimkan hadiah, silakan mengirimkannya melalui tautan berikut:
      </p>

      <button
        className="bg-[#20669B] text-white py-2 px-4 rounded mr-2"
        onClick={() => setShowBank(true)}  
      >
        <IonIcon icon={walletOutline} className="mr-3 w-4 h-4"/>
        Bank Transfer
      </button>

      {/* Popup Transfer Bank */}
      {showBank && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center mx-auto">
          
          <div className="bg-white rounded p-8">

          <h3 className="text-lg font-medium text-center mt-2">Rekening Penerima</h3>

            {/* Card 1 */}
            <div className="max-w-md p-8 m-4 mx-auto bg-gradient-to-r from-white via-babyblue-100 to-pink-100 rounded-lg text-gray-900 border-2 border-black-500">
                
                <img 
                src={BCA}
                alt='wow'
                className="w-15 h-20 mt-3 mx-auto"  
                />

                <h3 className="text-lg font-medium text-center mt-2">Panji Kusuma Wibawa</h3>

                <p className="account-number text-center text-sm mt-1">6520294889</p>

                <div className="flex justify-center items-center mt-4" >
                <button className="bg-white text-purple-500 rounded-full py-1 px-4 text-sm" 
                    onClick={() => handleCopy("6520294889")}>
                    {copied ? "Copied" : "Copy Number"}
                </button>
                </div>

            </div>

            {/* Card 2 */}
            <div className="max-w-md p-8 m-4 mx-auto bg-gradient-to-r from-white via-babyblue-100 to-pink-100 rounded-lg text-gray-900 border-2 border-black-500">

                <img 
                src={BCA}
                alt='wow'
                className="w-15 h-20 mt-3 mx-auto"  
                />

                <h3 className="text-lg font-medium text-center mt-2">Silvia</h3>

                <p className="account-number text-center text-sm mt-1">5380100381</p>

                <div className="flex justify-center items-center mt-4">
                <button className="bg-white text-purple-500 rounded-full py-1 px-4 text-sm"  
                    onClick={() => handleCopy("5380100381")}>
                    {copied ? "Copied" : "Copy Number"}
                </button>
                </div>

            </div>
            
            <button
                    className="mt-4 bg-white text-gray-600 border"
                    onClick={() => setShowBank(false)} 
                  >
                    Tutup
                  </button>

          </div>
        
        </div>
      )}


    </div>
  );

}

export default Transfer;


