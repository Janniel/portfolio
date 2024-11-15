import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="home" className="bg-my-black p-10 z-50">
      <div className="container mx-auto flex justify-between">
        <div className="flex text-faye text-6xl font-tasa font-black 2xl:text-8xl xl:text-8xl lg:text-7xl lg:pt-3 md:text-6xl text-center">
          Faye
        </div>
        <div className="hidden lg:flex text-my-white font-mono 2xl:text-3xl xl:text-3xl lg:text-xl text-center mx-auto py-10">
          <button
            className="px-10 hover:scale-110 transform duration-200"
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            className="px-10 hover:scale-110 transform duration-200"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </button>

          <button
            className="px-10 hover:scale-110 transform duration-200"
            onClick={() => {
              const element = document.getElementById("aboutMe");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </button>
        </div>
        <div className="hidden lg:flex text-my-white font-poppins font-bold 2xl:text-2xl xl:text-2xl lg:text-lg text-center pt-3 group">
          <button
            className="group-hover:text-faye duration-500"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Let's get in touch
            <span className="block mx-auto max-w-0 group-hover:max-w-56 transition-all duration-700 h-1 mt-2 bg-my-white group-hover:bg-faye"></span>
          </button>
        </div>
        <button
          onClick={toggleNavbar}
          className="relative lg:hidden text-my-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="text-my-white font-mono text-lg bg-my-black drop-shadow-2xl flex flex-col lg:hidden">
          <button
            className="px-10 py-3 hover:bg-[#22211d] duration-200"
            onClick={() => {
              const element = document.getElementById("home");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Home
          </button>

          <button
            className="px-10 py-3 hover:bg-[#22211d] duration-200"
            onClick={() => {
              const element = document.getElementById("projects");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Projects
          </button>

          <button
            className="px-10 py-3 hover:bg-[#22211d] duration-200"
            onClick={() => {
              const element = document.getElementById("aboutMe");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            About
          </button>

          <button
            className="px-10 py-3 hover:bg-[#22211d] duration-200"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
