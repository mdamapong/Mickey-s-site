import styles from '../styles/Education.module.css';

export default function Education() {
	return (
		<div className={styles.education}>
			<h2>Education</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<div className={styles.lineContainer}>
				<div className={styles.line}>
					<i className='bi bi-mortarboard'></i>
					<div>
						<div className={styles.college}>
							<a
								href='https://generalassemb.ly/'
								target='_blank'
								rel='noreferrer'>
								General Assembly San Francisco
							</a>
						</div>
						<div className={styles.branch}>
							Software Engineering Immersive (Feb 2022- Apr 2022)
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
