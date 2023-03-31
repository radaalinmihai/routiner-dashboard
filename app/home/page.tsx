import RoutineCard from "@/components/routineCard";
import "@/components/routineCard/routineCard.module.css"

export default function Home() {
	return (
		<div className='p-4 flex flex-row flex-wrap justify-around'>
			<RoutineCard />
			<RoutineCard />
			<RoutineCard />
		</div>
	);
};

