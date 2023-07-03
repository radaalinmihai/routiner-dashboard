import { fireEvent, render, screen } from "@testing-library/react";

import Input from "@/components/Input";

describe("Input", () => {
	it("Render input with controlled value and name", () => {
		const testName: string = "test-name";
		const label: string = "Test label";
		render(<Input name={testName} labelText={label} />);

		const input = screen.getByLabelText(label);
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("name", testName);
		expect(input).toHaveValue("");

		fireEvent.change(input, {
			target: {
				value: "Some test value to work with",
			}
		});

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("name", testName);
		expect(input).toHaveValue("Some test value to work with");

		fireEvent.change(input, {
			target: {
				value: "",
			}
		});

		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("name", testName);
		expect(input).toHaveValue("");
	});
});
