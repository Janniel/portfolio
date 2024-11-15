export default function Header() {
  return (
    <header id="home" className="bg-my-black p-10 h-28 z-50">
      <div className="container mx-auto flex justify-between">
        <div className="flex-auto text-faye font-tasa font-black text-8xl text-center">
          Faye
        </div>
        <div className="flex-auto text-my-white font-mono text-3xl text-center py-10">
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
        <div className="flex-auto text-my-white font-poppins font-bold text-2xl text-center py-10 group">
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
      </div>
    </header>
  );
}
