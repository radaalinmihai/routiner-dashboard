export type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	btnType?: ButtonType;
};

export enum ButtonType {
	Primary = "primary",
	Secondary = "secondary"
}
