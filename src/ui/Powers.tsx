import { PowersInterface } from "@/lib/definitions/brawler"
import Image from "next/image"
import Tooltip from "./Tooltip"

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
        <Tooltip title={power.name} description={power.description}>
          <Image
            width={48}
            height={50}
            src={power.imageUrl}
            alt={power.name}
          />
        </Tooltip>
      }
    </>
  )
}

export default Powers