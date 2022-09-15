import Accordion from "../components/Accordion";
import { FQASection } from "../assets/aboutStatic";
const FrequentlyAsked = () => {
	return (
		<div className="my-10 mx-10 md:mx-20">
			<div className="mb-10">
				<div className="text-center">
					<h2 className="text-2xl sm:text-4xl font-bold">
						{FQASection.heading}
					</h2>
					<h4 className="font-medium text-lg text-gray-600 mt-4">
						{FQASection.subHeading}
					</h4>
				</div>
			</div>
			<Accordion accordions={FQASection.fqaList} />
		</div>
	);
};
export default FrequentlyAsked;
