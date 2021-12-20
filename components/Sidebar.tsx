import type {FC} from "react";

const Sidebar: FC = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar-wrapper'>
				<div className='sidebar-wrapper--item'>Create routine</div>
				<div className='sidebar-wrapper--item'>Create TODO</div>
			</div>
		</div>
	);
}

export default Sidebar;
