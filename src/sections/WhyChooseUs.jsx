import { WhyChooseUsSection } from "../assets/homeStatic";
const WhyChooseUs = () => {
	const whyChooseUsList = WhyChooseUsSection.cards.map((card) => (
		<div className="flex flex-col items-center text-center" key={card.key}>
			<div className="text-4xl text-gray-400 font-extrabold">{card.number}</div>
			<h4 className="font-bold text-lg">{card.heading}</h4>
			<p className=" text-gray-600 mt-4">{card.text}</p>
		</div>
	));
	return (
		<div className="bg-gray-100 py-10 md:px-20 px-10">
			<div>
				<div className="text-center">
					<h2 className="text-3xl font-bold">{WhyChooseUsSection.heading}</h2>
					<h4 className="text-xl font-medium text-gray-600 mt-4">
						{WhyChooseUsSection.subHeading}
					</h4>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-8 gap-10 lg:gap-6">
				{whyChooseUsList}
			</div>
		</div>
	);
};
export default WhyChooseUs;
