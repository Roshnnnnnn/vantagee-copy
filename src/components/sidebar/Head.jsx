import { FiBell, FiGlobe, FiUser } from "react-icons/fi";

const Head = () => {
  return (
    <div className="flex justify-end items-center bg-gray-100 p-4 border-b border-gray-300">
      <div className="text-blue-600 cursor-pointer">Deposit</div>
      <FiGlobe className="text-blue-600 cursor-pointer" />

      <FiBell className="text-blue-600 cursor-pointer" />
      <FiUser className="text-blue-600 cursor-pointer" />
    </div>
  );
};

export default Head;
