import hamburger from "../assets/hamburger.svg";
import { navLinks } from "../constants/index";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {

  return (
    <header className="fixed padding-x pt-8 z-10 w-full h-[60px] bg-white bg-opacity-90 backdrop-blur-md pb-16">
      <nav className="flex justify-around items-center max-container max-lg:justify-between">
        <a href="/">
          {/* <img 
              src={headerLogo}
              alt="Logo"
              width={130}
              height={29}
          /> */}
          <h3 className="text-3xl text-green-500 font-bold">PlantALife</h3>
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="fonts-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
              <Link to="/signup"
                className="text-lg bg-green-600 rounded-lg px-4 py-2 text-white"
              >
                Sign up
              </Link>
          </li>
          <li>
              <Link to="/profile"
              >
                <FaUserAlt className="text-2xl" />
              </Link>
          </li>
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
