import { Card, Col, Row } from 'react-bootstrap';
import styles from '../styles/Works.module.css';

export default function Works() {
	return (
		<div className={styles.works}>
			<h2>Works</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<Row>
				<Col md={6}>
					<Card className={styles.card}>
						<a
							href='https://dota-2-api.vercel.app/1'
							target='_blank'
							rel='noreferrer'>
							<Card.Img
								variant='top'
								src='/assets/images/works/techomoro.png'
							/>
							<Card.Body>
								<Card.Title className={styles.title}>Dota 2 API</Card.Title>
								<p className={styles.category}>Search engine</p>
								<Card.Text>
									An interactive application to track and search static site
									development build with client-rendered applications that
									leverage API for data.
								</Card.Text>
								<Card.Text>
									Technology include HTML, CSS, JS, Dom, API
								</Card.Text>
							</Card.Body>
						</a>
					</Card>
				</Col>
				<Col md={6}>
					<Card className={styles.card}>
						<a
							href='https://play.google.com/store/apps/details?id=com.onnich.parambath'
							target='_blank'
							rel='noreferrer'>
							<Card.Img
								variant='top'
								src='/assets/images/works/parambathapp.png'
							/>
							<Card.Body>
								<Card.Title className={styles.title}>Collectus</Card.Title>
								<p className={styles.category}>Data Collection</p>
								<Card.Text>
									A React app that allows users to add a collection list that
									will map out collection items. This app was created using a
									non-relational database on Mongodb and react.
								</Card.Text>
								<Card.Text>
									Technology include HTML, CSS, JS, Axios, Mongodb
								</Card.Text>
							</Card.Body>
						</a>
					</Card>
				</Col>
				<Col md={6}>
					<Card className={styles.card}>
						<a
							href='https://new-project-alpha.vercel.app/'
							target='_blank'
							rel='noreferrer'>
							<Card.Img variant='top' src='/assets/images/works/kuty.png' />
							<Card.Body>
								<Card.Title className={styles.title}>News </Card.Title>
								<p className={styles.category}>URL Shortener</p>
								<Card.Text>
									A simple news API Page that uses Next.js library that builds
									with HTML, CSS, JS and builds client-rendered applications
									that leverage API for data from NewYork Times.
								</Card.Text>
								<Card.Text>Tecghnology HTML, CSS, JS, Dom, API</Card.Text>
							</Card.Body>
						</a>
					</Card>
				</Col>
			</Row>
		</div>
	);
}
