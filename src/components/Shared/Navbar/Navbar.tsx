import { useEffect, useRef, useState } from "react";
import MyContainer from "../MyContainer/MyContainer";
import NavBarLinks from "./NavBarLinks";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosBicycle } from "react-icons/io";
const Navbar = () => {
  const [dashboardMenuOpen, setDashboardMenuOpen] = useState(false);
  const dashboardMenuRef = useRef<HTMLDivElement | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // Handle Out Side Click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dashboardMenuRef.current &&
        !dashboardMenuRef.current.contains(event?.target as Node)
      ) {
        setDashboardMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }

      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white border-b w-full z-50 transition-all duration-300 ${
        isFixed ? "fixed top-0" : "relative"
      } ${isHidden ? "-top-16" : "top-0"}`}
    >
      <MyContainer>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link
              className=" text-teal-600 font-orbitron font-bold flex items-center"
              to="/"
            >
              <IoIosBicycle className="md:text-4xl text-base font-bold" />
              Cycle Haven
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:flex gap-2">
              <ul className="flex items-center gap-6 text-sm">
                <NavBarLinks title="All Bicycles" dLink="/bicycles" />
                <NavBarLinks title="About" dLink="/about" />
              </ul>
              <button className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
                Login
              </button>
            </nav>
            {/* Dashboard Menu */}
            <div className="hidden md:relative md:block">
              <button
                type="button"
                onClick={() => setDashboardMenuOpen(!dashboardMenuOpen)}
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <AnimatePresence>
                {dashboardMenuOpen && (
                  <motion.div
                    ref={dashboardMenuRef}
                    initial={{ opacity: 0, scale: 0.8, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        to="/dashboard"
                        className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>

                      <Link
                        to="dashboard/my-orders"
                        className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                        role="menuitem"
                      >
                        My Orders
                      </Link>

                      <Link
                        to="dashboard/profile"
                        className="block rounded-lg px-4 py-2 text-sm text-secondary hover:bg-primary hover:text-white"
                        role="menuitem"
                      >
                        Profile settings
                      </Link>
                    </div>

                    <div className="p-2">
                      <form method="POST" action="#">
                        <button
                          type="submit"
                          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          role="menuitem"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                            />
                          </svg>
                          Logout
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </MyContainer>
    </header>
  );
};

export default Navbar;
