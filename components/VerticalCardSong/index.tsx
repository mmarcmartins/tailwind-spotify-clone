import Image from "next/image";

const VerticalCardSong = () => {
  return(
    <a className='group bg-white/5 p-3 flex flex-col gap-3 rounded-md'>
        <Image src="/albumspotify2.jpg" className='w-full' height={104} width={104} alt="Capa bonita"/>
        <strong className='font-semibold'>Dayli mix 1</strong>
        <span className='text-sm text-zinc-500'>Tove lo</span>        
      </a>
    );
};

export default VerticalCardSong;