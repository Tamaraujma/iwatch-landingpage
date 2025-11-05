import { SiApple } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import "../globals.css";

const Header = () => {
  return (
    <header className="w-full px-8 py-6">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between">
        {/* Apple Logo */}
        <div className="flex items-center">
          <SiApple size={42} color="white" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex">
          <ul className="flex list-none items-center gap-8 lg:gap-12">
            <li>
              <a
                href="#mac"
                className="text-lg text-white no-underline transition-opacity duration-300 hover:opacity-70"
              >
                Mac
              </a>
            </li>
            <li>
              <a
                href="#iphone"
                className="text-lg text-white no-underline transition-opacity duration-300 hover:opacity-70"
              >
                iPhone
              </a>
            </li>
            <li>
              <a
                href="#ipad"
                className="text-lg text-white no-underline transition-opacity duration-300 hover:opacity-70"
              >
                iPad
              </a>
            </li>
            <li>
              <a
                href="#iwatch"
                className="rounded-full bg-white px-6 py-3 text-lg font-medium text-[#b6ccda] no-underline transition-all duration-300 hover:bg-gray-100"
              >
                iWatch
              </a>
            </li>
            <li>
              <a
                href="#support"
                className="text-lg text-white no-underline transition-opacity duration-300 hover:opacity-70"
              >
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Search and Shopping Icons */}
        <div className="flex items-center gap-4">
          <AiOutlineSearch
            size={28}
            color="white"
            className="cursor-pointer transition-opacity duration-300 hover:opacity-70"
          />
          <LuShoppingBag
            size={28}
            color="white"
            className="cursor-pointer transition-opacity duration-300 hover:opacity-70"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

<style>header{}</style>;
