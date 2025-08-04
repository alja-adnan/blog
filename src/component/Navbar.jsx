import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constent/navbar_link";
import Header from "./Header";

function NavBar() {
  return (
    <nav className="bg-blue-100 px-4 py-2  mb-10">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto h-16">
        <Header/>
        <div className="flex gap-4 items-center">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="text-blue-900 hover:text-blue-500 text-sm sm:text-base lg:text-lg"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

