import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "next-i18next";
import {
  FaTwitter,
  FaInstagramSquare,
  FaTiktok,
  FaYoutube,
  FaDiscord,
  FaMailBulk,
} from "react-icons/fa";
import Link from "next/link";

const Contact = ({ setAbreContacto, animate }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`flex flex-col absolute w-full h-full text-white z-20 ${
        animate ? "cloudBlurEffect" : ""
      }`}
      id="contactoBg"
    >
      <div
        className="relative flex top-10 right-10 ml-auto cursor-pointer z-10"
        onClick={() => setAbreContacto(false)}
      >
        <AiOutlineClose color={"white"} size={20} />
      </div>
      <div className="flex h-full w-full relative flex-col items-center justify-center">
        <div className="relative w-full h-fit flex flex-col items-center justify-center gap-12">
          <div className="flex w-fit h-fit items-center justify-center text-white font-russian text-5xl">
            {t("contact")}
          </div>
          <div className="relative w-full h-full flex flex-row items-center justify-between px-16">
            <div className="flex flex-col gap-3 items-center justify-center w-fit h-fit items-center justify-center">
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter color="white" size={20} />
              </Link>
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare color="white" size={20} />
              </Link>
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok color="white" size={20} />
              </Link>
            </div>
            <div className="relative text-white font-russian text-center items-center justify-center w-1/2 h-fit">
              {t("about")}
            </div>
            <div className="flex flex-col gap-3 items-center justify-center w-fit h-fit items-center justify-center">
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube color="white" size={20} />
              </Link>
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord color="white" size={20} />
              </Link>
              <Link
                className="relative w-fit h-fit flex items-center justify-center"
                href={""}
                target="_blank"
                rel="noreferrer"
              >
                <FaMailBulk color="white" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
