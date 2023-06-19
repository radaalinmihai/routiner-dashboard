import {fireEvent, render, screen} from "@testing-library/react";

import Button from "@/components/Button";
import {ButtonType} from "@/interfaces/IButton";

describe("Button", () => {
	it("Renders a button", () => {
		const testChildren = "Test children";
		let loading = false;
		const {rerender} = render(<Button onClick={() => loading = true} loading={loading}>{testChildren}</Button>);

		const renderedButton = screen.getByText(testChildren);

		expect(renderedButton).toBeInTheDocument();
		expect(renderedButton).toHaveAttribute("class", "base");

		fireEvent.click(renderedButton);
		rerender(<Button onClick={() => loading = true} loading={loading}>{testChildren}</Button>)

		expect(screen.getByRole("spinbutton")).toBeInTheDocument();
	});
	it("Renders button with primary variant", () => {
		render(<Button btnType={ButtonType.Primary}>Primary button!</Button>);

		const renderedButton = screen.getByText("Primary button!");

		expect(renderedButton).toBeInTheDocument();
		expect(renderedButton).toHaveAttribute("class", "base primaryButton");
	});
});
