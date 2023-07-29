import { Play } from "lucide-react";
import Image from "next/image";

const HorizontalCardSong = () => {
  return(
    <a href="#" className='bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors group'>
      <Image src="/albumspotify2.jpg" height={104} width={104} alt="Capa bonita"/>
      <strong>Playlist</strong>
      <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
        <Play fill='bg-black'/>
      </button>
    </a>
    );
};

export default HorizontalCardSong;