import Link from "next/link";
import { Carpro } from "../../icons";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Uppernav = ({ siteLogoUrl, siteTitle, siteDescription }) => {
  return (
    <div className="flex items-center justify-between flex-wrap text-sm font-medium bg-black border-b border-yellow-400">
      <div className="flex items-center flex-shrink-0 text-white  hover:text-yellow-300  mx-10 duration-500 "></div>
      <div className="hidden lg:block">
        <a
          href="tel:+436769617206"
          className="flex m-2 lg:inline-block text-white "
        >
          <span className="flex flex-row items-center hover:text-yellow-300 ">
            <AiOutlineMail size={25} className="mr-1 lg:mr-0  " />|
            info@carpromorris.se
          </span>
        </a>
        <a
          href="tel:+436769617206"
          className="flex m-2 lg:inline-block text-white"
        >
          <span className="flex flex-row items-center hover:text-yellow-300 ">
            <FaMobileAlt size={25} className="mr-1 lg:mr-0 " />| +436769617206
          </span>
        </a>
      </div>
    </div>
  );
};
export default Uppernav;
