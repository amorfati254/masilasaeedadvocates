import IconCard from "./IconCard";

const IconCards = ({ cards }) => {
	const cardList = cards.map((card) => (
		<IconCard cardInfo={card} key={card.key}>
			{card.text}
		</IconCard>
	));
	return (
		<div className="flex flex-col md:flex-row w-full justify-center">
			{cardList}
		</div>
	);
};
export default IconCards;
