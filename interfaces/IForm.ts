import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface IInputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "placeholder"> {
	labelText?: string;
}

export interface ILoginData {
	access_token: string;
	message: string;
}
