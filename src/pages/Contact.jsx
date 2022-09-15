import ContactPageSection from "../sections/ContactPageSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import { SlideUp } from "../helpers/Animate";
const Contact = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Contact} />
			<SlideUp>
				<ContactPageSection />
			</SlideUp>
			<Footer />
		</div>
	);
};
export default Contact;
