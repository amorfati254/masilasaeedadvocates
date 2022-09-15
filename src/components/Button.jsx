const variants = {
	white:
		"transition ease-in-out duration-300 bg-white text-primary hover:bg-primary hover:text-white hover:scale-110 ",
	primary:
		"transition ease-in-out duration-300 bg-primary text-white hover:bg-white hover:text-primary hover:scale-110 ",
};
const Button = ({ variant, link, onClick, children }) => {
	let style;
	if (variant === "primary") {
		style = variants.primary;
	}
	if (variant === "white") {
		style = variants.white;
	}
	const tailwindStyles =
		"cursor-pointer inline-block text-center px-6 md:px-12 py-3 text-sm font-medium shadow sm:w-auto active:bg-primary hover:scale-110" +
		style;
	return (
		<a className={tailwindStyles} href={link} onClick={onClick}>
			{children}
		</a>
	);
};
Button.variants = variants;
export default Button;
