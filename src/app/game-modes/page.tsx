import { getAllGameModes } from "@/lib/data"
import { GameModesInterface } from "@/lib/definitions/gameModes"
import Tooltip from "@/ui/Tooltip"
import Image from "next/image"

const GameModes = async () => {
  const { list }: GameModesInterface = await getAllGameModes()
  
  return (
    <>
      <h1 className='text-center my-8 mx-0 text-4xl font-bold mb-10'>Game Modes</h1>
      <section className='grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-5 pb-12'>
        {list.map(gameMode => (
          <div key={gameMode.scId} className='h-40 relative rounded-md border-solid border-white border-4'>
            <div className='flex justify-between py-0 px-1 h-12' style={{ backgroundColor: gameMode.bgColor }}>
              <div className="flex gap-3 items-center">
                <Image
                  height={32}
                  width={32} 
                  className='object-contain' 
                  src={gameMode.imageUrl} 
                  alt={gameMode.name} 
                />
                <h3 className="text-lg font-semibold">{gameMode.name}</h3>
              </div>
              <Tooltip title={gameMode.tutorial} high='40px'>
                <Image
                  height={25}
                  width={25} 
                  className='objetc-contain cursor-auto' 
                  src='https://cdn-old.brawlify.com/icon/Info-Round.png' 
                  alt="info" 
                />
              </Tooltip>
            </div>
            <Image
              height={0}
              width={0}
              sizes="100vw"
              className='object-cover h-[105px] w-full' 
              src={gameMode.imageUrl2} 
              alt={gameMode.name} 
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default GameModes