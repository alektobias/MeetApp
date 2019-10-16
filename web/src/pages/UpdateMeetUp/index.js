import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from './styles';
import ImageInput from './ImageInput';
import Spin from '~/components/Spin';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

export default function MeetUp() {
	const dispatch = useDispatch();

	const { selected, loading } = useSelector(state => state.meetup);
	const [meetup, setMeetup] = useState(selected);

	function handleSubmit(data) {
		dispatch(updateMeetupRequest({ ...data, id: selected.id }));
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<ImageInput name="file_id" url={meetup.File && meetup.File.url} />
				<Input
					placeholder="Título do Meetup"
					type="text"
					name="title"
					value={meetup.title}
					onChange={e => setMeetup({ ...meetup, title: e.target.value })}
				/>
				<Input
					multiline
					placeholder="Descrição completa"
					type="text"
					name="description"
					value={meetup.description}
					onChange={e => setMeetup({ ...meetup, description: e.target.value })}
				/>
				<Input
					placeholder="Data do meetup"
					type="text"
					name="date"
					value={meetup.date}
					onChange={e => setMeetup({ ...meetup, date: e.target.value })}
				/>
				<Input
					placeholder="Localização"
					type="text"
					name="location"
					value={meetup.location}
					onChange={e => setMeetup({ ...meetup, location: e.target.value })}
				/>
				<button type="submit">
					{loading ? (
						<Spin />
					) : (
						<>
							<MdAddCircleOutline size={20} />
							Salvar meetup
						</>
					)}
				</button>
			</Form>
		</Container>
	);
}
