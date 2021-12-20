import {FC} from "react";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";

const MainLayout: FC = ({children}) => {
	return (
		<div className='wrapper'>
			<Sidebar />
			<div className='wrapper-content'>
				<Navbar />
				{children}
			</div>
		</div>
	);
}

export default MainLayout;
