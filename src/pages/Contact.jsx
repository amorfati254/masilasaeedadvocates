import ContactPageSection from "../sections/ContactPageSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import { FadeIn } from "../helpers/Animate";
const Contact = () => {
	return (
		<div>
			<NavBar />
			<Hero variant={Hero.variants.Contact} />
			<FadeIn>
				<ContactPageSection />
			</FadeIn>
			<Footer />
		</div>
	);
};
export default Contact;
