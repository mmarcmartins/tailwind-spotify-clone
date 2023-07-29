import VerticalCardSong from "@/components/VerticalCardSong";

const Recommendations = ({totalItems}: {totalItems: number}) => {
  return (
    <div className='grid grid-cols-8 gap-4 mt-4 max-h-96 overflow-hidden overflow-y-scroll pr-2'>
      { Array(totalItems).fill(0).map((_,key) => (
        <VerticalCardSong key={key}/>
      ))}
    </div>
  );
};

export default Recommendations;