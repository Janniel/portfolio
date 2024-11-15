export default function Contact() {
  return (
    <section id="contact" className="bg-[#22211d]">
      <div className="container mx-auto pt-12 pb-48">
        <div className="pt-28 mx-auto text-left">
          <h1 className="text-my-white font-tasa font-bold text-7xl text-center lg:text-left lg:text-9xl tracking-wider">
            Let's Talk !
          </h1>
        </div>
        <div className="container grid grid-cols-1 xl:grid-cols-2 gap-10 pt-20">
          <div>
            <h2 className="text-my-white font-tasa tracking-wider text-3xl pb-3 border-b-2">
              Email
            </h2>
            <p className="text-my-white font-tasa font-black text-3xl xl:text-4xl py-5 hover:scale-[1.03] hover:text-faye duration-200">
              dejesusjannielandrei@gmail.com
            </p>
          </div>
          <div>
            <h2 className="text-my-white border-b-2 font-tasa tracking-wider text-3xl pb-3">
              Linkedin
            </h2>
            <p className="text-my-white font-tasa font-black text-3xl xl:text-4xl py-5 hover:scale-[1.03] hover:text-faye duration-200">
              https://www.linkedin.com/in/janniel32/
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
