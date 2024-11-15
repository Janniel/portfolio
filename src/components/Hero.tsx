import { ChevronDown, FileUser } from "lucide-react";

export default function Hero() {
  const handleDownload = () => {
    const fileURL = "./assets/pdfs/De Jesus, Janniel Andrei RESUME.pdf";
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "De Jesus, Janniel Andrei - RESUME.pdf";
    link.click();
  };

  return (
    <section className="bg-my-black">
      <div className="container max-w mx-auto flex flex-col-reverse lg:flex-row lg:pt-44 pt-14 pb-44">
        <div className="lg:space-y-5 space-y-2 mx-auto">
          <div className="text-my-white font-mono 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-xl text-center lg:text-left">
            Hey there! I'm
          </div>
          <div className=" text-faye font-poppinsBlack font-black tracking-tighter 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl text-center lg:text-left">
            Janniel De Jesus
          </div>
          <div className=" text-my-white font-mono 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-center lg:text-left text-pretty">
            I enjoy building web/mobile apps,
          </div>
          <div className=" text-my-white font-mono 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl text-lg text-center lg:text-left text-pretty">
            graphic design, and video editing.
          </div>
          <div className="2xl:pt-5 xl:pt-3">
            <button
              onClick={handleDownload}
              className="text-my-white flex 2xl:text-2xl xl:text-2xl md:text-xl text-xl font-doto rounded-full border-2 2xl:px-6 xl:px-6 2xl:py-4 xl:py-4 md:px-5 md:py-3 px-5 py-3 hover:bg-faye hover:border-faye duration-300 hover:scale-110 mx-auto lg:mx-0"
            >
              Resume <FileUser className="my-1 ml-2"></FileUser>
            </button>
          </div>
        </div>
        <div className="justify-items-center object-right content-center mx-auto pb-10">
          <img
            className="2xl:h-96 2xl:w-96 xl:h-[22rem] xl:w-[22rem] lg:h-[20rem] lg:w-[20rem] md:h-[18rem] md:w-[18rem] h-[16rem] w-[16rem] rounded-full hover:scale-[1.03] duration-200 object-cover"
            src={import.meta.env.BASE_URL + "./assets/images/hero-pic.jpg"}
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
