import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import TeamSection from "../sections/TeamSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import { SlideUp } from "../helpers/Animate";
function Home() {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Home} />
			<SlideUp>
				<AboutSection />
			</SlideUp>
			<SlideUp>
				<WhyChooseUs />
			</SlideUp>
			<SlideUp>
				<ContactSection />
			</SlideUp>
			<SlideUp>
				<TeamSection />
			</SlideUp>

			<Footer />
		</div>
	);
}

export default Home;
