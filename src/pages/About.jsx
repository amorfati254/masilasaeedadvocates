import Footer from "../sections/Footer";
import FrequentlyAsked from "../sections/FrequentlyAsked";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import Statement from "../sections/Statement";
import Stats from "../sections/Stats";
import TeamSection from "../sections/TeamSection";
import { FadeIn } from "../helpers/Animate";
const About = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.About} />
			<FadeIn>
				<Statement />
			</FadeIn>
			<FadeIn>
				<Stats />
			</FadeIn>
			<FadeIn>
				<TeamSection />
			</FadeIn>
			<FadeIn>
				<FrequentlyAsked />
			</FadeIn>

			<Footer />
		</div>
	);
};
export default About;
