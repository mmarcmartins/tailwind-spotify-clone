import { Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react";

const SongControll = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center gap-6'>
        <Shuffle size={20} className='text-zinc-200'/>
        <SkipBack size={20} className='text-zinc-200'/>            
        <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full text-black bg-white ml-auto'>
            <Play fill='bg-black'/>
        </button>
        <SkipForward size={20} className='text-zinc-200'/>
        <Repeat size={20} className='text-zinc-200'/>
      </div>
      <div className='flex items-center gap-2 mt-2'>
        <span className='text-xs text-zinc-400'>0:31</span>
        <div className='h-1 rounded-full w-96 bg-zinc-600'>
          <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
        </div>
        <span className='text-xs text-zinc-400'>1:31</span>
      </div>
    </div>
  );
};

export default SongControll;