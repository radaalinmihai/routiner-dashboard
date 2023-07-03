import { fireEvent, render, screen } from "@testing-library/react";

import RadioButton from "@/components/RadioButton/index";

describe("Radio Button", () => {
    it("Renders radio button", () => {
        const nameValue = "test-name";
        const option = {
            label: "Label test",
            value: "label-test",
        }
        render(<RadioButton name={nameValue} option={option} />);

        const renderedRadioButton = screen.getByRole("radio", {
            name: option.label
        });

        expect(renderedRadioButton).toBeInTheDocument();
        expect(renderedRadioButton).not.toBeChecked();

        fireEvent.click(renderedRadioButton);

        expect(renderedRadioButton).toBeChecked();
    });
    
    it("Renders radio buttons in groups", () => {
        const nameValue = "test-name";
        const options = [
            {
            label: "Label test",
            value: "label-test1",
            },
            {
                label: "Label test",
                value: "label-test2",
            },
            {
                label: "Label test",
                value: "label-test3",
            }
        ];
        render(<>
            {options.map((option) => <RadioButton key={option.value} name={nameValue} option={option}/>)}
        </>);
        
        const renderedRadioButtons = screen.getAllByRole("radio");
        const randomIndex = Math.floor(Math.random() * renderedRadioButtons.length);

        expect(renderedRadioButtons.length).toEqual(options.length);

        fireEvent.click(renderedRadioButtons.at(randomIndex) as HTMLElement);

        expect(renderedRadioButtons.at(randomIndex)).toBeChecked();
    });
});