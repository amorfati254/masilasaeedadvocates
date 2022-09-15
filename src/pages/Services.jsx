import ContactSection from "../sections/ContactSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import ServicesSection from "../sections/ServicesSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import { SlideUp } from "../helpers/Animate";
const Services = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Services} />
			<SlideUp>
				<ServicesSection />
			</SlideUp>
			<SlideUp>
				<WhyChooseUs />
			</SlideUp>
			<SlideUp>
				<ContactSection />
			</SlideUp>

			<Footer />
		</div>
	);
};
export default Services;
