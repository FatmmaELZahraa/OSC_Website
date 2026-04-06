import React from 'react';
import PlaylistCard from '../components/PlaylistCard/PlaylistCard';
import Footer from '../components/Footer/Footer';

const Playlists = () => {
  const categories = [
    { name: "Linux", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBmAWvj6rAjvXJTJnePxw9-C" },
    { name: "UI UX", url: "https://youtube.com/..." },
    { name: "Frontend", url: "https://youtube.com/..." },
    { name: "Game", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBknf5g6olOAEYFMXYRA-ZAm" },
    { name: "Backend", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBkU8ZthGC34txVunPHzjlIh" },
    { name: "Flutter", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBkNj3xypRBlE-KBg3oW6xzX" },
    { name: "Blender", url: "https://www.youtube.com/playlist?list=PLanhLNyaKYBn_ORjvoM2rkPkBfTi5ch7t" },
    { name: "HR", url: "https://youtube.com/..." }
  ];

  return (
    <div className="min-h-screen bg-[#181818] text-white font-serif p-8 md:p-16 relative overflow-hidden">
      <div className="absolute right-[-19%] top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
        <img src="/Playlist.png" alt="decoration" className="w-[500px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-3xl "><img src="/group.svg" alt="lock" /></span> 
          <h1 className="text-3xl text-oscOrange font-medium">OSC Play Lists</h1>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-130 max-w-2xl">
          {categories.map((cat, index) => (
            <PlaylistCard key={index} title={cat.name} link={cat.url} />
          ))}
        </div>
      </div>

 
    <Footer />
    
    </div>
  );
};

export default Playlists;