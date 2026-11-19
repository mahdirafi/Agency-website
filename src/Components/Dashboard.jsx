import { useEffect, useRef, useState } from "react";

const Icon = ({ d, className = "h-6 w-6" }) => (
  <svg
    aria-hidden="true"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    {(Array.isArray(d) ? d : [d]).map((path) => (
      <path
        key={path}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={path}
      />
    ))}
  </svg>
);

const ICONS = {
  folders:
    "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  dashboard:
    "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  messages:
    "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  documents:
    "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  settings: [
    "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
    "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  ],
  menu: "M4 6h16M4 12h16M4 18h16",
  edit: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
  plus: "M12 6v6m0 0v6m0-6h6m-6 0H6",
  users:
    "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  trendUp: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  trendDown: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  cap: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  logout:
    "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
};

const NAV_ITEMS = [
  { label: "Folders", icon: ICONS.folders },
  { label: "Dashboard", icon: ICONS.dashboard, active: true },
  { label: "Messages", icon: ICONS.messages },
  { label: "Documents", icon: ICONS.documents },
];

const STATS = [
  { value: "62", label: "Students", icon: ICONS.users, color: "text-blue-600 bg-blue-100" },
  { value: "6.8", label: "Average mark", icon: ICONS.trendUp, color: "text-green-600 bg-green-100" },
  { value: "9", extra: "(14%)", label: "Underperforming students", icon: ICONS.trendDown, color: "text-red-600 bg-red-100" },
  { value: "83%", label: "Finished homeworks", icon: ICONS.book, color: "text-blue-600 bg-blue-100" },
];

const SECONDARY_STATS = [
  { value: "25", label: "Lections left", icon: ICONS.cap, color: "text-yellow-600 bg-yellow-100" },
  { value: "139", label: "Hours spent on lections", icon: ICONS.clock, color: "text-teal-600 bg-teal-100" },
];

const STUDENTS = [
  { name: "Annette Watson", mark: "9.3", img: "women/82" },
  { name: "Calvin Steward", mark: "8.9", img: "men/81" },
  { name: "Ralph Richards", mark: "8.7", img: "men/80" },
  { name: "Bernard Murphy", mark: "8.2", img: "men/79" },
  { name: "Arlene Robertson", mark: "8.2", img: "women/78" },
  { name: "Jane Lane", mark: "8.1", img: "women/77" },
  { name: "Pat Mckinney", mark: "7.9", img: "men/76" },
  { name: "Norman Walters", mark: "7.7", img: "men/75" },
];

const StatCard = ({ value, extra, label, icon, color }) => (
  <div className="flex items-center p-8 bg-white shadow rounded-lg">
    <div
      className={`inline-flex shrink-0 items-center justify-center h-16 w-16 rounded-full mr-6 ${color}`}
    >
      <Icon d={icon} />
    </div>
    <div>
      <span className={extra ? "inline-block text-2xl font-bold" : "block text-2xl font-bold"}>
        {value}
      </span>
      {extra && (
        <span className="inline-block text-xl text-gray-500 font-semibold ml-1">
          {extra}
        </span>
      )}
      <span className="block text-gray-500">{label}</span>
    </div>
  </div>
);

const ChartPlaceholder = ({ padding }) => (
  <div
    className={`flex items-center justify-center h-full px-4 ${padding} text-gray-400 text-3xl font-semibold bg-gray-100 border-2 border-gray-200 border-dashed rounded-md`}
  >
    Chart
  </div>
);

