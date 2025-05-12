import React from 'react';

function Card() {
  const characters = [
    {
      name: 'Lucia Caminos',
      image: './lucia.jpg',
      description: 'Fearless and determined, Lucia is the first female protagonist in GTA history.',
    },

    {
      name: 'Jason Duval',
      image: '/jason.jpg',
      description: 'Jason is Lucia’s partner-in-crime with a strong military background.',
    },
    {
      name: 'Boobie Ike',
      image: './boobie.jpg',
      description: 'A Vice City entrepreneur with a hand in everything from clubs to crime.',
    },
    {
        name: 'Raul Batista',
        image: './raul.webp',
        description: 'Veteran bank robber with a tactical mind and decades of underworld experience.',
      },
      {
        name: 'Brian Heder',
        image: './brain.webp',
        description: 'Jason’s landlord and an old smuggler with deep connections in Vice City’s port.',
      },
    {
      name: 'Cal Hampton',
      image: './cal.jpg',
      description: 'Jason’s friend and a conspiracy theorist with questionable logic.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">GTA VI Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {characters.map((char, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img src={char.image} alt={char.name} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{char.name}</h2>
              <p className="text-sm text-gray-300">{char.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
