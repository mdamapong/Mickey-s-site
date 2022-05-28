import styles from '../styles/About.module.css';

export default function About() {
	return (
		<div className={styles.about}>
			<h2>About</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<p>
				Hello! I&lsquo;m Mickey D, a Software Engineer. I am leaarning and
				growing into software developement field.
				<a href='https://www.tesla.com/' target='_blank' rel='noreferrer'>
					Currently working at Tesla - Fortune 100 company
				</a>
				.
			</p>
			<p>
				As a full-stack developer I can work with Next.js, React.js, React
				Native, Express.js and MongoDB.
			</p>
		</div>
	);
}
