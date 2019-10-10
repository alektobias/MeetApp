import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import ImageInput from './ImageInput';

export default function MeetUp() {
	function handleSubmit(data) {
		console.log(data);
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
