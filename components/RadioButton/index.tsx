import styles from "./radioButton.module.css";

interface IOption<T> {
    label: string;
    value: T;
}

interface IProps<T> {
    option: IOption<T>;
    name: string;
}

const RadioButton = <T extends string | number | readonly string[] | undefined, >({ option, name }: IProps<T>) => {
    return <div className={styles.container}>
        {option.label && <label id={name}>{option.label}</label>}
        <input aria-labelledby={name} type="radio" className={styles.input} value={option.value} />
    </div>;
}

export default RadioButton;