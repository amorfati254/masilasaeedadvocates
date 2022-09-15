// React
import { useState } from "react";

// Libs
import { Waypoint } from "react-waypoint";
import { useSpring, animated, config } from "@react-spring/web";

const SlideUp = ({ children }) => {
	const [inView, setInview] = useState(false);

	const transition = useSpring({
		delay: 200,
		to: {
			y: !inView ? 24 : 0,
			opacity: !inView ? 0 : 1,
		},
		config: config.gentle,
	});
	return (
		<Waypoint onEnter={() => setInview(true)} onLeave={() => setInview(false)}>
			<animated.div style={transition}>{children}</animated.div>
		</Waypoint>
	);
};

const SlideDown = ({ children }) => {
	const transition = useSpring({
		delay: 300,
		to: {
			y: -56,
			opacity: 100,
		},
		from: {
			y: -100,
			opacity: 0,
		},
		config: config.molasses,
	});
	return <animated.div style={transition}>{children}</animated.div>;
};

export { SlideUp, SlideDown };
