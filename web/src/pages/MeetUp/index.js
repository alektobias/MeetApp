import React from 'react';
import { Form, input } from '@rocketseat/unform';
import { Container } from './styles';
import ImageInput from './ImageInput';

export default function MeetUp() {
	return (
		<Container>
			<form>
				<ImageInput />
				<input placeholder="Título do Meetup" type="text" />
				<textarea
					placeholder="Descrição completa"
					type="text"
					id="description"
				/>
				<input placeholder="Data do meetup" type="date" />
				<input placeholder="Localização" type="text" />
				<button type="submit">Salvar meetup</button>
			</form>
		</Container>
	);
}
