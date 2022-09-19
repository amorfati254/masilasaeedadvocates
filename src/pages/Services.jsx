import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import { FadeIn } from "../helpers/Animate";
const Services = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Services} />
			<FadeIn>
				<ServicesSection />
			</FadeIn>
			<FadeIn>
				<WhyChooseUs />
			</FadeIn>
			<FadeIn>
				<ContactSection />
			</FadeIn>

			<Footer />
		</div>
	);
};
export default Services;
