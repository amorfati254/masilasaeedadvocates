import Button from "../components/Button";
import { HeroSection as HomeHeroSection } from "../assets/homeStatic";
import { HeroSection as AboutHeroSection } from "../assets/aboutStatic";
import { HeroSection as ServicesHeroSection } from "../assets/servicesStatic";
import { HeroSection as ContactHeroSection } from "../assets/contactStatic";
//animation
import { m } from "framer-motion";
//variants from static file
const variants = {
	Home: {
		...HomeHeroSection,
		style:
			"flex h-screen bg-home-hero-pattern bg-cover bg-[position:75%] w-full",
	},
	About: {
		...AboutHeroSection,
		style:
			"flex h-[60vh] bg-about-hero-pattern bg-cover bg-[position:75%] w-full",
	},
	Services: {
		...ServicesHeroSection,
		style:
			"flex h-[60vh] bg-services-hero-pattern bg-cover bg-[position:75%] w-full",
	},
	Contact: {
		...ContactHeroSection,
		style:
			"flex h-[60vh] bg-contact-hero-pattern bg-cover bg-[position:75%] w-full",
	},
};
const Hero = ({ variant }) => {
	return (
		<section className={variant.style}>
			<div className="relative mx-auto max-w-screen-xl items-center flex sm:ml-10 sm:pl-[7.5%]">
				<div className="flex flex-col items-center max-w-xl text-center sm:text-left sm:items-start">
					<h1 className="font-extrabold text-white">
						<m.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.1, duration: 1 }}
							className="text-lg md:text-xl lg:text-2xl"
						>
							{variant.headingOne}
						</m.div>

						<m.strong
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2, duration: 1 }}
							className="font-extrabold block text-primary mt-2 text-3xl sm:text-5xl"
						>
							{variant.headingTwo}
						</m.strong>
					</h1>

					<m.p
						initial={{ y: 100, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.3, duration: 1 }}
						className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white"
					>
						{variant.text}
					</m.p>
					{variant.name === "Home" && (
						<m.div
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.4, duration: 1 }}
							className="mt-8"
						>
							<Button variant="primary">Get In Touch</Button>
						</m.div>
					)}
				</div>
			</div>
		</section>
	);
};
Hero.variants = variants;
export default Hero;
