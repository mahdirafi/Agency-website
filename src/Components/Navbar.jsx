import { Link } from "react-router";

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
  { name: "Category", children: categories },
];

// One list, used for both mobile and desktop
const NavItems = () => (
  <>
    {navLinks.map((item) =>
      item.children ? (
        <li key={item.name}>
          <details>
            <summary className="font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
              {item.name}
            </summary>
            <ul className="p-2 bg-white w-48 z-10 rounded-xl lg:shadow-xl lg:border lg:border-gray-100">
              {item.children.map((child) => (
                <li key={child.to}>
                  <Link
                    to={child.to}
                    className="font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                  >
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ) : (
        <li key={item.to}>
          <Link
            to={item.to}
            className="font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
          >
            {item.name}
          </Link>
        </li>
      )
    )}
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="navbar max-w-screen-2xl container mx-auto min-h-16 px-4 sm:px-6 lg:px-8">
        {/* Start: logo + mobile menu */}
        <div className="navbar-start flex gap-2 sm:gap-4">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-square rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden"
            >
              <svg
                aria-label="Menu"
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
              className="menu menu-sm dropdown-content bg-white rounded-xl z-10 mt-3 w-56 p-2 shadow-xl border border-gray-100"
            >
              <NavItems />
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="WebCode logo" className="h-8 sm:h-9 w-auto" ></img>
            <Link
              to="/"
              className="text-xl font-bold tracking-tight text-gray-800 hover:text-blue-600 transition-colors duration-200 hidden sm:flex"
            >
              WebCode
            </Link>
          </div>
        </div>

        {/* Center: desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <NavItems />
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end gap-2 sm:gap-3">
          <Link
            to="/login"
            className="btn hidden sm:flex rounded-lg bg-transparent shadow-none border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50 hover:border-blue-600 transition-all duration-200"
          >
            Log In
          </Link>
          <Link
            to="/pricing"
            className="btn rounded-lg border-0 bg-pri text-white font-medium shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-200"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;