import styles from '../styles/Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className='social-accounts'>
					<ul className='list-inline'>
						<li className='list-inline-item'>
							<a
								href='https://www.linkedin.com/in/mickey-damapong/'
								target='_blank'
								rel='noreferrer'
								className='btn-sm btn-default btn-lg'>
								<i class='bi bi-linkedin'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a
								href='https://twitter.com/mdamapong'
								target='_blank'
								rel='noreferrer'
								className='btn-sm btn-default btn-lg'>
								<i className='bi bi-twitter'></i>
							</a>
						</li>
						<li className='list-inline-item'>
							<a
								href='https://github.com/mdamapong'
								target='_blank'
								rel='noreferrer'
								className='btn-sm btn-default btn-lg'>
								<i className='bi bi-github'></i>
							</a>
						</li>
					</ul>
				</div>
				<div className='copyright'>
					<p className='top'>
						Learn, create, fix, and improve | Powered by&nbsp;
						<a href='https://vercel.com/?utm_source=google&utm_medium=cpc&utm_campaign=17166484769&utm_campaign_id=17166484769&utm_term=vercel&utm_content=134252114537_596484707957&gclid=CjwKCAjw7cGUBhA9EiwArBAvouk2BDAGHcz6mAN9B8L7OPHRE1Ovitxczuw2k9JCF9b1maebTDWW7RoCX4MQAvD_BwE'>
							Vercel
						</a>
					</p>
					<p className='bottom'>Last update 2022</p>
				</div>
			</div>
		</footer>
	);
}
