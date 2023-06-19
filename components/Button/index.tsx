import clsx from "clsx";
import { FC } from "react";

import Loading from "@/components/Loading";
import { ButtonType, IButton } from "@/interfaces/IButton";

import styles from "./button.module.css";

const Button: FC<IButton> = ({ children, btnType, loading, ...props }) => {
	return (
		<button {...props} className={clsx(styles.base, {
			[styles.loading]: loading,
			[styles.primaryButton]: btnType === ButtonType.Primary,
			[styles.secondButton]: btnType === ButtonType.Secondary
		}, props.className)}>
			{!loading && children}
			{loading && <Loading className={styles.loader} />}
		</button>
	);
}

export default Button;
