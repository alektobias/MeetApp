import React from 'react';
import { MdNavigateNext, MdAddCircleOutline } from 'react-icons/md';
import { Container, Meetup } from './styles';
import history from '~/services/history';

export default function Dashboard() {
	return (
		<Container>
			<div>
				<h2>Meus Meetups</h2>
				<button type="button" onClick={() => history.push('/meetup/new')}>
					<MdAddCircleOutline size={20} color="#fff" />
					Novo meetup
				</button>
			</div>
			<Meetup>
				<strong>Meetup de React Native</strong>
				<section>
					<span>24 de junho, às 20h</span>
					<MdNavigateNext size={24} color="#fff" />
				</section>
			</Meetup>
			<Meetup>
				<strong>Meetup de React Native</strong>
				<section>
					<span>24 de junho, às 20h</span>
					<MdNavigateNext size={24} color="#fff" />
				</section>
			</Meetup>
			<Meetup>
				<strong>Meetup de React Native</strong>
				<section>
					<span>24 de junho, às 20h</span>
					<MdNavigateNext size={24} color="#fff" />
				</section>
			</Meetup>
			<Meetup>
				<strong>Meetup de React Native</strong>
				<section>
					<span>24 de junho, às 20h</span>
					<MdNavigateNext size={24} color="#fff" />
				</section>
			</Meetup>
		</Container>
	);
}
