"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { ButtonType } from "@/interfaces/IButton";

import styles from "./styles.module.css";

export default function UiKitPage() {
	return (
		<div className={styles.container}>
			<h2>Inputs</h2>
			<section>
				<Input labelText="Username" />
			</section>
			<h2>Buttons</h2>
			<section className={styles.buttonSection}>
				<div>
					<div>Base variant - no loading</div>
					<Button>Click action - Default</Button>
				</div>
				<div>
					<div>Base variant - loading</div>
					<Button loading>Click action - Default</Button>
				</div>
				<div>
					<div>Primary variant - not loading</div>
					<Button btnType={ButtonType.Primary}>Click action - Primary</Button>
				</div>
			</section>
			<h2>Loader</h2>
			<section>
				<Loading />
			</section>
		</div>
	);
}
