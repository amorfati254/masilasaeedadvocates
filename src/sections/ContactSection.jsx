import Button from "../components/Button";
import { ContactUsSection } from "../assets/homeStatic";
const ContactSection = () => {
	return (
		<div className="">
			<div className="bg-white py-10 mx-10 md:mx-20 flex flex-col md:flex-row gap-x-14">
				<div>
					<h2 className="font-bold text-2xl">
						{ContactUsSection.column1.heading}
					</h2>
					<p className="mt-3">{ContactUsSection.column1.text}</p>
					<div className="flex flex-wrap mt-8 text-center gap-4">
						<Button variant={ContactUsSection.column1.button1.type}>
							{ContactUsSection.column1.button1.text}
						</Button>
						<Button variant={ContactUsSection.column1.button2.type}>
							{ContactUsSection.column1.button2.text}
						</Button>
					</div>
				</div>
				<div className="mt-8 md:mt-0">
					<h2 className="font-bold text-2xl">
						{ContactUsSection.column2.heading}
					</h2>
					<p className="mt-3">{ContactUsSection.column2.text}</p>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;
