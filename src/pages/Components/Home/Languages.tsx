import Link from "next/link";

const Languages = () => {
    return (
        <div  className="absolute top-10 right-10 flex flex-row w-fit h-fit items-center justify-center ml-0 gap-2 text-white font-russian text-sm">
            <Link  href="/" className="w-fit h--fit flex justify-center items-center" locale="en">en</Link>
            <Link href="/" className="w-fit h--fit flex justify-center items-center" locale="es">es</Link>
            <Link  href="/" className="w-fit h--fit flex justify-center items-center" locale="zh">中文</Link>
        </div>
    )
}

export default Languages; 