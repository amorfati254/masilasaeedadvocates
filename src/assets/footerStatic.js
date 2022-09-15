import { ReactComponent as Facebook } from "../assets/icons/facebook.svg";
import { ReactComponent as Twitter } from "../assets/icons/twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedin.svg";

const Footer = {
	emailRow: {
		text: "Find Us On: ",
		icons: [
			{
				icon: Facebook,
				link: "#",
				styles: "h-6 w-6 fill-primary bg-secondary-light p-1 rounded",
				key: "1",
			},
			{
				icon: Twitter,
				link: "#",
				styles: "h-6 w-6 fill-primary bg-secondary-light p-1 rounded",
				key: "2",
			},
			{
				icon: LinkedIn,
				link: "#",
				styles: "h-6 w-6 fill-primary bg-secondary-light p-1 rounded",
				key: "3",
			},
		],
	},
	footerRow: {
		column1: {
			heading: "Masila Saeed Advocates",
			text: "Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
		},
		column2: {
			heading: "Services",
			links: [
				{
					key: "0",
					text: "General Practices",
					link: "#",
				},
				{
					key: "1",
					text: "General Practices",
					link: "#",
				},
				{
					key: "2",
					text: "General Practices",
					link: "#",
				},
				{
					key: "3",
					text: "General Practices",
					link: "#",
				},
			],
		},
		column3: {
			heading: "",
			links: [
				{
					key: "0",
					text: "General Practices",
					link: "#",
				},
				{
					key: "1",
					text: "General Practices",
					link: "#",
				},
				{
					key: "2",
					text: "General Practices",
					link: "#",
				},
				{
					key: "3",
					text: "General Practices",
					link: "#",
				},
			],
		},
	},
	subFooter: {
		column1: { text: "Masila Saeed Advocates. All rights reserved." },
		column2: { text: "Terms and conditions" },
		column3: { text: "Privacy Policy" },
	},
};

export default Footer;
