import styles from "./page.module.css"
import { QRCodeForm } from "./QRCodeForm"

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.center}>
				<QRCodeForm />
			</div>
		</main>
	)
}
