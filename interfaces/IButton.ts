export type IButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
	btnType?: ButtonType;
	loading?: boolean;
};

export enum ButtonType {
	Primary = "primary",
	Secondary = "secondary"
}
