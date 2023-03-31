import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface IInputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "placeholder"> {
	labelText?: string;
}
