import { ReactComponent as Chart } from "../assets/icons/chart.svg";
import { ReactComponent as Goal } from "../assets/icons/goal.svg";
import { ReactComponent as Vision } from "../assets/icons/vision.svg";
const HeroSection = {
	headingOne: "Lets Find Your",
	headingTwo: "Justice",
	text: "Helping victims obtain justice.",
	name: "About",
};
const TeamSection = {
	heading: "Qualified lawyers",
	subHeading:
		"With expert local knowledge our lawyers provide top-tier advice and client service.",
	cards: [
		{
			key: "0",
			image:
				"https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/lawyer.jpg",
			heading: "BARBARA MAY",
			subHeading: "Managing partner",
			text: "Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat.",
		},
		{
			key: "1",
			image:
				"https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/lawyer.jpg",
			heading: "BARBARA MAY",
			subHeading: "Managing partner",
			text: "Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat.",
		},
		{
			key: "2",
			image:
				"https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/lawyer.jpg",
			heading: "BARBARA MAY",
			subHeading: "Managing partner",
			text: "Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat.",
		},
		{
			key: "3",
			image:
				"https://masilasaeedadvocates.com/api/wp-content/uploads/2022/09/lawyer.jpg",
			heading: "BARBARA MAY",
			subHeading: "Managing partner",
			text: "Dignissim per dis dignissim mi nibh a parturient habitasse suspendisse ut a feugiat.",
		},
	],
};
const StatementSection = {
	heading: "What We Do",
	subHeading: "Our Vison Mission And Value Statements",
	iconCards: [
		{
			heading: "Mission",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Chart,
			variant: "primary",
			key: "0",
		},
		{
			heading: "Vision",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Vision,
			variant: "secondary",
			key: "1",
		},
		{
			heading: "Goal",
			text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, voluptas.",
			icon: Goal,
			variant: "primary",
			key: "2",
		},
	],
};
const FQASection = {
	heading: "Frequently Asked Questions",
	subHeading: "Our Vison Mission And Value Statements",
	fqaList: [
		{
			key: "0",
			question: "1. Our Mission",
			answer:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nesciunt autem in illo impedit assumenda.",
		},
		{
			key: "1",
			question: "2. Our Vision",
			answer:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nesciunt autem in illo impedit assumenda.",
		},
		{
			key: "2",
			question: "3. Our Goal",
			answer:
				"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nesciunt autem in illo impedit assumenda.",
		},
	],
};
export { HeroSection, TeamSection, StatementSection, FQASection };
