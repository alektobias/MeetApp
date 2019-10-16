import React, { useEffect, useState } from 'react';
import { MdNavigateNext, MdAddCircleOutline } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import { useDispatch } from 'react-redux';
import { Container, Meetup } from './styles';
import history from '~/services/history';
import api from '~/services/api';
import { meetupSelect } from '~/store/modules/meetup/actions';

export default function Dashboard() {
	const dispatch = useDispatch();
	const [meetups, setMeetups] = useState([]);
	function handleSelect(data) {
		dispatch(meetupSelect(data));
		history.push('/details');
	}
	useEffect(() => {
		async function getMeetups() {
			const response = await api.get('/organizing');
			setMeetups(
				response.data.map(({ date, ...rest }) => ({
					date: format(parseISO(date), "dd 'de' MMMM, à's' HH'h'", {
						locale: pt,
					}),
					...rest,
				}))
			);
		}
		getMeetups();
	}, []);
	return (
		<Container>
			<div>
				<h2>Meus Meetups</h2>
				<button type="button" onClick={() => history.push('/meetup/new')}>
					<MdAddCircleOutline size={20} color="#fff" />
					Novo meetup
				</button>
			</div>
			{meetups.map(meetup => (
				<Meetup key={meetup.title}>
					<strong>{meetup.title}</strong>
					<section>
						<span>{meetup.date}</span>
						<MdNavigateNext
							size={24}
							color="#fff"
							onClick={() => handleSelect(meetup)}
						/>
					</section>
				</Meetup>
			))}
		</Container>
	);
}
