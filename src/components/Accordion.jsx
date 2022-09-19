import { useState, useEffect } from "react";
import { createRef } from "react";
import { useRef } from "react";

const Accordion = ({ accordions }) => {
	const [toggle, setToggle] = useState(false);
	const [ref, setRef] = useState(false);
	const myRefs = useRef([]);
	myRefs.current = accordions.map(
		(element, i) => myRefs.current[i] ?? createRef()
	);
	useEffect(() => {
		if (ref) {
			if (toggle) {
				ref.current.classList.add("h-auto", "py-4", "opacity-100");
				ref.current.classList.remove("opacity-0", "h-0");
			}
			if (!toggle) {
				ref.current.classList.remove("h-auto", "py-4", "opacity-100");
				ref.current.classList.add("opacity-0", "h-0");
			}
		}
	}, [toggle]);
	const handleClick = (ref) => {
		setToggle(!toggle);
		setRef(ref);
	};

	const accordingList = accordions.map((accordion, i) => (
		<div key={accordion.key}>
			<div className="border p-8 overflow-hidden">
				<div className="flex justify-between">
					<div>{accordion.question}</div>
					<div onClick={() => handleClick(myRefs.current[i])}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 stroke-primary stroke-2"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 4.5v15m7.5-7.5h-15"
							/>
						</svg>
					</div>
				</div>
				<div ref={myRefs.current[i]} className="opacity-0 h-0 transition-all">
					<p>{accordion.answer}</p>
				</div>
			</div>
		</div>
	));
	return <div>{accordingList}</div>;
};
export default Accordion;
