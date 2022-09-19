// React
import { useEffect, useRef } from "react";
import { m, animate, useInView } from "framer-motion";

const SlideUp = ({ children }) => {
	return (
		<m.div
			initial={{ y: -56, opacity: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			{children}
		</m.div>
	);
};
const FadeIn = ({ children }) => {
	return (
		<m.div
			initial={{ opacity: 0 }}
			transition={{ delay: 0.2, duration: 0.5 }}
			whileInView={{ opacity: 1 }}
		>
			{children}
		</m.div>
	);
};
const SlideDown = ({ children }) => {
	return (
		<m.div
			initial={{ opacity: 0, x: -100 }}
			transition={{ delay: 0.2, duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
		>
			{children}
		</m.div>
	);
};
const AnimateNumber = ({ startNo, endNo }) => {
	const nodeRef = useRef();
	const inView = useInView(nodeRef);
	useEffect(() => {
		inView &&
			animate(startNo, endNo, {
				duration: 2,
				onUpdate(value) {
					nodeRef.current.textContent = value.toFixed(0);
				},
			});
	}, [inView, startNo, endNo]);

	return <p ref={nodeRef} />;
};
export { SlideUp, FadeIn, SlideDown, AnimateNumber };
