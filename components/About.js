import styles from '../styles/About.module.css';

export default function About() {
	return (
		<div className={styles.about}>
			<h2>About</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<p>
				Hello! I&lsquo;m Mickey D, a Software Engineer. As a full-stack
				developer I can work with Next.js, React.js, React Native, Express.js
				and MongoDB. Currently working at Tesla - Fortune 100 company.
			</p>
			<p></p>
		</div>
	);
}
