import { getAllMaps } from "@/lib/data"
import { MapsNamesInterface } from "@/lib/definitions/maps"
import { groupByMapsTitle } from "@/lib/utils"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Maps',
  description: "All maps from Brawl Stars",
};

const Maps = async () => {
  const allMaps = await getAllMaps()
  // const maps: MapsNamesInterface = groupByMapsTitle(allMaps)
  // const mapsNames = Object.keys(maps)

  return 'Si reenderiza map'

  // return (
  //   <>
  //     <h1 className='text-center my-8 mx-0 text-4xl font-bold mb-10'>Maps</h1>
  //     {mapsNames.map(mapName => (
  //       <section key={mapName} className='px-0 py-5'>
  //         <h2 className="mb-4 text-2xl font-semibold">{mapName}</h2>
  //         <div className='flex flex-wrap items-center gap-2'>
  //           {maps[mapName as keyof MapsNamesInterface].map(map => (
  //             <Link href={`/maps/${map.id}`} key={map.id}>
  //               <Image
  //                 className="h-auto cursor-pointer object-contain"
  //                 width={150}
  //                 height={150}
  //                 src={map.imageUrl} 
  //                 alt={map.name} 
  //               />
  //             </Link>
  //           ))}
  //         </div>
  //       </section>
  //     ))}
  //   </>
  // )
}

export default Maps