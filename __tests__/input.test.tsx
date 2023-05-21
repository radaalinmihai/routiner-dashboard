import {fireEvent, render, screen} from "@testing-library/react";
import Input from "@/components/Input";

describe('Input Forwarded Ref Component', () => {
	it('Renders a normal input with an empty value and an attribute of name equal to `test-name`', () => {
		render(<Input name="test-name" />);

		const input = screen.getByRole("textbox");

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("name", "test-name");
	});

	it('Renders an input with label text', () => {
		render(<Input labelText="Test label text" />);

		const input = screen.getByRole("textbox");
		const labelText = screen.getByLabelText(/test label text/gi);

		expect(input).toHaveAttribute("placeholder", expect.stringMatching(/test label text/gi));
		expect(labelText).toBeInTheDocument();
	});

	it('Renders an input with a controlled value', () => {
		const testValue = "test value";
		render(<Input value={testValue} />);

		const input = screen.getByRole<HTMLInputElement>("textbox");
		expect(input).toHaveValue(testValue);

		fireEvent.change(input, {
			target: {
				value: "",
			}
		});
		expect(input.value).toBe("");

		fireEvent.change(input, {
			target: {
				value: "new test value"
			}
		});
		expect(input.value).toBe(/new test value/gi);
	});
});
