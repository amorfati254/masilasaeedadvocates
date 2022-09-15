import IconCard from "./IconCard";

const IconCards = ({ cards }) => {
	const cardList = cards.map((card) => (
		<IconCard cardInfo={card} key={card.key}>
			<div className="text-center md:text-start">{card.text}</div>
		</IconCard>
	));
	return (
		<div className="flex flex-col md:flex-row w-full justify-center">
			{cardList}
		</div>
	);
};
export default IconCards;
