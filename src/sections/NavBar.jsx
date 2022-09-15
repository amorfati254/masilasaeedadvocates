import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
//import static assets
import NavBarStatic from "../assets/navBarStatic";
//import spring animation
// import { SlideDown } from "../helpers/Animate";

//import react spring
import { useSpring, animated, config } from "@react-spring/web";
import { useState, useEffect } from "react";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	//react spring animation
	useEffect(() => {
		// console.log("before animation");
		api.start({
			from: {
				opacity: toggle ? 0 : 1,
				y: toggle ? -100 : 0,
				scale: toggle ? 0.75 : 1,
			},
			to: {
				opacity: toggle ? 1 : 0,
				y: toggle ? 0 : -100,
				scale: toggle ? 1 : 0.75,
			},
			//waits for animation to end before toggling invisible class
			onRest: {
				y: (result) => {
					if (result.value === -100)
						mobileNav.current.classList.add("invisible");
				},
			},
		});
	}, [toggle]);

	const [styles, api] = useSpring(() => ({
		delay: 0,
		config: config.default,
	}));

	//ref for nav mobile button
	const mobileNav = useRef(null);
	const handleHamburger = (e) => {
		setToggle(!toggle);
		mobileNav.current.classList.remove("invisible");
	};
	//populating desktop navbar
	const desktopLinks = NavBarStatic.links.map((nav) => (
		<NavLink
			key={nav.text}
			to={nav.link}
			className={({ isActive }) => (isActive ? "active-nav" : "nav")}
		>
			{nav.text}
		</NavLink>
	));
	//populating desktop navbar
	const mobileLinks = NavBarStatic.links.map((nav) => (
		<NavLink
			key={nav.text}
			to={nav.link}
			className={({ isActive }) =>
				isActive ? "active-mobile-nav" : "mobile-nav"
			}
		>
			{nav.text}
		</NavLink>
	));
	return (
		<nav className="w-screen fixed z-50">
			<div className="flex justify-between px-10 py-4 md:px-20 font-bold bg-gray-900 text-white relative z-10">
				<div>
					<Link to="/">
						<img
							className="h-8 sm:h-full"
							src={NavBarStatic.logo.url}
							alt="logo"
						/>
					</Link>
				</div>
				<div
					className="flex sm:hidden items-center cursor-pointer"
					onClick={handleHamburger}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</div>
				{/* Desktop navbar */}
				<div className="hidden sm:flex sm:flex-row sm:space-x-6">
					{desktopLinks}
				</div>
			</div>
			{/* Mobile Navbar */}
			<animated.div
				style={styles}
				ref={mobileNav}
				className="flex-col  invisible top-0 bg-gray-900 w-full divide-y divide-gray-800 text-white px-8 py-4 sm:hidden z-0"
			>
				{mobileLinks}
			</animated.div>
		</nav>
	);
};

export default NavBar;
