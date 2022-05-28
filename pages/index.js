import Head from 'next/head';
import { Card } from 'react-bootstrap';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Works from '../components/Works';
import Contact from '../components/Contact';
import About from '../components/About';
import Timeline from '../components/Timeline';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Mickey D</title>
				<meta
					name='description'
					content='
         Mickey D, a Software Engineer.'
				/>
				<meta name='theme-color' content='#ffffff' />

				<meta name='og:type' content='website' />
				<meta
					name='og:title'
					content='
          Mickey D - Software Engineer, • Next.js • React.js • Express.js • MongoDB'
				/>
				<meta name='keywords' content='Mickey, Mickey D,software engineer' />
				<meta name='og:url' content='https://syam.me' />
				<meta
					name='og:description'
					content='
          Mickey D, a Software Engineer.'
				/>
				<meta name='og:image' content='/assets/images/syamlal-og.jpg' />

				<link rel='icon' href='/favicon.ico' />

				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Card className={styles.card}>
				<Card.Body>
					<Header />
					<About />
					<Experience />
					<Education />
					<Works />
					<Timeline />
					<Contact />
					<Footer />
				</Card.Body>
			</Card>
		</div>
	);
}
