import Link, {LinkProps} from "next/link";
import {FunctionComponent, PropsWithChildren} from "react";
import MdIcon from "@/components/MdIcon";

interface IProps extends PropsWithChildren<LinkProps> {
	iconName?: string;
}

const NavLink: FunctionComponent<IProps> = ({children, iconName = "", ...linkProps}) => {
	return (
		<Link {...linkProps} className="flex items-center space-x-2">
			<MdIcon name={iconName} />
			{children}
		</Link>
	);
}

export default NavLink;
