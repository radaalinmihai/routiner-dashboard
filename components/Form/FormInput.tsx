import Input from "@/components/Input";
import {useController, useFormContext} from "react-hook-form";
import {IInputProps} from "@/interfaces/IForm";

const FormInput = (props: IInputProps) => {
	const {control} = useFormContext();
	const {field} = useController({
		control,
		name: props.name || "",
	});
	return <Input {...props} {...field} />;
}

export default FormInput;
