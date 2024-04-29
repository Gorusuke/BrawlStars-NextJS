import { PowersInterface } from "@/lib/definitions/brawler"
import Tooltip from "./Tooltip"

const Powers = ({ power, tooltip }: PowersInterface) => {
  return (
    <>
      {!tooltip && 
        <picture>
          <img 
            width={35}
            height={37} 
            src={power.imageUrl} 
            alt={power.name} 
          /> 
        </picture>
      }
      {tooltip &&
        <Tooltip title={power.name} description={power.description}>
          <picture>
            <img
              width={48}
              height={50}
              src={power.imageUrl}
              alt={power.name}
            />
          </picture>
        </Tooltip>
      }
    </>
  )
}

export default Powers