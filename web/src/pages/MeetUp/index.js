import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container } from './styles';
import ImageInput from './ImageInput';
import api from '~/services/api';
import history from '~/services/history';

export default function MeetUp() {
	async function handleSubmit({ file_id, title, description, date, location }) {
		try {
			await api.post('/meetups', {
				file_id,
				title,
				description,
				date,
				location,
			});
			toast.success('Meetup criado com sucesso!');

			setTimeout(() => {
				history.push('/dashboard');
			}, 2000);
		} catch (err) {
			toast.error('Algo deu errado tente novamente mais tarde!');
		}
	}

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<ImageInput name="file_id" />
				<Input placeholder="Título do Meetup" type="text" name="title" />
				<Input
					multiline
					placeholder="Descrição completa"
					type="text"
					name="description"
				/>
				<Input placeholder="Data do meetup" type="text" name="date" />
				<Input placeholder="Localização" type="text" name="location" />
				<button type="submit">
					<MdAddCircleOutline size={20} />
					Salvar meetup
				</button>
			</Form>
		</Container>
	);
}
