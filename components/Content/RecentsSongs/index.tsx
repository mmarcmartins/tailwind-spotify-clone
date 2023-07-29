import CardSong from "@/components/HorizontalCardSong";

const RecentsSongs = ({totalItems}: {totalItems: number}) => {
  return(
    <div className='grid grid-cols-3 gap-4 mt-4'> 
    { Array(totalItems).fill(0).map((_,key) => (
      <CardSong key={key} />
    ))}  
    </div>
  );

};

export default RecentsSongs;