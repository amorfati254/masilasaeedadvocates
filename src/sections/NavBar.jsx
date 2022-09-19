import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
//import static assets
import NavBarStatic from "../assets/navBarStatic";
//import framer motion animation
import { m, AnimatePresence } from "framer-motion";

import { useState } from "react";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	//defining variants
	const navbar = {
		hidden: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.2,
			},
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.1,
				when: "beforeChildren",
				staggerChildren: 0.1,
			},
		},
	};
	const navbarLinks = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
		},
	};

	//ref for nav mobile button
	const mobileNav = useRef(null);
	const handleHamburger = (e) => {
		setToggle(!toggle);
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
			<m.div variants={navbarLinks}>{nav.text}</m.div>
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
			<AnimatePresence>
				{toggle && (
					<m.div
						key="modal"
						variants={navbar}
						initial="hidden"
						animate="visible"
						exit="hidden"
						ref={mobileNav}
						className="flex-col top-0 bg-gray-900 w-full divide-y divide-gray-800 text-white px-8 py-4 sm:hidden z-0"
					>
						{mobileLinks}
					</m.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavBar;
