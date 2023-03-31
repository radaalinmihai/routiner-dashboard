import Image from "next/image";
import FemaleIcon from "@/public/assets/female_icon.png";
import MaleIcon from "@/public/assets/male_icon.png";
import styles from "./routineTodo.module.css";

const RoutineTODO = () => {
	return (
		<div className={styles.todo}>
			<section>
				<div className={styles.title}>TODO#3</div>
				<small>Small description which expands long</small>
			</section>
			<section className={styles.participants}>
				<Image alt="female_icon" src={FemaleIcon} />
				<Image alt="male_icon" src={MaleIcon} />
			</section>
		</div>
	);
}

export default RoutineTODO;
