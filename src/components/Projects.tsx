import { Card, Tooltip } from "flowbite-react";
import { Figma, Github } from "lucide-react";
import { useState } from "react";

export default function Projects() {
	const [activeTab, setActiveTab] = useState("developerTab");
	const tabs = [
		{ id: "developerTab", label: "Developer" },
		{ id: "designTab", label: "Design" },
		{ id: "editorTab", label: "Editor" },
	];

	const tabContent = {
		developerTab: (
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 px-12">
				<Card
					className="max-w bg-my-black drop-shadow-2xl border-none hover:scale-[1.03] duration-200"
					imgSrc={import.meta.env.BASE_URL + "./assets/images/dev-soar-pic.png"}
				>
					<h5 className="md:text-3xl text-sm grid grid-cols-1 grid-rows-1 grid-flow-col font-bold font-mono text-my-white border-b-2 pb-2">
						SOAR: Capstone System
						<a
							href="https://github.com/Janniel/3D-Reservation-System"
							target="_blank"
							aria-label="Github"
						>
							<Tooltip
								content="View in Github"
								className="col-start-2 whitespace-nowrap"
							>
								<Github className="size-4 md:size-6 lg:size-6 xl:size-7 2xl:size-7 mx-2" />
							</Tooltip>
						</a>
					</h5>
					<p className="text-my-white md:text-lg text-xs font-mono">
						A Seat-Occupancy and Reservation System using RFID Technology and 3D
						Visualization for Bulacan State University (Team Project).
					</p>
				</Card>
				<Card
					className="max-w bg-my-black drop-shadow-2xl border-none hover:scale-[1.03] duration-200"
					imgSrc={import.meta.env.BASE_URL + "./assets/images/dev-ct-pic.png"}
				>
					<h5 className="md:text-3xl text-sm grid grid-cols-1 grid-rows-1 grid-flow-col font-bold font-mono text-my-white border-b-2 pb-2">
						CommuniTask
						<a
							href="https://github.com/OpenSoars-Group/New-CommuniTask"
							target="_blank"
							aria-label="Github"
						>
							<Tooltip
								content="View in Github"
								className="col-start-2 whitespace-nowrap"
							>
								<Github className="size-4 md:size-6 lg:size-6 xl:size-7 2xl:size-7 mx-2" />
							</Tooltip>
						</a>
						<a
							href="https://www.figma.com/design/bAJ8XE300euSffHQZI1Evz/CommuniTask?node-id=0-1&node-type=canvas&t=lRyWqYCX5rUzTAJL-0"
							target="_blank"
							aria-label="Figma"
						>
							<Tooltip
								content="View in Figma"
								className="col-start-2 whitespace-nowrap"
							>
								<Figma className="size-4 md:size-6 lg:size-6 xl:size-7 2xl:size-7 mx-2" />
							</Tooltip>
						</a>
					</h5>
					<p className="text-my-white md:text-lg text-xs font-mono">
						A mobile digital platform for local businesses and service providers
						that promotes inclusivity and a streamlined user experience (Team
						Project).
					</p>
				</Card>
				<Card
					className="max-w bg-my-black drop-shadow-2xl border-none hover:scale-[1.03] duration-200"
					imgSrc={
						import.meta.env.BASE_URL + "./assets/images/dev-meconium-pic.png"
					}
				>
					<h5 className="md:text-3xl text-sm grid grid-cols-1 grid-rows-1 grid-flow-col font-bold font-mono text-my-white border-b-2 pb-2">
						Meconium
						<a
							href="https://www.figma.com/design/AaFYzDXWgyLz3bbyTkyHrt/Meconium-Prototype?node-id=0-1&node-type=canvas&t=3nqzyHuMxuLjz8ME-0"
							target="_blank"
							aria-label="Figma"
						>
							<Tooltip
								content="View in Figma"
								className="col-start-2 whitespace-nowrap"
							>
								<Figma className="size-4 md:size-6 lg:size-6 xl:size-7 2xl:size-7 mx-2" />
							</Tooltip>
						</a>
					</h5>
					<p className="text-my-white md:text-lg text-xs font-mono">
						A mobile application powered by AI and Machine Learning to help
						parents detect potential health issues in their baby's stool from
						its color and texture (Team Idea-Project).
					</p>
				</Card>
				<Card
					className="max-w bg-my-black drop-shadow-2xl border-none hover:scale-[1.03] duration-200"
					imgSrc={
						import.meta.env.BASE_URL + "./assets/images/dev-portfolio-pic.png"
					}
				>
					<h5 className="md:text-3xl text-sm grid grid-cols-1 grid-rows-1 grid-flow-col font-bold font-mono text-my-white border-b-2 pb-2">
						My Portfolio
						<a
							href="https://github.com/Janniel/portfolio"
							target="_blank"
							aria-label="Github"
						>
							<Tooltip
								content="View in Github"
								className="col-start-2 whitespace-nowrap"
							>
								<Github className="size-4 md:size-6 lg:size-6 xl:size-7 2xl:size-7 mx-2" />
							</Tooltip>
						</a>
					</h5>
					<p className="text-my-white md:text-lg text-xs font-mono">
						My portfolio website built with React, Tailwind CSS, TypeScript, and
						Vite, designed to showcase my skills.
					</p>
				</Card>
			</div>
		),

		designTab: (
			<div className="container grid grid-cols-3 grid-flow-col gap-6 px-12">
				<div>
					<img
						src={
							import.meta.env.BASE_URL + "./assets/images/design-ggdn-pic.png"
						}
						alt=""
						loading="lazy"
						className="rounded-lg hover:scale-[1.03] duration-200"
					/>
				</div>
				<div className="col-start-2 rounded-lg">
					<img
						src={
							import.meta.env.BASE_URL + "./assets/images/design-msc-pic.jpg"
						}
						alt=""
						loading="lazy"
						className="rounded-lg hover:scale-[1.03] duration-200"
					/>
				</div>
				<div className="row-start-1 col-start-3">
					<img
						src={
							import.meta.env.BASE_URL + "./assets/images/design-soar-pic.png"
						}
						alt=""
						loading="lazy"
						className="rounded-lg hover:scale-[1.03] duration-200"
					/>
				</div>
				<div className="row-start-2 col-start-3 row-span-2">
					<img
						src={
							import.meta.env.BASE_URL + "./assets/images/design-banner-pic.png"
						}
						alt=""
						loading="lazy"
						className="rounded-lg hover:scale-[1.03] duration-200"
					/>
				</div>
				<div className="row-start-2 col-start-1 col-span-2">
					<video
						loop
						autoPlay
						muted
						src={import.meta.env.BASE_URL + "./assets/videos/3 Days Left.mp4"}
						className="rounded-lg hover:scale-[1.03] duration-200"
					></video>
				</div>
				<div className="row-start-3 col-start-1 col-span-2">
					<img
						src={
							import.meta.env.BASE_URL +
							"./assets/images/design-grad-tarp-pic.png"
						}
						alt=""
						loading="lazy"
						className="rounded-lg hover:scale-[1.03] duration-200"
					/>
				</div>
			</div>
		),

		editorTab: (
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-7 px-12">
				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://youtube.com/embed/T9abKMm-5N4?si=gQtDdBAB_x_vhf5W"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Queen of Parties Tells All
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							This Video is a trial task I practiced on to improve my skills
							(2025).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://youtube.com/embed/lG9IM8LQZws?si=ETAPxVQ6Z81NziRf"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Salt Lab Magnesium Oil
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							This Video is a trial task I practiced on to improve my skills
							(2025).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://www.youtube.com/embed/6CMc6S7jfhs?"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Tagpo: A Short Film
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							An official entry for CBCI Flix Season 2 (2023).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://www.youtube.com/embed/9rfVkxzkHtg?"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Tagpo: Short Film Trailer
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							An official entry for CBCI Flix Season 2 (2023).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://www.youtube.com/embed/Qsd6GWn-gzQ"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allow="autoPlay"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Foreign Language Activity (Mandarin)
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							A personal vlog activity on FL302 course (2023).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://drive.google.com/file/d/1gO87ubi14-kRjM1RyqLJSo3qG024zf-W/preview"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allow="autoPlay"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							CBCI Lifeline
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							A promo/teaser video for CBCI's podcast-like event portion (2020).
						</p>
					</div>
				</div>

				<div className="max-w container shadow-2xl bg-my-black hover:scale-[1.03] duration-200">
					<iframe
						src="https://www.youtube.com/embed/3iBLAs-uE5A?"
						frameBorder="0"
						className="w-full aspect-video rounded-t-lg"
						allow="autoPlay"
						allowFullScreen
					></iframe>

					<div className="p-6 bg-my-black rounded-b-lg">
						<h5 className="text-my-white font-mono md:text-3xl text-sm border-b-2 pb-2">
							Huling Sandali (Music Video)
						</h5>
						<p className="text-my-white md:text-lg text-xs font-mono py-4">
							A final requirement for a senior high school subject (2019).
						</p>
					</div>
				</div>
			</div>
		),
	};

	return (
		<section id="projects" className="bg-my-black">
			<div className="container justify-between mx-auto pt-32">
				<div className="container h-10 pb-2 md:pb-12 px-5 md:px-0 flex border-b">
					<div className="text-my-white text-left text-xl md:text-3xl w-full font-mono">
						Projects
					</div>
					<div className="text-my-white text-right text-xl md:text-3xl w-full font-mono">
						01
					</div>
				</div>

				<div className="container flex justify-between items-center mx-auto pt-12">
					<div className="mx-auto py-2 rounded-xl bg-my-black shadow-[0.625rem_0.625rem_0.5rem_0_rgb(18,17,13),-0.5rem_-0.5rem_1rem_0_rgb(38,37,33)]">
						{tabs.map((tab) => (
							<button
								key={tab.id}
								className={`px-4 py-2 w-24 md:w-32 mx-auto font-semibold font-doto text-sm md:text-md ${
									activeTab === tab.id
										? "text-faye"
										: "text-my-white hover:text-faye duration-300"
								}`}
								onClick={() => setActiveTab(tab.id)}
							>
								{tab.label}
							</button>
						))}
					</div>
				</div>
				<div className="container mt-14 pb-20">
					{tabContent[activeTab as keyof typeof tabContent]}
				</div>
			</div>
		</section>
	);
}
