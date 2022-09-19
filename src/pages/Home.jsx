import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import TeamSection from "../sections/TeamSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import { FadeIn } from "../helpers/Animate";
import Stats from "../sections/Stats";
function Home() {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Home} />
			<FadeIn>
				<AboutSection />
			</FadeIn>
			<FadeIn>
				<WhyChooseUs />
			</FadeIn>
			<FadeIn>
				<Stats />
			</FadeIn>
			<FadeIn>
				<ContactSection />
			</FadeIn>

			<FadeIn>
				<TeamSection />
			</FadeIn>

			<Footer />
		</div>
	);
}

export default Home;
