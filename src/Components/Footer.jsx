import { Link } from "react-router";
import { FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const productLinks = [
  { label: "Templates", to: "/" },
  { label: "Pricing", to: "/pricing" },
  { label: "Features", to: "/" },
  { label: "Updates", to: "/" },
];

const companyLinks = [
  { label: "About us", to: "/" },
  { label: "Contact", to: "/" },
  { label: "Jobs", to: "/" },
  { label: "Press kit", to: "/" },
];

const legalLinks = [
  { label: "Terms of use", to: "/" },
  { label: "Privacy policy", to: "/" },
  { label: "Cookie policy", to: "/" },
];

const socials = [
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "Facebook", href: "#", icon: FaFacebookF },
];

const FooterColumn = ({ title, links }) => (
  <nav aria-label={title}>
    <h6 className="text-sm font-semibold uppercase tracking-widest text-white">
      {title}
    </h6>
    <ul className="mt-5 space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            to={link.to}
            className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#78A9FF]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* brand accent line */}
      <div className="h-1 bg-gradient-to-r from-[#002D9C] via-[#0F62FE] to-[#78A9FF]"></div>

      {/* main footer */}
      <div className="section-container mx-auto px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* brand */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src="/logo.png" alt="WebCode logo" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              WebCode helps freelancers, professionals and agencies launch
              faster with ready-to-use templates and simple, flexible pricing.
            </p>

            {/* social icons */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#0F62FE] hover:bg-[#0F62FE] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F62FE] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* link columns */}
          <div className="lg:col-span-2">
            <FooterColumn title="Product" links={productLinks} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Company" links={companyLinks} />
          </div>
          <div className="lg:col-span-2">
            <FooterColumn title="Legal" links={legalLinks} />
          </div>

          {/* newsletter */}
          <form className="sm:col-span-2 lg:col-span-12 lg:mt-4">
            <div className="flex flex-col gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-md">
                <h6 className="text-lg font-semibold text-white">
                  Subscribe to our newsletter
                </h6>
                <p className="mt-1 text-sm text-slate-400">
                  Product updates, helpful tips and special offers. No spam,
                  unsubscribe anytime.
                </p>
              </div>

              <fieldset className="w-full lg:max-w-md">
                <label htmlFor="footer-email" className="sr-only">
                  Enter your email address
                </label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="footer-email"
                    type="email"
                    placeholder="username@site.com"
                    className="w-full flex-1 rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-white placeholder-slate-500 transition-colors duration-300 focus:border-[#0F62FE] focus:outline-none focus:ring-2 focus:ring-[#0F62FE]/40"
                  />
                  <button
                    type="submit"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0F62FE] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#0043CE] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F62FE] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    Subscribe <FaLongArrowAltRight />
                  </button>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
      </div>

      {/* bottom footer */}
      <div className="border-t border-slate-800">
        <div className="section-container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:px-6 md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            WebCode Copyright © {new Date().getFullYear()} - All rights
            reserved
          </p>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <Link to="/" className="transition-colors hover:text-[#78A9FF]">
              Privacy
            </Link>
            <Link to="/" className="transition-colors hover:text-[#78A9FF]">
              Terms
            </Link>
            <Link to="/" className="transition-colors hover:text-[#78A9FF]">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;