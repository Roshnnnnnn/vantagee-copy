import { useState, useRef, useEffect } from "react";
import {
  FiHome,
  FiUser,
  FiPieChart,
  FiFolder,
  FiSettings,
  FiDownload,
  FiGift,
  FiHelpCircle,
} from "react-icons/fi";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import Head from "./Head";

const App = () => {
  const [open, setOpen] = useState(true);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpenSubmenu(null);
        setDropdownPosition(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index, event, hasSubmenu) => {
    if (!open && hasSubmenu) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({
        top: rect.top,
        left: rect.right + 5,
      });
    }
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const Menus = [
    { title: "Dashboard", icon: FiHome },
    {
      title: "Accounts",
      icon: FiUser,
      gap: true,
      submenu: [{ title: "Open Live Account" }, { title: "Change Password" }],
    },
    {
      title: "Funds",
      icon: FiFolder,
      gap: true,
      submenu: [
        { title: "Deposit Funds" },
        { title: "Withdraw Funds" },
        { title: "Transfer Between Account" },
        { title: "MT5 To Wallet" },
        { title: "Wallet to MT5" },
      ],
    },
    {
      title: "Reports",
      icon: FiPieChart,
      gap: true,
    },
    {
      title: "Download",
      icon: FiDownload,
      gap: true,
    },
    {
      title: "Tools",
      icon: FiSettings,
      gap: true,
      submenu: [
        { title: "Pro Trader Tool" },
        { title: "Technical Analysis" },
        { title: "National Volume Calculator" },
      ],
    },
    {
      title: "VIP Trading Room",
      icon: FiUser,
      gap: true,
    },
    {
      title: "Rewards",
      icon: FiGift,
      gap: true,
      submenu: [
        { title: "OverView" },
        { title: "Wheel Spin" },
        { title: "Lucky Draw" },
        { title: "Cash Redemption" },
        { title: "Vouchers Redemption" },
      ],
    },
    {
      title: "Support",
      icon: FiHelpCircle,
      gap: true,
      submenu: [{ title: "Create Ticket" }, { title: "Ticket List" }],
    },
  ];

  return (
    <div className="flex ">
      <div
        ref={sidebarRef}
        className={`${
          open ? "w-50" : "w-30"
        } bg-white h-screen p-5 pt-8 relative duration-300 flex flex-col`}
      >
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full bg-white ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FiChevronLeft /> : <FiChevronRight />}
        </div>
        <div className="flex gap-x-4 items-center">
          <FiPieChart className="text-4xl cursor-pointer" />
          {open && (
            <h1 className="text-black origin-left font-medium text-xl duration-200">
              Novotrend
            </h1>
          )}
        </div>
        <ul className="pt-6 flex-grow overflow-y-auto custom-scrollbar">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex flex-col rounded-md cursor-pointer hover:bg-light-white text-black text-sm
              ${Menu.gap ? "mt-7" : "mt-2"} ${index === 0 && "bg-light-white"}`}
            >
              <div
                className="flex items-center gap-x-4"
                onClick={(e) => handleMenuClick(index, e, !!Menu.submenu)}
              >
                <Menu.icon className="text-xs min-w-[2rem]" />
                {open && (
                  <span className="origin-left duration-200 flex-grow text-xs">
                    {Menu.title}
                  </span>
                )}
                {Menu.submenu &&
                  open &&
                  (openSubmenu === index ? <FiChevronUp /> : <FiChevronDown />)}
              </div>
              {Menu.submenu && open && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out text-xs ${
                    openSubmenu === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <ul className="pl-10 mt-2">
                    {Menu.submenu.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="flex rounded-md p-2  cursor-pointer hover:bg-light-white text-black text-xs items-center gap-x-4"
                      >
                        <span>{subItem.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {!open && openSubmenu !== null && dropdownPosition && (
        <div
          className="absolute bg-white shadow-md rounded-md p-2"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          <ul>
            {Menus[openSubmenu].submenu.map((subItem, subIndex) => (
              <li
                key={subIndex}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {subItem.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

const styles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #2c3e50;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #34495e;
    border-radius: 3px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: #4a6785;
  }
`;

// Add this line right before the closing </div> of the main component
<style>{styles}</style>;
