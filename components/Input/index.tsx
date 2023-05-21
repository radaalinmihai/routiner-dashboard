import {
	ChangeEventHandler,
	forwardRef, useState,
} from "react";
import styles from "./input.module.css";
import clsx from "clsx";
import {IInputProps} from "@/interfaces/IForm";

const Input = forwardRef<HTMLInputElement, IInputProps>(({labelText, ...props}, ref) => {
	const [value, setValue] = useState(props.value ?? "");
	const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value);
		if (props.onChange) {
			props.onChange(e);
		}
	}

	return (
			<div className={styles.inputWrapper}>
				<input id={`input-${props.name}`} className={clsx(styles.input, "peer", props.className)} ref={ref} placeholder={labelText} {...props} value={value} onChange={handleOnChange} />
				{labelText && <label className="peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1 peer-placeholder-shown:left-3 peer-focus:left-1 peer-focus:-top-4 peer-focus:text-gray-200 peer-focus:text-sm" htmlFor={`input-${props.name}`}>
					{labelText}
				</label>}
			</div>
	);
});

Input.displayName = "Input";

export default Input;
