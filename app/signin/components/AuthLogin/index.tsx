"use client";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import styles from "@/app/signin/page.module.css";
import Button from "@/components/Button";
import FormInput from "@/components/Form/FormInput";
import { ILoginData } from "@/interfaces/IForm";
import { setAccessToken } from "@/utils/cookies";
import { makeRequest } from "@/utils/makeRequest";

interface IFormValues {
	email: string;
	password: string;
}

export default function AuthLogin() {
	const methods = useForm<IFormValues>({
		defaultValues: {
			email: "",
			password: "",
		}
	});
	const { handleSubmit } = methods;

	const onSignIn: SubmitHandler<IFormValues> = async ({ email, password }) => {
		try {
			const response = await makeRequest<ILoginData>({
				url: "/auth/login",
				method: "POST",
				body: {
					email,
					password,
				}
			});
			if (response.access_token) {
				setAccessToken(response.access_token);
			}
			console.log(response);
		} catch(err) {
			console.error(err);
		}
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.form} onSubmit={handleSubmit(onSignIn)}>
				<FormInput name="email" labelText="Email" />
				<FormInput type="password" name="password" labelText="Password" />
				<Button type="submit">Sign In</Button>
			</form>
		</FormProvider>
	);
}
