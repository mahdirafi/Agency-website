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
            <summary>{item.name}</summary>
            <ul className="p-2 bg-base-100 w-44 z-10">
              {item.children.map((child) => (
                <li key={child.to}>
                  <Link to={child.to}>{child.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </li>
      ) : (
        <li key={item.to}>
          <Link to={item.to}>{item.name}</Link>
        </li>
      )
    )}
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="navbar max-w-screen-2xl container mx-auto">
        {/* Start: logo + mobile menu */}
        <div className="navbar-start flex gap-4">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <NavItems />
            </ul>
          </div>
          <div className="flex gap-2">
            <img src="/logo.png" ></img>
              <Link to="/" className="  text-xl text-[#697077] font-medium hidden sm:flex">
            WebCode
          </Link>
          </div>
          
        </div>

        {/* Center: desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems />
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end space-x-4">
          <Link to="/login" className="btn hidden sm:flex hover:bg-white border-2 border-blue-600 text-blue-600">
            Log In
          </Link>
          <Link to="/pricing" className="btn   border bg-pri text-white">
            Start Free Trial
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;