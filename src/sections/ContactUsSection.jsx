import IconCards from "../components/IconCards";
import { ContactUsSection as ContactStatic } from "../assets/contactStatic";
const ContactUsSection = () => {
	return (
		<section>
			<div className="my-10 mx-20">
				<div className="mb-10">
					<div className="text-center">
						<h2>{ContactStatic.heading}</h2>
						<h4 className="font-medium text-gray-600 mt-4">
							{ContactStatic.subheading}
						</h4>
					</div>
				</div>
				<IconCards cards={ContactStatic.iconCards} />
			</div>
		</section>
	);
};
export default ContactUsSection;
