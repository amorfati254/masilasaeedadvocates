import { TeamSection as TeamSectionStatic } from "../assets/homeStatic";
const TeamSection = () => {
	const teamList = TeamSectionStatic.cards.map((card) => (
		<div className="border bg-white shadow-lg" key={card.key}>
			<div>
				<img
					src="https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/lawyer.jpg"
					alt="lawyer"
					className="object-cover h-96 w-full object-top"
				/>
			</div>
			<div className="p-6">
				<span className="block text-lg font-bold uppercase mt-2">
					{card.heading}
				</span>
				<span className="block text-primary">{card.subHeading}</span>
				<p className="mt-4">{card.text}</p>
			</div>
		</div>
	));
	return (
		<div className="bg-gray-100 py-10 px-10 md:px-[10%]">
			<div className="mb-10">
				<div className="text-center">
					<h2 className="font-bold text-2xl sm:text-4xl">
						{TeamSectionStatic.heading}
					</h2>
					<h4 className="font-medium text-xl text-gray-600 mt-4">
						{TeamSectionStatic.subHeading}
					</h4>
				</div>
			</div>
			<div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
				{teamList}
			</div>
		</div>
	);
};

export default TeamSection;
