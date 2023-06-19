import clsx from "clsx";
import { FC } from "react";

import styles from "./loading.module.css";

interface IProps {
	className?: string;
}

const Loading: FC<IProps> = ({ className }) => {
	return (
		<div role="spinbutton" className={clsx(styles.spinner, className)} />
	);
}

export default Loading;
