export default function AboutMe() {
  return (
    <section id="aboutMe" className="bg-my-black">
      <div className="container justify-between mx-auto pt-20 pb-48">
        <div className="container h-10 pb-2 md:pb-12 flex border-b">
          <div className="text-my-white text-left text-xl md:text-3xl w-full font-mono">
            About Me
          </div>
          <div className="text-my-white text-right text-xl md:text-3xl w-full font-mono">
            02
          </div>
        </div>

        <div className="containers grid grid-cols-1 xl:grid-cols-2 mx-auto pt-20 justify-between items-center">
          <div className="container order-2 xl:order-1 mx-auto md:px-32 px-10 justify-between">
            <div className="font-mono text-sm md:text-xl text-my-white">
              I’m{" "}
              <strong className="text-faye text-sm md:text-2xl">
                Janniel Andrei D. De Jesus
              </strong>
              , a graduate of Bulacan State University{" "}
              <strong className="text-[#61e2de] text-sm md:text-xl">
                (BulSU)
              </strong>{" "}
              with a{" "}
              <strong className="text-faye text-sm md:text-xl">
                Bachelor’s degree in Information Technology, specialized in Web
                and Mobile Application Development.
              </strong>
              <br />
              <br />
              Beyond my technical background in Information Technology, I am
              deeply passionate about programming, UI/UX design, graphic design,
              and video editing. I enjoy how these fields complement each other,
              allowing me to incorporate creativity across all of them.
              <br />
              <br />I mainly developed these skills through college and mostly
              just self-taught throughout senior high school up to today. My
              growth has been significantly shaped by my experiences during my
              internship in{" "}
              <strong className="text-[#61e2de] text-sm md:text-xl">
                Samsung R&D Institute Philippines
              </strong>{" "}
              as a{" "}
              <strong className="text-faye text-sm md:text-xl">
                Frontend Developer
              </strong>
              , involvement in school organization as{" "}
              <strong className="text-faye text-sm md:text-xl">
                Digital Art Manager
              </strong>{" "}
              in{" "}
              <strong className="text-[#61e2de] text-sm md:text-xl">
                BulSU Microsoft Student Community
              </strong>
              , and participation in{" "}
              <strong className="text-[#61e2de] text-sm md:text-xl">
                competitions
              </strong>
              , all of which have allowed me to refine my skills and expand my
              knowledge.
            </div>
          </div>
          <div className="order-1 xl:order-2 justify-between items-center w-3/5 hover:scale-[1.03] mx-auto xl:mx-0 pb-10 xl:pb-0 duration-200">
            <img
              src={import.meta.env.BASE_URL + "./assets/images/aboutme-pic.jpg"}
              className="rounded-2xl drop-shadow-2xl"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
