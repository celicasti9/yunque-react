import React, { useState } from 'react';


const imgURL = "https://entreprehub.com/public/yunque/yunque-sin-fondo.png";

function HomePage() {

  const [currentDay, setCurrentDay] = useState('Monday'); // Replace with dynamic logic

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mt-7">
        <h1 className="mb-4 text-3xl font-extrabold text-black-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-orange-400 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
            Yunque
          </span> 92.9 FM
        </h1>
        <img src={imgURL} alt="home gif" className="justify-center" />
        <iframe
          title="Radio Player"
          src="https://tunein.com/embed/player/s24240/"
          style={{ width: '100%', height: '100px' }}
        ></iframe>
      </div>


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Conoce a nuestro equipo
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nuestro equipo está listo para ayudarte a alcanzar esa demografica.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://entreprehub.com/public/yunque/nelly.jpg"
                  alt="Nelly Carrion"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Nelly Carrion
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Directora de Programación</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full"
                  src="https://entreprehub.com/public/yunque/castillo.jpg"
                  alt="Castillo La Cone"
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Castillo La Cone
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">Talento</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DZ06evO0kevQv?utm_source=generator"
        width="100%"
        height="400"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
      ></iframe>
      </div>


    </div>
  );
}

export default HomePage;