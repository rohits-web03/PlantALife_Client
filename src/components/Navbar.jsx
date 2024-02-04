import hamburger from "../assets/hamburger.svg";
import { navLinks } from "../constants/index";
import { Link ,useNavigate, useLocation } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import Cookies from "js-cookie";

const Navbar = ({toggle}) => {
  const user=localStorage.getItem("user");
  const navigate = useNavigate(); 
  const location = useLocation();
  const handleLogout = async () => {
    try {
      const response = await fetch('https://plantalife.vercel.app/api/v1/users/logout', {
        method: 'POST',
        credentials: 'include', // Include cookies in the request
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        console.log('Logout successful');
        localStorage.removeItem('user');
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
  
        // Check if current route is "/"
        if (location.pathname === '/') {
          window.location.reload(); // Refresh the page
        } else {
          navigate('/'); // Navigate to "/"
        }
      } else {
        console.error('Logout failed');
        // Handle logout failure
      }
    } catch (error) {
      console.error('Error logging out:', error);
      // Handle logout error
    }
  };

  return (
    <header className="fixed padding-x pt-8 z-10 w-full h-[60px] bg-white bg-opacity-90 backdrop-blur-md pb-16">
      <nav className="relative flex justify-around items-center max-container max-lg:justify-between">
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
          {!user?
            <li>
              <Link to="/signup"
                className="text-lg bg-green-500 hover:bg-green-700 rounded-lg px-4 py-2 text-white"
              >
                Sign up
              </Link>
          </li>:
          <div className="flex justify-center items-center gap-16">
            <li>
                <Link to="/profile"
                >
                  <FaUserAlt className="text-2xl" />
                </Link>
            </li>
            <li>
                <button 
                  onClick={handleLogout}
                  className="text-lg bg-green-600 rounded-lg px-4 py-2 text-white"
                >
                  Logout
                </button>
            </li>
          </div>}
        </ul>
        <button
          onClick={()=>toggle()}
         className="cursor-pointer hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
