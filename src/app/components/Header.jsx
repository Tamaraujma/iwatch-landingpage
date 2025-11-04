import { SiApple } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { LuShoppingBag } from "react-icons/lu";
import "../globals.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        {/* Apple Logo */}
        <div className="header-logo">
          <SiApple size={52} color={"white"} />
        </div>

        {/* Navigation Links */}
        <div className="header-links">
          <ul>
            <li>
              <a href="#mac">Mac</a>
            </li>
            <li>
              <a href="#iphone">iPhone</a>
            </li>
            <li>
              <a href="#ipad">iPad</a>
            </li>
            <li>
              <a href="#iwatch">iWatch</a>
            </li>
            <li>
              <a href="#support">Support</a>
            </li>
          </ul>

          <div className="search-and-shopping">
            <AiOutlineSearch size={30} color="white" className="search-icon" />
            <LuShoppingBag size={30} color="white" className="shopping-icon" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

<style>header{}</style>;
