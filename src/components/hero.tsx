import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[70vh] md:h-[80vh] w-full">
      <div className="absolute inset-0">
        <Image 
          src="/hero.webp" 
          alt="Hero" 
          fill
          objectFit="cover" 
          className="z-0" 
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-15 z-10 flex items-center justify-center">
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl mb-6">Discover the best properties in your desired location</p>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Enter an address, neighborhood, city"
              className="w-full p-4 rounded-lg text-black placeholder-gray-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
