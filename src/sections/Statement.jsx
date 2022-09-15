import IconCards from "../components/IconCards";
import { StatementSection } from "../assets/aboutStatic";
const Statement = () => {
	return (
		<div className="my-10 mx-10 md:mx-20">
			<div className="mb-10">
				<div className="text-center">
					<h2 className="text-2xl sm:text-4xl font-bold">
						{StatementSection.heading}
					</h2>
					<h4 className="font-medium text-lg text-gray-600 mt-4">
						{StatementSection.subHeading}
					</h4>
				</div>
			</div>
			<IconCards cards={StatementSection.iconCards} />
		</div>
	);
};
export default Statement;
