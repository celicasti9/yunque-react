
function About1 () {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Somos una empresa de radio y telecomunicaciones netamente puertorriqueña que transmite una programación 
            diversa a través de radio. Ofreciendo contenidos especializados 
            que cubren segmentos exclusivos en industrias de crecimiento (salud, deportes, Top40, entre otras). Establecemos 
            alianzas estratégicas locales e internacionales que fortalecen nuestra oferta y servicio.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src="https://iili.io/JVmSGv1.md.png" alt="A group of People" />
                </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">Our team</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">Nuestro equipo siempre trabaja con las demograficas de mayor alcance.</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                        <div className="p-2 pb-2 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://entreprehub.com/public/yunque/nelly.jpg" alt="Nelly Carrion" />
                            <img className="md:hidden block" src="https://entreprehub.com/public/yunque/nelly.jpg" alt="Nelly Carrion" />
                            <p className="font-medium text-xl leading-2 text-gray-800 mt-2">Nelly Carrion</p>
                        </div>
                        <div className="p-2 pb-2 flex justify-center flex-col items-center">
                            <img className="md:block hidden" src="https://entreprehub.com/public/yunque/castillo.jpg" alt="Castillo La Cone" />
                            <img className="md:hidden block" src="https://entreprehub.com/public/yunque/castillo.jpg" alt="Castillo La Cone" />
                            <p className="font-medium text-xl leading-2 text-gray-800 mt-2">Castillo La Cone</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;

