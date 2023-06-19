import clsx from "clsx";
import {
	ChangeEventHandler,
	forwardRef, useState,
} from "react";

import { IInputProps } from "@/interfaces/IForm";

import styles from "./input.module.css";

const Input = forwardRef<HTMLInputElement, IInputProps>(({ labelText, ...props }, ref) => {
	const [value, setValue] = useState(props.value ?? "");
	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
		if (props.onChange) {
			props.onChange(e);
		}
	}

	return (
			<div className={styles.inputWrapper}>
				{labelText && <label htmlFor={`input-${props.name}`}>
					{labelText}
				</label>}
				<input id={`input-${props.name}`} className={clsx(styles.input, props.className)} ref={ref} {...props} value={value} onChange={handleOnChange} />
			</div>
	);
});

Input.displayName = "Input";

export default Input;
