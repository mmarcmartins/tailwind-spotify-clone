import Menu from '@/components/Menu';
import Navigation from '@/components/Content/Navigation';
import RecentsSongs from '@/components/Content/RecentsSongs';
import Recommendations from '@/components/Content/Recommendations';
import CurrentSongPlaying from '@/components/Footer/CurrentSongPlaying';
import SongControll from '@/components/Footer/SongControll';
import AppControll from '@/components/Footer/AppControll';

export default function Home() {
  return (
    <div className="h-screen flex flex-col"> 
      <div className="flex flex-1">
        <Menu/>
        <main className="flex-1 p-6 pb-0"> 
          <Navigation/>
          <h1 className='font-semibold text-3xl mt-10'>Good afternoon</h1>
          <RecentsSongs totalItems={6}/>
          <h1 className='font-semibold text-3xl mt-10'>Made for you</h1>
          <Recommendations totalItems={10}/>
        </main>
      </div>
      <footer className="border-t border-zinc-800 px-6 py-4 flex items-center justify-between">
        <CurrentSongPlaying/>
        <SongControll/>
        <AppControll/>
      </footer>
    </div>
  )
}
