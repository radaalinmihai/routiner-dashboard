import RoutineTODO from "@/components/routineTodo";
import styles from "./routineCard.module.css";

const RoutineCard = () => {
	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<span>Routine in progress - Weekday 3, Jun 24</span>
			</div>
			<RoutineTODO/>
			<RoutineTODO/>
			<RoutineTODO/>
		</div>
	);
}

export default RoutineCard;