const Dashboard = () => {
  const [menu, setMenu] = useState(true);
  const [panel, setPanel] = useState(false);
  const panelRef = useRef(null);

  // Close user dropdown when clicking outside (replaces Alpine's @click.away)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        setPanel(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside
        className={`hidden sm:flex sm:flex-col shrink-0 transition-all duration-200 ${
          menu ? "w-56" : "w-20"
        }`}
      >
        <a
          href="#"
          className="inline-flex items-center justify-center h-20 w-full bg-blue-600 hover:bg-blue-500 focus:bg-blue-500"
        >
          <svg
            className="h-12 w-12 text-white"
            fill="currentColor"
            viewBox="0 0 215 215"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Company logo</title>
            <path
              transform="matrix(1.28 0 0 1.28 13.057 10.462)"
              d="m121.65 15.95-11.2 11.2q-5.9-4.75-12.8-7.3-5.7-2.35-10.05-3.15v-16.7h-22.8v16.35l-6.9 1.75q-8.1 2.55-16.15 7.5l-11.6-11.65-15.95 15.75 11.8 11.65q-6.1 8.85-8.85 19.65l-0.8 4.55h-16.35v21.65h16.75l2.15 7.45q2.35 7.9 7.3 14.4l-12 11.6 15.35 15.35 12-11.8 6.5 3.95q8.85 4.3 16.75 5.7v16.15h22.8v-16.55q8.05-1.8 15.75-5.7l5.55-3.35 11.4 11.4 16.15-16.15-11.25-11.4q5.1-7.85 7.5-16.9l1.2-4.15h16.1v-21.65h-15.75q-1.55-8.5-4.5-15.35l-3.55-5.9 12-12.05-16.55-16.3m-7.65 58.85q-0.05 15.9-11.25 27.55-11.6 11-27.55 11-16.15 0-27.55-11.4-11.2-10.85-11.2-27.15 0-15.95 11.2-27.55 11.8-11.25 27.55-11.25 15.75 0 27.55 11.25 11.2 11.8 11.25 27.55"
              strokeLinecap="square"
              strokeWidth="1"
            />
            <path
              transform="matrix(.34872 0 0 .34872 83.818 78.7)"
              d="m144.75 65.137-94.088 94.088-50.662-50.663v-65.138l50.662 50.663 94.088-94.088v65.137"
              strokeLinecap="square"
              strokeWidth="6"
            />
          </svg>
          {menu && <span className="text-white text-4xl ml-2">LQ</span>}
        </a>

        <div className="grow flex flex-col justify-between text-gray-500 bg-gray-800">
          <nav className="flex flex-col mx-4 my-6 space-y-4">
            {NAV_ITEMS.map(({ label, icon, active }) => (
              <a
                key={label}
                href="#"
                title={label}
                className={`inline-flex items-center py-3 rounded-lg px-2 ${
                  menu ? "justify-start" : "justify-center"
                } ${
                  active
                    ? "text-blue-600 bg-white"
                    : "hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700"
                }`}
              >
                <Icon d={icon} />
                {menu && <span className="ml-2">{label}</span>}
              </a>
            ))}
          </nav>

          <div className="flex justify-end">
            <a
              href="#"
              title="Settings"
              className="inline-flex p-3 hover:text-gray-400 justify-center border-gray-700 h-14 w-full border-t hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 px-2"
            >
              <Icon d={ICONS.settings} />
              {menu && <span className="ml-2">Settings</span>}
            </a>
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="grow min-w-0 text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
          <button
            type="button"
            aria-label="Toggle sidebar"
            className="mr-8 cursor-pointer"
            onClick={() => setMenu((prev) => !prev)}
          >
            <Icon d={ICONS.menu} className="w-8 h-8" />
          </button>

          <div className="relative w-full max-w-md sm:-ml-2">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="absolute h-6 w-6 mt-2.5 ml-2 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="search"
              aria-label="Search"
              placeholder="Search..."
              className="py-2 pl-10 pr-4 w-full border-4 border-transparent placeholder-gray-400 focus:bg-gray-50 rounded-lg"
            />
          </div>

          <div className="flex shrink-0 items-center ml-auto">
            <div className="relative" ref={panelRef}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={panel}
                className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg"
                onClick={() => setPanel((prev) => !prev)}
              >
                <span className="sr-only">User Menu</span>
                <span className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                  <span className="font-semibold">Sinan AYDOĞAN</span>
                  <span className="text-sm text-gray-600">Quality Engineer</span>
                </span>
                <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src="https://randomuser.me/api/portraits/men/68.jpg"
                    alt="user profile"
                    className="h-full w-full object-cover"
                  />
                </span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="hidden sm:block h-6 w-6 text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {panel && (
                <div className="absolute right-0 top-full mt-2 z-20 bg-white border rounded-md p-2 w-56 shadow-lg">
                  <div className="p-2 hover:bg-blue-100 cursor-pointer">Profile</div>
                  <div className="p-2 hover:bg-blue-100 cursor-pointer">Messages</div>
                  <div className="p-2 hover:bg-blue-100 cursor-pointer">To-Do's</div>
                </div>
              )}
            </div>

            <div className="border-l pl-3 ml-3 space-x-1">
              <button
                type="button"
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              >
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full" />
                <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping" />
                <Icon d={ICONS.bell} />
              </button>
              <button
                type="button"
                className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full"
              >
                <span className="sr-only">Log out</span>
                <Icon d={ICONS.logout} />
              </button>
            </div>
          </div>
        </header>

        <main className="p-6 sm:p-10 space-y-6">
          <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
            <div className="mr-6">
              <h1 className="text-4xl font-semibold mb-2">Dashboard</h1>
              <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
            </div>
            <div className="flex flex-wrap items-start justify-end -mb-3">
              <button
                type="button"
                className="inline-flex px-5 py-3 text-blue-600 hover:text-blue-700 focus:text-blue-700 hover:bg-blue-100 focus:bg-blue-100 border border-blue-600 rounded-md mb-3"
              >
                <Icon d={ICONS.edit} className="shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2" />
                Manage dashboard
              </button>
              <button
                type="button"
                className="inline-flex px-5 py-3 text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700 rounded-md ml-6 mb-3"
              >
                <Icon d={ICONS.plus} className="shrink-0 h-6 w-6 text-white -ml-1 mr-2" />
                Create new dashboard
              </button>
            </div>
          </div>

          <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>

          <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
            <div className="flex flex-col md:col-span-2 md:row-span-2 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                The number of applied and left students per month
              </div>
              <div className="p-4 grow">
                <ChartPlaceholder padding="py-16" />
              </div>
            </div>

            {SECONDARY_STATS.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}

            <div className="row-span-3 bg-white shadow rounded-lg">
              <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
                <span>Students by average mark</span>
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md px-1 -mr-1 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-600"
                  aria-haspopup="true"
                >
                  Descending
                  <svg
                    className="-mr-1 ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto max-h-96">
                <ul className="p-6 space-y-6">
                  {STUDENTS.map(({ name, mark, img }) => (
                    <li key={name} className="flex items-center">
                      <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                        <img
                          src={`https://randomuser.me/api/portraits/${img}.jpg`}
                          alt={`${name} profile`}
                        />
                      </div>
                      <span className="text-gray-600">{name}</span>
                      <span className="ml-auto font-semibold">{mark}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col row-span-3 bg-white shadow rounded-lg">
              <div className="px-6 py-5 font-semibold border-b border-gray-100">
                Students by type of studying
              </div>
              <div className="p-4 grow">
                <ChartPlaceholder padding="py-24" />
              </div>
            </div>
          </section>

          <section className="text-right font-semibold text-gray-500">
            <a href="#" className="text-blue-600 hover:underline">
              Recreated on Codepen
            </a>{" "}
            with{" "}
            <a
              href="https://tailwindcss.com/"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>{" "}
            by Sinan AYDOĞAN,{" "}
            <a
              href="https://dribbble.com/shots/10711741-Free-UI-Kit-for-Figma-Online-Courses-Dashboard"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              original design
            </a>{" "}
            made by Chili Labs and{" "}
            <a
              href="https://codepen.io/azrikahar/pen/abZzaga"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              abZzaga
            </a>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;