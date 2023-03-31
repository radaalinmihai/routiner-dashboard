import {ButtonType, IButton} from "@/interfaces/IButton";
import styles from "./button.module.css";
import clsx from "clsx";

const Button = ({children, btnType, ...props}: IButton) => {
	return (
		<button {...props} className={clsx(styles.baseButton, {
			[styles.primaryButton]: btnType === ButtonType.Primary,
			[styles.secondButton]: btnType === ButtonType.Secondary
		}, props.className)}>{children}</button>
	);
}

export default Button;
