import { Link, NavLink } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useAuth } from "../Context/AuthContext";
 
 

const categories = [
  { name: "Web Design", to: "/service/web-design" },
  { name: "UI/UX Design", to: "/service/ui-ux" },
  { name: "App Development", to: "/service/app-development" },
  { name: "Digital Marketing", to: "/service/digital-marketing" },
];

const navLinks = [
  { name: "Home", to: "/" },
  { name: "Service", to: "/service" },
  { name: "Blogs", to: "/blogs" },
  { name: "Pricing", to: "/pricing" },
  { name: "Category", children: categories },
];

// shared link styles (active page is highlighted in brand color)
const linkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${
    isActive
      ? "bg-[#EDF5FF] font-semibold text-[#0F62FE]"
      : "text-slate-600 hover:bg-[#EDF5FF] hover:text-[#0F62FE]"
  }`;

// One list, used for both mobile and desktop
const NavItems = () => (
  
  <>
    {navLinks.map((item) =>
      item.children ? (
        <li key={item.name}>
          <details>
            <summary className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[#EDF5FF] hover:text-[#0F62FE]">
              {item.name}
            </summary>
            <ul className="z-10 rounded-xl bg-white p-2 lg:mt-2 lg:w-56 lg:border lg:border-slate-100 lg:shadow-xl">
              {item.children.map((child) => (
                <li key={child.to}>
                  <NavLink to={child.to} className={linkClass}>
                    {child.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ) : (
        <li key={item.to}>
          <NavLink to={item.to} end={item.to === "/"} className={linkClass}>
            {item.name}
          </NavLink>
        </li>
      )
    )}
  </>
);

const Navbar = () => {

  const {user} = useAuth();
  console.log(user);

  
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md">
      {/* brand accent line */}
      <div className="h-0.5 bg-gradient-to-r from-[#002D9C] via-[#0F62FE] to-[#78A9FF]"></div>

      <div className="navbar container mx-auto min-h-16 max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Start: logo + mobile menu */}
        <div className="navbar-start flex gap-2 sm:gap-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost btn-square rounded-lg text-slate-700 hover:bg-[#EDF5FF] hover:text-[#0F62FE] lg:hidden"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-10 mt-3 w-64 gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl"
            >
              <NavItems />
              {/* Log In is hidden in the top bar on small phones, so it lives here */}
              <li className="mt-2 border-t border-slate-100 pt-2 sm:hidden">
                <Link
                  to="/login"
                  className="rounded-lg px-3 py-2 text-sm font-semibold text-[#0F62FE] hover:bg-[#EDF5FF]"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="WebCode logo"
              className="h-8 w-auto sm:h-9"
            />
            <span className="hidden text-xl font-extrabold tracking-tight text-slate-900 sm:inline">
              Web<span className="text-[#0F62FE]">Code</span>
            </span>
          </Link>
        </div>

        {/* Center: desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            <NavItems />
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end gap-2 sm:gap-3">
          <Link
            to="/login"
            className="btn hidden h-10 min-h-0 rounded-full border-2 border-[#0F62FE] bg-transparent px-5 text-sm font-semibold text-[#0F62FE] shadow-none transition-all duration-200 hover:bg-[#0F62FE] hover:text-white sm:flex"
          >
            Log In
          </Link>
          <Link
            to="/pricing"
            className="btn h-10 min-h-0 gap-2 rounded-full border-0 bg-[#0F62FE] px-4 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#0043CE] hover:shadow-lg sm:px-5"
          >
            Start Free Trial
            <FaLongArrowAltRight className="hidden sm:block" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;