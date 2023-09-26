import { useState, useEffect } from "react";
import Image from "next/image";
import Stars from "./Components/Home/Stars";
import Music from "./Components/Home/Music";
import { Inter } from "next/font/google";
import Dolphins from "./Components/Home/Dolphins";
import Contact from "./Components/Home/Contact";
import Languages from "./Components/Home/Languages"
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GRADIENT_SET, IMAGE_SET,} from "./utils/constants";


export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])), 
  },
}); 

export default function Home() {
  // Cualquier elemento que este primero en los corchetes en el useState es lo mismo que lo que esta en tus parentesis de useState.
  const [abreContacto, setAbreContacto] = useState<boolean>(false);
  const [abreMusica, setAbreMusica] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const [currentSet, setCurrentSet] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleVideos = (): void => {
    window.open(
      "https://www.youtube.com/watch?v=WdSu7FqKvsE&ab_channel=Sh%C3%A8ngL%C3%AC%E3%80%90%E5%8B%9D%E5%88%A9%E3%80%91"
    );
  };
  const handleContact = (): void => {
    if (abreContacto) {
      setAnimate(false);
      setTimeout( () => {
        setAbreContacto(false);
      }, 7000)
    } else {
      setTimeout(() => {
        setAbreContacto(true);
        setAnimate(true);
      }, 0);
    }
  };

  const handleMusic = (): void => {
    if (abreMusica) {
      setAnimate(false);
      setTimeout( () => {
        setAbreMusica(false);
      }, 7000)
    } else {
      setTimeout(() => {
        setAbreMusica(true);
        setAnimate(true);
      }, 0);
    }
  };



  useEffect(() => {

    const irProximaImagen = (): void => {
      setCurrentIndex ((prevCurrentIndex) => {
          if (prevCurrentIndex >= 2) {
            return 0;
          } else {
            return prevCurrentIndex + 1;
          }
      })
    };

    const irProximoSet = (): void => {
      setCurrentSet((prevCurrentSet) => {
        if (prevCurrentSet >= 4) {
          return 0
        } else {
          return prevCurrentSet + 1;
        }
      });

      setCurrentIndex(0); 
    };

    const imagenInterval = setInterval(irProximaImagen, 1000);
    const intervalSet = setInterval(irProximoSet, 12000);
    
    return () => {
      clearInterval(imagenInterval);
      clearInterval(intervalSet);
    };
  }, []);

  // Cosas a completar
  // [❤] => arreglar las fallas de los delfines con flotar (mañana) O
  // [x] => Crear el efecto de la nube de humo
  // [❤] => cambiar las fuentes y agregar otros idiomas. (mañana)
  // [❤] => crear los enlaces de contacto y videos (mañana)
  // [❤] => hacer el loop del video con diferentes colores
  // [❤] => pagina de contacto
  // [x] => pagina de musica
  // [❤] => crear la estrella para que sea responsiva/sensible como los delfines (mañana)
  // [x] => Cambiar los colores con la musica 
  // [x] => la responsividad/sensibilidad de la pagina en general.
  // [❤] => Arreglar la x de la pagina de contacto con las opciones de idioma. 
  // [❤] => los tipos de typexcript 
  // [x] => botones de contacto a otras paginas 
  // [x] => Mejorar el gradiente del background detras de la imagen.
  
  /* Diseño
    [x] => la posicion de la estrella + el texto de la estrella 
    [x] => el efecto de las nyubes para las paginas de contacto y musica 
    [x] => el gradiente de las paginas de contacto y musica 
    [x] => la plantilla de la pagina de music + las canciones (HACER DIBUJO! IMPORTANTE!)
    [x] => Crear dobujitos de iconos de media social 
    [x] => el texto de los idiomas con el idioma correcto 
    [x] => el efecto donde la cancion cambia con la nube gradiente
    [x] => 

    */




  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-hidden items-center justify-center">
      <div className="justify-center items-center w-full h-screen flex relative">
        <Image 
        layout="fill" 
        objectFit="cover" 
        alt="gradient" 
        draggable={false} 
        src={`/images/Layers/${GRADIENT_SET[currentSet]}.png`}
        />
        <Image 
        layout="fill" 
        objectFit="cover" 
        alt="main image"
        draggable={false} 
        src={`/Images/Layers/${IMAGE_SET[currentSet][currentIndex]}.png`}
        />

        {!abreContacto && !abreMusica && <Languages />}

        <Stars 
        svgIndex={currentIndex} 
        color= {"#ffffff"}
        handleClick={handleMusic} 
        /> 

        <Dolphins
          svgIndex={currentIndex}
          colorIndex={currentSet}
          handleVideos={handleVideos}
          handleContact={handleContact}
        />
        { abreMusica && (<Music animate= {animate} setAbreMusica={setAbreMusica} />)}
      
        {
          // Si abreContacto es verdadero entonces el elemento se muestra despues de &&
          abreContacto && <Contact setAbreContacto={setAbreContacto} animate={animate} />
        }
      </div>
    </div>
  );
}

//SYNC AND UPDATE GIT (CUANDO AGREGUES O HAGAS ALGO NUEVO)
// git status
// git add .
// git status 
// git commit -am 'ID' 
// git push origin main 

//PARA REFRESCAR CODIGO 
//git rm --cached 