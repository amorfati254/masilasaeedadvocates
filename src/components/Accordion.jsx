import { createRef } from "react";
import { useRef } from "react";

const Accordion = ({ accordions }) => {
	const myRefs = useRef([]);
	myRefs.current = accordions.map(
		(element, i) => myRefs.current[i] ?? createRef()
	);

	const handleClick = (ref) => {
		ref.current.classList.toggle("hidden");
	};

	const accordingList = accordions.map((accordion, i) => (
		<div key={accordion.key}>
			<div className="border p-8">
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
				<div ref={myRefs.current[i]} className="mt-4 hidden">
					<p>{accordion.answer}</p>
				</div>
			</div>
		</div>
	));
	return <div>{accordingList}</div>;
};
export default Accordion;
