import Link from "next/link";
import { useContext, useState } from "react";
import { isEmpty } from "lodash";
import { BurgerIcon, Bag, User, Wishlist } from "../../icons";
import { AppContext } from "../../context";
import { getPathNameFromUrl } from "../../../utils/miscellaneous";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [cart, setCart] = useContext(AppContext);
  const [isMenuVisible, setMenuVisibility] = useState(false);
  const navigation = [
    { name: "Home", href: "/", current: false },
    { name: "Services", href: "/services", current: false },
    { name: "Contact us", href: "/contact", current: false },
    { name: "About us", href: "/about", current: false },
  ];
  return (
    <>
      <nav className="flex items-center flex-wrap py-5 bg-black">
        <div className="w-full lg:hidden flex md:flex md:flex-grow flex-row justify-end space-x-1 bg-black">
          <button
            onClick={() => setMenuVisibility(!isMenuVisible)}
            className="mx-5 self-start px-1 py-1 border rounded text-white border-white cursor-pointer"
          >
            <BurgerIcon className="fill-current h-5 w-5 hover:text-yellow-400 text-gray-400" />
          </button>
        </div>
        <div
          className={`${
            isMenuVisible ? "max-h-full " : "h-0 "
          } overflow-hidden w-full mx-4 lg:h-full block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <Link href="/">
            <a>
              <img
                src={"/images/carprologo.webp"}
                alt="carpro"
                width="40"
                height="40"
                className="mx-2 p-1 borderborder-yellow-300 hover:border-gray-300"
              />
            </a>
          </Link>
          <div className="text-lg font-medium uppercase lg:flex-grow">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href || "/"}>
                <a
                  className={`${
                    isMenuVisible ? "border-b border-gray-800" : ""
                  } text-white block mt-4 lg:inline-block lg:mt-0 hover:text-yellow-300 duration-500 mr-10`}
                  dangerouslySetInnerHTML={{ __html: item.name }}
                />
              </Link>
            ))}
          </div>
          <Link href="/cart">
            <a className="flex mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-10">
              <span className="flex flex-row items-center lg:flex-col hover:text-yellow-300">
                <Bag className="mr-1 lg:mr-0" />
                <span className="ml-1">
                  Bag{cart?.totalQty ? `(${cart?.totalQty})` : null}
                </span>
              </span>
            </a>
          </Link>
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
    </>
  );
};

export default Header;
