import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Email } from "../assets/icons/email.svg";
import { ReactComponent as Location } from "../assets/icons/location.svg";
const ContactPageSection = () => {
	return (
		<div className="flex flex-col md:flex-row h-screen">
			<div className="bg-gray-500">
				<img
					src="https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/mombasa.webp"
					alt="mombasa"
					className="mix-blend-multiply object-cover h-screen w-full object-start"
				/>
			</div>
			<div className="flex flex-col justify-center px-8 gap-8 absolute inset-y-[25%] mx-10 md:static bg-white">
				<div>
					<h2 className="text-xl font-bold">Contact Us</h2>
				</div>
				<div className="flex gap-8 items-center">
					<Phone className="h-10 w-10 flex-shrink-0" />
					<div className="text-primary text-md md:text-lg font-bold">
						+254722123234
					</div>
				</div>
				<div className="flex gap-8 items-center">
					<Email className="h-10 w-10 flex-shrink-0" />
					<div className="text-primary text-md md:text-lg font-bold">
						support@masilasaeedadvocates.com
					</div>
				</div>
				<div className="flex gap-8 items-center">
					<Location className="h-10 w-10 flex-shrink-0" />
					<div className="text-primary text-md md:text-lg font-bold">
						Haile Sellasie Rd ,Next To Auto Accillaries Lts, Mombasa
					</div>
				</div>
			</div>
		</div>
	);
};
export default ContactPageSection;
