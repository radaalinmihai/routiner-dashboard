import "@/components/routineCard/routineCard.module.css"

import RoutineCard from "@/components/routineCard";

export default function Home() {
	return (
		<div className='p-4 flex flex-row flex-wrap justify-around'>
			<RoutineCard />
			<RoutineCard />
			<RoutineCard />
		</div>
	);
};

