import { Row, Col } from 'react-bootstrap';
import styles from '../styles/Contact.module.css';

export default function Contact() {
	return (
		<div className={styles.contact}>
			<h2>Contact</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<Row className={styles.boxes}>
				<Col lg={4} md={6} sm={12}>
					<a
						href='mailto:mdamapong@gmail.com'
						target='_blank'
						rel='noreferrer'
						className={styles.box}>
						<i className='bi bi-envelope'></i>
						mdamapong@gmail
					</a>
				</Col>
				<Col lg={4} md={6} sm={12}>
					<a href='' target='_blank' rel='noreferrer' className={styles.box}>
						{' '}
						<i className='bi bi-whatsapp'></i>
						Message
					</a>
				</Col>
				<Col lg={4} md={6} sm={12}>
					<a
						href='tel:+18319154372'
						target='_blank'
						rel='noreferrer'
						className={styles.box}>
						<i className='bi bi-telephone'></i>
						+1-8319154372
					</a>
				</Col>
			</Row>
		</div>
	);
}
