import IconCards from "../components/IconCards";
import { ServicesSection as ServicesStatic } from "../assets/servicesStatic";
const ServicesSection = () => {
	return (
		<section>
			<div className="my-10 mx-10 md:mx-20">
				<div className="mb-10">
					<div className="text-center">
						<h2 className="text-2xl font-bold">{ServicesStatic.heading}</h2>
						<h4 className="font-medium text-lg text-gray-600 mt-4">
							{ServicesStatic.subHeading}
						</h4>
					</div>
				</div>
				<IconCards cards={ServicesStatic.iconCards} />
			</div>
		</section>
	);
};
export default ServicesSection;
