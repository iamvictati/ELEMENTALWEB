export type ContactProps = {
    setAbreContacto: (e: boolean) => void;
    animate: boolean; 
};

export type StarsProps ={
    svgIndex: number;
    color: string;
    handleClick: ( ) => void; 
};

export type DolphinsProps = {
    handleVideos: () => void;
    handleContact: ()  => void;
    svgIndex: number;
    colorIndex: number;
}

export type MusicProps = {
    setAbreMusica: (e: boolean) => void;
    animate: boolean;
};

// Cuando encesitas crear un tipo paera tu elemento se usa Props 
// Props es mas como argumentos o parametros 