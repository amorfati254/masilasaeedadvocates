import Button from "../components/Button";
import { HeroSection as HomeHeroSection } from "../assets/homeStatic";
import { HeroSection as AboutHeroSection } from "../assets/aboutStatic";
import { HeroSection as ServicesHeroSection } from "../assets/servicesStatic";
import { HeroSection as ContactHeroSection } from "../assets/contactStatic";
//animation
import { useTrail, animated, config } from "@react-spring/web";
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
			"flex h-[60vh] bg-home-hero-pattern bg-cover bg-[position:75%] w-full",
	},
	Services: {
		...ServicesHeroSection,
		style:
			"flex h-[60vh] bg-home-hero-pattern bg-cover bg-[position:75%] w-full",
	},
	Contact: {
		...ContactHeroSection,
		style:
			"flex h-[60vh] bg-home-hero-pattern bg-cover bg-[position:75%] w-full",
	},
};
const Hero = ({ variant }) => {
	//spring animation
	const slideIn = useTrail(4, {
		to: { y: 0, opacity: 1 },
		from: { y: 100, opacity: 0 },
		config: config.gentle,
		trail: 150,
		delay: 200,
	});
	return (
		<section className={variant.style}>
			<div className="relative mx-auto max-w-screen-xl items-center flex sm:ml-10 sm:pl-[7.5%]">
				<div className="flex flex-col items-center max-w-xl text-center sm:text-left sm:items-start">
					<h1 className="font-extrabold text-white">
						<animated.span
							style={slideIn[0]}
							className="text-lg md:text-xl lg:text-2xl"
						>
							{variant.headingOne}
						</animated.span>

						<animated.strong
							style={slideIn[1]}
							className="font-extrabold block text-primary mt-2 text-3xl sm:text-5xl"
						>
							{variant.headingTwo}
						</animated.strong>
					</h1>

					<animated.p
						style={slideIn[2]}
						className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-white"
					>
						{variant.text}
					</animated.p>
					{variant.name === "Home" && (
						<animated.div style={slideIn[3]} className="mt-8">
							<Button variant="primary">Get In Touch</Button>
						</animated.div>
					)}
				</div>
			</div>
		</section>
	);
};
Hero.variants = variants;
export default Hero;
