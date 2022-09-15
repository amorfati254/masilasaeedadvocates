const Stats = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-10 md:px-[10%] pb-12 pt-8 gap-8 sm:gap-2">
			<div className="flex flex-col items-center">
				<div className="text-3xl sm:text-4xl font-bold text-primary">20</div>
				<div className="text-xl sm:text-xl font-semibold mt-2 uppercase">
					Skilled Lawyers
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-3xl sm:text-4xl font-bold text-primary">20</div>
				<div className="text-xl sm:text-xl font-semibold mt-2 uppercase">
					Satisfied Clients
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-3xl sm:text-4xl font-bold text-primary">20</div>
				<div className="text-xl sm:text-xl font-semibold mt-2 uppercase">
					Years Experience
				</div>
			</div>
			<div className="flex flex-col items-center">
				<div className="text-3xl sm:text-4xl font-bold text-primary">20</div>
				<div className="text-xl sm:text-xl font-semibold mt-2 uppercase">
					Finised Projects
				</div>
			</div>
		</div>
	);
};
export default Stats;
