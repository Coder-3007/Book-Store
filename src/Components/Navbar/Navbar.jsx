import { FaCaretDown } from "react-icons/fa";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Best Seller",
    link: "/# services",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];
const Navbar = () => {
  return (
    <div className=" shadow-lg bg-white dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Books
            </a>
          </div>
          <div
            className="flex justify-between items-center gap-4 
          "
          >
            <div>
              <DarkMode />
            </div>
            <ul className="hidden sm:flex items-center gap-4  ">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className=" inline-block py-4 px-4 hover:text-primary duration-200"
                  >
                    {menu.name}
                  </a>
                </li>
              ))}

              {/* Down Arrow section in navbar */}

              <li className=" group  relative cursor-pointer">
                <a href="/#" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links
                  <span>
                    <FaCaretDown className=" transition-all duration-300 group-hover:rotate-180" />
                  </span>
                </a>
                {/* DropDown Links section */}
                {/* -left-9 is for the another box */}
                <div className=" absolute -left-9 z-[10] hidden   bg-white p-2 text-black group-hover:block shadow-md w-[150px]">
                  <ul className="space-y-3">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className=" inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            <button
              className=" bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full flex items-center gap-3
             hover:scale-105 duration-300 "
            >
              Order
              <FaCartShopping className=" text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
