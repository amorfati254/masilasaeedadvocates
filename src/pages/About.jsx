import Footer from "../sections/Footer";
import FrequentlyAsked from "../sections/FrequentlyAsked";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import Statement from "../sections/Statement";
import Stats from "../sections/Stats";
import TeamSection from "../sections/TeamSection";
import { SlideUp } from "../helpers/Animate";
const About = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.About} />
			<SlideUp>
				<Statement />
			</SlideUp>
			<SlideUp>
				<Stats />
			</SlideUp>
			<SlideUp>
				<TeamSection />
			</SlideUp>
			<SlideUp>
				<FrequentlyAsked />
			</SlideUp>

			<Footer />
		</div>
	);
};
export default About;
