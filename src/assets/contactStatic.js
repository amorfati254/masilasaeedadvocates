import { ReactComponent as Phone } from "../assets/icons/phone.svg";
import { ReactComponent as Email } from "../assets/icons/email.svg";
import { ReactComponent as Location } from "../assets/icons/location.svg";
const HeroSection = {
	headingOne: "Lets Find Your",
	headingTwo: "Justice",
	text: "Helping victims obtain justice.",
	name: "Contact",
};

const ContactUsSection = {
	heading: "Get in touch",
	subHeading:
		"Tempus urna et pharetra pharetra massa massa ultricies. Nulla posuere sollicitudin aliquam ultrices sagittis orci.",
	iconCards: [
		{
			heading: "Email",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Email,
			variant: "primary",
			key: "0",
		},
		{
			heading: "Phone number",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Phone,
			variant: "secondary",
			key: "1",
		},
		{
			heading: "Location",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Location,
			variant: "primary",
			key: "2",
		},
	],
};

export { HeroSection, ContactUsSection };
