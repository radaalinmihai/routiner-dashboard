"use client";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form";
import {makeRequest} from "@/utils/makeRequest";
import styles from "@/app/signin/page.module.css";
import FormInput from "@/components/Form/FormInput";
import Button from "@/components/Button";

interface IFormValues {
	username: string;
	password: string;
}

export default function AuthLogin() {
	const methods = useForm<IFormValues>({
		defaultValues: {
			username: "",
			password: "",
		}
	});
	const {handleSubmit, register} = methods;

	const onSignIn: SubmitHandler<IFormValues> = async ({username, password}) => {
		try {
			makeRequest({
				url: "/auth/login",
				method: "POST",
				body: {
					username,
					password,
				}
			});
		} catch(err) {
			console.error(err);
		}
	}

	return (
		<FormProvider {...methods}>
			<form className={styles.form} onSubmit={handleSubmit(onSignIn)}>
				<FormInput name="username" labelText="Username" />
				<FormInput type="password" name="password" labelText="Password" />
				<Button type="submit">Sign In</Button>
			</form>
		</FormProvider>
	);
}
