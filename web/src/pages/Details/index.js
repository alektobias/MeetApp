import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDeleteForever, MdEdit, MdPlace, MdEvent } from 'react-icons/md';
import { Container, Title, Content, Image } from './styles';
import { deleteMeetup } from '~/store/modules/meetup/actions';
import history from '~/services/history';

export default function Details() {
	const dispatch = useDispatch();
	const selected = useSelector(state => state.meetup.selected);
	function handleDelete() {
		dispatch(deleteMeetup(selected.id));
	}

	return (
		<Container>
			<Title>
				<h3>Meetup de React Native</h3>
				<div>
					<button
						type="button"
						id="edit"
						onClick={() => history.push('/meetup/update')}
					>
						<MdEdit size={20} />
						Editar
					</button>
					<button type="button" onClick={handleDelete}>
						<MdDeleteForever size={20} />
						Cancelar
					</button>
				</div>
			</Title>
			<Content>
				<Image url={selected.File.url} />

				<p>{selected.description}</p>
				<div>
					<span>
						<MdEvent size={20} />
						{selected.date}
					</span>
					<span>
						<MdPlace size={20} />
						{selected.location}
					</span>
				</div>
			</Content>
		</Container>
	);
}
