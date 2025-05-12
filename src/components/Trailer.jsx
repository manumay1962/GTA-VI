import React, { useState } from 'react';

function Trailer() {
  // State to toggle between the two trailers
  const [currentTrailer, setCurrentTrailer] = useState(1);

  // Function to switch trailers
  const switchTrailer = (direction) => {
    if (direction === 'next') {
      setCurrentTrailer((prev) => (prev === 1 ? 2 : 1));  // Go to the next trailer
    } else {
      setCurrentTrailer((prev) => (prev === 2 ? 1 : 2));  // Go to the previous trailer
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
        GTA VI Official Trailers
      </h1>

      {/* Trailer Slider */}
      <div className="w-full max-w-4xl aspect-video shadow-2xl rounded-2xl overflow-hidden border-4 border-purple-600 relative">
        {/* First Trailer */}
        {currentTrailer === 1 && (
          <iframe
            className="w-full h-full transition-opacity duration-700"
            src="https://www.youtube.com/embed/QdBZY2fkU-0"
            title="GTA VI Trailer 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {/* Second Trailer */}
        {currentTrailer === 2 && (
          <iframe
            className="w-full h-full transition-opacity duration-700"
            src="https://www.youtube.com/embed/VQRLujxTm3c"
            title="GTA VI Trailer 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {/* Left Arrow Button to Go Back (Only show if on second trailer) */}
        {currentTrailer === 2 && (
          <button
            onClick={() => switchTrailer('prev')}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 opacity-75 hover:opacity-100 transition-all"
          >
           <i class="ri-arrow-left-fill"></i>
          </button>
        )}

        {/* Right Arrow Button to Go Next (Only show if on first trailer) */}
        {currentTrailer === 1 && (
          <button
            onClick={() => switchTrailer('next')}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl bg-purple-600 text-white rounded-full p-3 shadow-lg hover:bg-purple-700 opacity-75 hover:opacity-100 transition-all"
          >
           <i class="ri-arrow-right-fill"></i>
          </button>
        )}
      </div>

      <p className="text-gray-400 text-center mt-6 max-w-2xl text-lg">
        {currentTrailer === 1
          ? 'Witness the first glimpse of Rockstar’s most anticipated release — Grand Theft Auto VI.'
          : 'Dive deeper into the world of GTA VI with this second trailer. Explore the story, characters, and the chaotic world that awaits.'}
      </p>
    </div>
  );
}

export default Trailer;
