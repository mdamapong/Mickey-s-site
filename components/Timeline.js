import React from 'react';
import { Chrono } from 'react-chrono';
import styles from '../styles/Timeline.module.css';

export default function Timeline() {
	const items = [
		{
			title: 'May 2020',
			cardTitle: 'Monterey Peninsula College',
			url: 'https://www.mpc.edu/',
			cardSubtitle:
				'Graduated with Associate in Arts for Transfer Anthropology',
			cardDetailedText:
				'Critically examined and comprehended human nature and behavior, social traditions, and institutions...',
		},
		{
			title: 'August 2020',
			cardTitle: 'App Academy',
			url: 'https://www.appacademy.io/',
			cardSubtitle: 'Completed prep course',
			cardDetailedText:
				'Learned over 40 hours of curriculum centered around JavaScript.',
		},
		{
			title: 'April 2022',
			cardTitle: 'General Assembly',
			url: 'https://generalassemb.ly/locations/san-francisco',
			cardSubtitle: 'Completed Software Engineering Immersive 12 weeks',
			cardDetailedText:
				'Learned the fundamental skills to build full-stack web applications.',
		},
		{
			title: 'May 2022',
			cardTitle: 'Tesla',
			url: 'https://www.tesla.com/',
			cardSubtitle: 'Accepted Job offer as a Production Associate at Tesla',
			cardDetailedText:
				'Participate in the assembly and production of Tesla vehicles, Perform a wide array of essential function across a number of production lines, Work in a team-oriented manufacturing environment',
		},
	];
	return (
		<>
			<h2>Timeline</h2>
			<img src='/assets/svg/line.svg' className='line' />
			<div className={styles.timeline}>
				<Chrono items={items} mode='VERTICAL' />
			</div>
		</>
	);
}
