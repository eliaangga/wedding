import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import foto1 from '../../img/foto1.jpg';
import foto2 from '../../img/foto2.jpg';
import foto3 from '../../img/foto3.jpg';
import foto4 from '../../img/foto4.jpg';
import foto5 from '../../img/foto5.jpeg';
import foto6 from '../../img/foto6.jpeg';
import foto7 from '../../img/foto7.jpg';
import foto8 from '../../img/foto8.jpg';
import foto9 from '../../img/foto9.jpg';
import foto10 from '../../img/foto10.jpg';
import FotoBackground from '../../img/backgorund/FotoBackground.png';

function Photo({ src, setShowModal }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <img
        src={src}
        alt="gambar aja"
        className="max-w-full max-h-full rounded-lg cursor-pointer transform transition duration-300 hover:scale-110 hover:shadow-xl object-contain"
        onClick={() => setShowModal(true)}
      />
    </div>
  );
}

function Modal({ src, setShowModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-2 max-w-2/3 md:max-w-1/2 lg:max-w-1/3">
        <img src={src} className="max-w-full h-auto" alt="gambar aja"/>
        <button className="text-white absolute top-2 right-2" onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
}

function HighlightFoto() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const NextArrow = ({ onClick }) => (
    <button className="absolute top-1/2 -right-4 md:-right-8 lg:-right-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none z-10" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );  
  
  const PrevArrow = ({ onClick }) => (
    <button className="absolute top-1/2 -left-4 md:-left-8 lg:-left-12 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full focus:outline-none z-10" onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );    

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: `url(${FotoBackground})` }}>
      <div className="container mx-auto py-8 w-full md:w-3/4 lg:w-2/3">
        <Slider {...settings} className="w-full">
          <div>
            <Photo src={foto1} setShowModal={() => { setSelectedPhoto(foto1); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto2} setShowModal={() => { setSelectedPhoto(foto2); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto3} setShowModal={() => { setSelectedPhoto(foto3); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto4} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto5} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto6} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto7} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto8} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto9} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
          <div>
            <Photo src={foto10} setShowModal={() => { setSelectedPhoto(foto4); setShowModal(true); }} />
          </div>
        </Slider>
      </div>
      {showModal && <Modal src={selectedPhoto} setShowModal={setShowModal} />}
    </div>
  );
}

export default HighlightFoto;
