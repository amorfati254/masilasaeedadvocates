import React from "react";
import Button from "../components/Button";
import FooterStatic from "../assets/footerStatic";
import { Link } from "react-router-dom";

const Footer = () => {
	//icon list
	const iconList = FooterStatic.emailRow.icons.map((icon) => (
		<Link to={icon.link} className="mx-1 " key={icon.key}>
			<icon.icon className={icon.styles} />
		</Link>
	));
	const column2LinkList = FooterStatic.footerRow.column2.links.map((link) => (
		<li key={link.key} className="block">
			<Link to={link.link}>{link.text}</Link>
		</li>
	));
	const column3LinkList = FooterStatic.footerRow.column3.links.map((link) => (
		<li key={link.key}>
			<Link to={link.link}>{link.text}</Link>
		</li>
	));
	return (
		<>
			<div className="bg-secondary">
				<div className="bg-secondary-dark relative mx-10 md:mx-20 p-8 flex flex-col gap-8 md:flex-row md:justify-between md:items-center items-center">
					<div className="flex items-center">
						<span className="text-white uppercase text-sm md:text-lg font-semibold block mr-4">
							{FooterStatic.emailRow.text}
						</span>
						{iconList}
					</div>
					<div className="flex flex-col lg:flex-row gap-8 items-center">
						<div>
							<input
								type="text"
								placeholder="Email"
								className="bg-secondary md:pl-8 font-semibold p-4"
							/>
						</div>
						<div>
							<Button variant="primary">
								<span className="font-semibold uppercase">Subscribe</span>
							</Button>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-start gap-8 md:flex-row md:justify-around py-10 mx-10 md:mx-2-">
					<div className="sm:max-w-xs">
						<h3 className="text-white mb-2 text-center md:text-start">
							{FooterStatic.footerRow.column1.heading}
						</h3>
						<p className="text-secondary-light text-center md:text-start">
							{FooterStatic.footerRow.column1.text}
						</p>
					</div>
					<div>
						<h3 className="text-white mb-2 text-center  md:text-start">
							{FooterStatic.footerRow.column2.heading}
						</h3>
						<ul className="text-secondary-light text-sm space-y-1">
							{column2LinkList}
						</ul>
					</div>
					<div>
						<h3 className="text-white mb-2 text-center md:text-start">
							Services
						</h3>
						<ul className="text-secondary-light text-sm space-y-1">
							{column3LinkList}
						</ul>
					</div>
				</div>
			</div>
			<div className="bg-secondary-dark py-4">
				<div className="mx-10 md:mx-20 flex flex-col sm:flex-row justify-between">
					<div className="text-secondary-light">
						{FooterStatic.subFooter.column1.text}
					</div>
					<div className="md:space-x-4">
						<span className="text-white block md:inline">
							{FooterStatic.subFooter.column2.text}
						</span>
						<span className="text-white">
							{FooterStatic.subFooter.column3.text}
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
