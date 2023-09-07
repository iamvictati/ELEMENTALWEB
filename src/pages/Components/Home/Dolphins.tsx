import Dolphin1 from "@/pages/Components/Svgs/Dolphin1";
import Dolphin2 from "@/pages/Components/Svgs/Dolphin2";
import Dolphin3 from "@/pages/Components/Svgs/Dolphin3";
import Dolphin4 from "@/pages/Components/Svgs/Dolphin4";
import Dolphin5 from "@/pages/Components/Svgs/Dolphin5";
import Dolphin6 from "@/pages/Components/Svgs/Dolphin6";
import { FunctionComponent } from "react";
import { DolphinsProps } from "../types/components.types";
import { SVG_COLOR_FILL } from "@/pages/utils/constants";

const Dolphins: FunctionComponent<DolphinsProps> = ({ svgIndex, handleVideos,handleContact,colorIndex}) => {
  switch (svgIndex) {
    case 1:
      return (
        //operador ternario (ternery operator)
        // Cuanndo discoteca es (true,false), hay que hacer esto (verdadero) : hay que hacer lo otro (falso)
        // Para este operador hay que usar las tildes porque con las tildes puedes escribir codigo adentro usando los simbolos $ y {}
        //Sin la tilde no sirve
        <div
          className={`absolute flex justify-center items-center z-10 bottom-20 gap-4 flex-col
         w-40 h-40 hover:scale-125`}
        >
          <Dolphin2  
          handleClick={handleVideos}
          color={SVG_COLOR_FILL[colorIndex]}
          />
          <Dolphin5 
          handleClick={handleContact}
          color={SVG_COLOR_FILL[colorIndex]}
          />
        </div>
      );

    case 2:
      return (
        <div
          className={`absolute flex justify-center items-center z-10 bottom-20 gap-4 flex-col w-40 h-40 hover:scale-125`}
        >
          <Dolphin3 
          handleClick={handleVideos}
          color={SVG_COLOR_FILL[colorIndex]}
          />
          <Dolphin6 
          handleClick={handleContact}
          color={SVG_COLOR_FILL[colorIndex]}
          />
        </div>
      );

    default:
      return (
        <div
          className={`absolute flex justify-center items-center z-10 bottom-20 gap-4 flex-col w-40 h-40 hover:scale-125`}
        >
          <Dolphin1 
          handleClick={handleVideos}
          color={SVG_COLOR_FILL[colorIndex]}
          />
          <Dolphin4 
          handleClick={handleContact}
          color={SVG_COLOR_FILL[colorIndex]}/>
        </div>
      );
  }
};
export default Dolphins;
