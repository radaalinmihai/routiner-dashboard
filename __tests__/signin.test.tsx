import { fireEvent, render, screen } from "@testing-library/react";

import SignInPage from "@/app/signin/page";

beforeEach(() => {
	const { debug } = render(<SignInPage />);
});

describe("Sign In", () => {
	it("Renders the sign in page with the inputs in place", () => {
		const emailInput = screen.getByPlaceholderText("Email");
		const passwordInput = screen.getByPlaceholderText("Password");

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();

		expect(emailInput).toHaveValue("");
		expect(passwordInput).toHaveValue("");
	});

	it("submits the form with some values", () => {
		const emailInput = screen.getByPlaceholderText("Email");
		const passwordInput = screen.getByPlaceholderText("Password");
		// const submitButton = screen.getByRole("button", {
		// 	name: "submit",
		// });

		fireEvent.change(emailInput, {
			target: {
				value: "test321@gmail.com",
			},
		});
		fireEvent.change(passwordInput, {
			target: {
				value: "Test321",
			},
		});

		expect(emailInput).toHaveValue("test321@gmail.com");
		expect(passwordInput).toHaveValue("Test321");
	});
});
