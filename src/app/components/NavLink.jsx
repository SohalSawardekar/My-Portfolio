import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-4 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white font-poppins hover:bg-gray-800"


    >
      {title}
    </Link>
  );
};

export default NavLink;
