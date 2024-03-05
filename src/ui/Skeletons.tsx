export const CardSkeleton = () => {
  const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';
  return (
    <div className={`${shimmer} rounded-xl relative overflow-hidden bg-gray-100 shadow-sm`}>
      <section className="bg-gray-100 text-black flex gap-4 rounded-lg">
        <div className=" flex-initial h-44 w-44 rounded-[7px_0_0_7px] bg-gray-200"/>
        <div className="h-max text-center flex-[1_1_50%] flex flex-col items-center">
          <h3 className='bg-gray-200 h-7 w-24 my-3 mx-0 font-bold text-xl'/>
          <span className='bg-gray-200 h-6 mt-1 w-24 block font-semibold text-[#444] text-md'/>
          <span className='bg-gray-200 h-6 mt-1 w-24 block font-semibold text-[#444] text-md'/>
          <div className="flex justify-center mt-3 gap-2"/>
        </div>
      </section>
    </div>
  )
}