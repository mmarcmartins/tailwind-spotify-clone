import Image from "next/image";

const CurrentSongPlaying = () => {
  return(
    <div className='flex items-center gap-3'>
      <Image src="/albumspotify2.jpg" height={48} width={48} alt="Capa bonita"/>
      <div className='flex flex-col'>
        <strong className='font-normal'>Tailwind Tutorial</strong>
        <span className='text-xs text-zinc-400'>Rocketseat</span>
      </div>
    </div>
  );
};

export default CurrentSongPlaying;