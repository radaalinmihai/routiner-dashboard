import type {FC} from "react";
import Link from "next/link";
import MdIcon from "@/components/MdIcon";
import NavLink from "@/components/sideBar/NavLink";

const Sidebar: FC = () => {
	return (
		<div className='sidebar'>
			<img src='assets/logo_placeholder.png' />
			<div className='sidebar-wrapper'>
				<div className='sidebar-wrapper--item'>
					<NavLink iconName='library_add' href='/create/routine'>
						<span className='text-xl'>Create routine</span>
					</NavLink>
				</div>
				<div className='sidebar-wrapper--item'>
					<NavLink iconName='playlist_add' href='/create/to-do'>
						<span className='text-xl'>Create TODO</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
