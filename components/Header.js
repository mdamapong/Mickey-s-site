import styles from '../styles/Header.module.css';

export default function Header() {
	return (
		<main className={styles.header}>
			<img src='/assets/images/mickey.png' className={styles.dp} />

			<h1 className={styles.name}>Mickey Damapong</h1>

			<p className={styles.about}>
				Software Engineer
				<br />
				Production Associate at{' '}
				<a href='https://www.tesla.com/' target='_blank' rel='noreferrer'>
					Tesla
				</a>
			</p>
		</main>
	);
}
