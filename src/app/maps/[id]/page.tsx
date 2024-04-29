import { getMap } from "@/lib/data"
import BrawlStats from "@/ui/BrawlStats"
import Tooltip from "@/ui/Tooltip"
import { Metadata } from "next";

export async function generateMetadata({ params }: {params: { id: string }}): Promise<Metadata> {
  const { id } = params
  const map = await getMap(id)
 
  return {
    title: `Map - ${map.name}`,
    description: map.gameMode.description
  }
}

const Map = async ({params}: { params: { id: string }}) => {
  const { id } = params
  const map = await getMap(id)

  return (
    <>
      {Boolean(Object.values(map).length) &&
        <section className='max-w-max mx-auto my-0 py-8 px-0'>
          <div className='flex flex-col rounded-xl p-4 gap-5' style={{ backgroundColor: map.gameMode.bgColor }}>
            <picture>
              <img
                height={0}
                width={0}
                sizes="100vw"
                className='w-full max-w-[500px] h-auto p-0'
                src={map.imageUrl} alt={map.name}
              />
            </picture>
            <div className='flex gap-3 font-medium'>
              <picture>
                <img
                  height={50}
                  width={50}
                  className="mt-3 object-contain"
                  src={map.gameMode.imageUrl} 
                  alt={map.gameMode.name} 
                />
              </picture>
              <div className='max-w-[440px]'>
                <h2>{map.gameMode.name}</h2>
                <span className='mt-1 bg-black px-2 py-1 rounded-md flex items-center gap-1'>
                  {map.name}
                  {map.credit &&
                    <Tooltip title='Community map!' description={map.credit} community high='45px'>
                      <svg 
                        width="30px" 
                        height="30px" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M20.9996 11.5C20.9996 16.1944 17.194 20 12.4996 20C11.4228 20 10.3928 19.7998 9.44478 19.4345C9.27145 19.3678 9.18478 19.3344 9.11586 19.3185C9.04807 19.3029 8.999 19.2963 8.92949 19.2937C8.85881 19.291 8.78127 19.299 8.62619 19.315L3.50517 19.8444C3.01692 19.8948 2.7728 19.9201 2.6288 19.8322C2.50337 19.7557 2.41794 19.6279 2.3952 19.4828C2.36909 19.3161 2.48575 19.1002 2.71906 18.6684L4.35472 15.6408C4.48942 15.3915 4.55677 15.2668 4.58728 15.1469C4.6174 15.0286 4.62469 14.9432 4.61505 14.8214C4.60529 14.6981 4.55119 14.5376 4.443 14.2166C4.15547 13.3636 3.99962 12.45 3.99962 11.5C3.99962 6.80558 7.8052 3 12.4996 3C17.194 3 20.9996 6.80558 20.9996 11.5Z" 
                          stroke={map.gameMode.bgColor}
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path 
                          fillRule="evenodd" 
                          clipRule="evenodd" 
                          d="M12.4965 8.94925C11.5968 7.9104 10.0965 7.63095 8.96924 8.58223C7.84196 9.5335 7.68326 11.124 8.56851 12.2491C9.11696 12.9461 10.4935 14.2191 11.4616 15.087C11.8172 15.4057 11.995 15.5651 12.2084 15.6293C12.3914 15.6844 12.6017 15.6844 12.7847 15.6293C12.9981 15.5651 13.1759 15.4057 13.5315 15.087C14.4996 14.2191 15.8761 12.9461 16.4246 12.2491C17.3098 11.124 17.1705 9.5235 16.0238 8.58223C14.8772 7.64096 13.3963 7.9104 12.4965 8.94925Z" 
                          stroke={map.gameMode.bgColor}
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Tooltip>                  
                  }
                </span>
                <span className='block mt-1 text-lg'>{map.gameMode.mode}</span>
                <span className='block mt-1'>{map.gameMode.description}</span>
              </div>
            </div>
            {Boolean(map.stats.length) &&
              <div>
                <h3>Top {map.stats.length} best brawlers for this map</h3>
                <BrawlStats stats={map.stats} />
              </div>
            }
          </div>
        </section>
      }
    </>
  )
}

export default Map