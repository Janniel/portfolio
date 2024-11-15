import { ChevronDown, FileUser } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
    const fileURL = "public/De Jesus, Janniel Andrei RESUME.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "De Jesus, Janniel Andrei - RESUME.pdf";
    link.click();
  };

  return (
    <section className="bg-my-black">
      <div className="container mx-auto flex px-28 pt-44 pb-44">
        <div className="w-9/12 content-center space-y-5">
          <div className="text-my-white font-mono text-4xl">Hey there! I'm</div>
          <div className=" text-faye font-poppinsBlack font-black text-8xl tracking-tighter">
            Janniel De Jesus
          </div>
          <div className=" text-my-white font-mono text-4xl">
            I enjoy building web/mobile apps,
          </div>
          <div className=" text-my-white font-mono text-4xl">
            graphic design, and video editing.
          </div>
          <div className="pt-5">
            <button
              onClick={handleDownload}
              className="text-my-white flex text-xl font-doto rounded-full border-2 px-6 py-4 hover:bg-faye hover:border-faye duration-300 hover:scale-110"
            >
              Resume <FileUser></FileUser>
            </button>
          </div>
        </div>
        <div className="justify-items-center content-center">
          <img
            className="h-96 w-96 rounded-full object-center object-cover"
            src="src/images/hero-pic.jpg"
            alt="Janniel Andrei De Jesus"
          ></img>
        </div>
      </div>

      <div className="container flex mx-auto items-center justify-center animate-bounce">
        <ChevronDown className="text-my-white opacity-60 w-14 h-14" />
      </div>
    </section>
  );
}
