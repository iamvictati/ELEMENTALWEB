import Star1 from "./../Svgs/Star1";
import Star2 from "./../Svgs/Star2";
import Star3 from "./../Svgs/Star3";
import { StarsProps } from "./../types/components.types";
import { FunctionComponent } from "react"


const Stars: FunctionComponent<StarsProps> = ({svgIndex, color, handleClick}) => {

switch (svgIndex) {
    case 1: 
    return (
        <div className="flex w-36 h-36 absolute cursor-pointer z-10 justify-center items-center hover:scale-125 top-4">
            <Star2 color={color} handleClick={handleClick} />
        </div>
    )

    case 2:
        return (
            <div className="flex w-36 h-36 absolute cursor-pointer z-10 justify-center items-center hover:scale-125 top-4">
                <Star3 color={color} handleClick={handleClick} />
            </div>
        )

    default: 
    return (
        <div className="flex w-36 h-36 absolute cursor-pointer z-10 justify-center items-center hover:scale-125 top-4">
            <Star1 color={color} handleClick={handleClick} />
        </div>
    )
}


}

export default Stars;