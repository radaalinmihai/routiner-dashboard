import {FunctionComponent} from "react";

interface IProps {
	name: string;
}

const MdIcon: FunctionComponent<IProps> = ({name}) => {
	return <span className='material-icons'>{name}</span>
}

export default MdIcon;
