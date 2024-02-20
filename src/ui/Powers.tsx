import { PowersInterface } from "@/lib/definitions/brawler"
import Image from "next/image"

const Powers = ({ power, tooltip }: PowersInterface) => {
  return (
    <>
      {!tooltip && 
        <Image 
          width={35}
          height={37} 
          src={power.imageUrl} 
          alt={power.name} 
        /> 
      }
      {tooltip &&
        <Image
          width={48}
          height={50}
          src={power.imageUrl}
          alt={power.name}
        />
        // <Tooltip title={power.name} description={power.description}>
        // </Tooltip>
      }
    </>
  )
}

export default Powers