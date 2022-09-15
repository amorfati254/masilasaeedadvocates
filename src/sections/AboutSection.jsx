import Button from "../components/Button";
import IconCards from "../components/IconCards";
import { AboutSection as AboutSectionStatic } from "../assets/homeStatic";
const AboutSection = () => {
	return (
		<section className="mb-10 mx-10 md:mx-20">
			<div className="relative -top-20">
				<IconCards cards={AboutSectionStatic.iconCards} />
			</div>
			<div className="flex flex-col md:flex-row justify-between -mt-4 gap-2">
				<div>
					<h3 className="text-xl font-bold">
						{AboutSectionStatic.callToAction.heading}
					</h3>
					<p>{AboutSectionStatic.callToAction.text}</p>
				</div>
				<div className="mt-4 md:mt-0">
					<Button variant={AboutSectionStatic.callToAction.button.type}>
						{AboutSectionStatic.callToAction.button.text}
					</Button>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
