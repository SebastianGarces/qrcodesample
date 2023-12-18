"use client"

import QRCode from "qrcode"
import { useState } from "react"
import styles from "./QRCodeForm.module.css"

export function QRCodeForm() {
	const [content, setContent] = useState<string>("")
	const [url, setUrl] = useState<string>("")

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		QRCode.toDataURL(content, { width: 400, margin: 3 }, function (error, url) {
			if (error) console.error(error)
			setUrl(url)
		})
	}

	function onChange(event: React.ChangeEvent<HTMLInputElement>) {
		setContent(event.target.value)
	}

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.title}>Generate QR Code</h1>
				<fieldset>
					<label htmlFor="content"></label>
					<input
						id="content"
						name="content"
						className={styles.input}
						type="text"
						placeholder="Enter content..."
						value={content}
						onChange={onChange}
					/>
				</fieldset>
				<button type="submit" className={styles.btn}>
					Generate
				</button>
			</form>
			{url ? (
				<div className={styles.img_container}>
					<a href={url} download="QR_Code" className={styles.btn}>
						Download QR Code
					</a>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img alt="" src={url} className={styles.canvas} id="canvas" />
					<button className={styles.btn} onClick={() => setUrl("")}>
						Reset
					</button>
				</div>
			) : null}
		</div>
	)
}
