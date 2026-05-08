import { navLinks } from "../../lib/site-data";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/5">
      <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center max-w-7xl mx-auto px-6">
        <a href="#" className="flex items-center gap-2" aria-label="Scroll to top">
          <p className="text-white text-xl font-black tracking-tighter cursor-pointer italic">
            ANURAG SINGH
          </p>
        </a>

        <ul className="list-none flex flex-wrap justify-center gap-x-5 gap-y-2 sm:gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-gray-400 hover:text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
