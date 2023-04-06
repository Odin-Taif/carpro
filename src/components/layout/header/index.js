import Link from "next/link";
import { useContext, useState } from "react";
import { isEmpty } from "lodash";
import { BurgerIcon, Carpro, Bag, User, Wishlist } from "../../icons";
import { AppContext } from "../../context";
import { getPathNameFromUrl } from "../../../utils/miscellaneous";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Header = ({ header }) => {
  const [cart, setCart] = useContext(AppContext);
  const { headerMenuItems, siteDescription, siteLogoUrl, siteTitle } =
    header || {};

  const [isMenuVisible, setMenuVisibility] = useState(false);
  // console.log(siteLogoUrl)
  return (
    <>
      <div>
        <div className="flex items-center justify-between flex-wrap text-sm font-medium bg-black border-b border-yellow-400">
          <div className="flex items-center flex-shrink-0 text-white  hover:text-yellow-300  mx-10 duration-500 ">
            <Link href="/">
              <a>
                {siteLogoUrl ? (
                  <img
                    className="mr-2"
                    src={siteLogoUrl}
                    alt={`${siteTitle} logo`}
                    width="100"
                    height="100"
                  />
                ) : (
                  <Carpro />
                )}
              </a>
            </Link>
            <span>
              <Link href="/">
                <a className="font-semibold text-3xl tracking-tight">
                  {siteTitle || "WooNext"}
                </a>
              </Link>
              {siteDescription ? (
                <p className="mb-0">{siteDescription}</p>
              ) : null}
            </span>
          </div>
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
                <FaMobileAlt size={25} className="mr-1 lg:mr-0  " />|
                +436769617206
              </span>
            </a>
          </div>
        </div>
        <nav className="flex items-center flex-wrap py-5 bg-black">
          <div className="w-full lg:hidden flex md:flex md:flex-grow flex-row justify-end space-x-1 bg-black">
            <button
              onClick={() => setMenuVisibility(!isMenuVisible)}
              className="mx-5 self-start px-1 py-1 border rounded text-white border-white  cursor-pointer"
            >
              <BurgerIcon className="fill-current h-5 w-5 hover:text-yellow-400 text-gray-400" />
            </button>
          </div>
          <div
            className={`${
              isMenuVisible ? "max-h-full " : "h-0 "
            } overflow-hidden w-full mx-4 lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-lg font-medium uppercase lg:flex-grow">
              {!isEmpty(headerMenuItems) && headerMenuItems.length
                ? headerMenuItems.map((menuItem) => (
                    <Link
                      key={menuItem?.ID}
                      href={getPathNameFromUrl(menuItem?.url ?? "") || "/"}
                    >
                      <a
                        className={`${
                          isMenuVisible ? "border-b border-gray-800" : ""
                        } text-white block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 duration-500 mr-10`}
                        dangerouslySetInnerHTML={{ __html: menuItem.title }}
                      />
                    </Link>
                  ))
                : null}
            </div>
            <a
              href="#responsive-header"
              className="flex mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10"
            >
              <span className="flex flex-row items-center lg:flex-col hover:text-yellow-300">
                <User className="mr-1 lg:mr-0" />
                Profile
              </span>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
