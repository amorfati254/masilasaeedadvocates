const variants = {
	primary: {
		divStyle: "bg-gray-200 text-black p-8",
		svgStyle: "h-10 w-10 fill-black",
	},
	secondary: {
		divStyle: "bg-primary text-white p-8",
		svgStyle: "h-10 w-10 fill-white",
	},
};

const IconCard = ({ cardInfo, children }) => {
	const { heading, variant, icon: Svg } = cardInfo;
	let style;
	if (variant === "primary") {
		style = variants.primary;
	}
	if (variant === "secondary") {
		style = variants.secondary;
	}
	return (
		<div className={style.divStyle}>
			<Svg className={style.svgStyle} />
			<h3 className="my-2 text-xl font-bold">{heading}</h3>
			<p className="mb-2">{children}</p>
			<button className="font-bold">Read More</button>
		</div>
	);
};
IconCard.variants = variants;
export default IconCard;
