import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdCameraAlt } from 'react-icons/md';
import { Container } from './styles';
import api from '~/services/api';

export default function ImageInput() {
	const { defaultValue, registerField } = useField('file_id');

	const Ref = useRef();

	const [preview, setPreview] = useState(defaultValue && defaultValue.file_id);
	const [file, setFile] = useState(defaultValue && defaultValue.file_id);

	async function handleChange(e) {
		const data = new FormData();
		data.append('file', e.target.files[0]);
		const response = await api.post('file', data);

		const { id, url } = response.data;
		setFile(id);
		setPreview(url);
	}
	useEffect(() => {
		if (Ref.current) {
			registerField({
				name: 'file_id',
				ref: Ref.current,
				path: 'dataset.file',
			});
		}
	}, [Ref, registerField]);
	return (
		<Container>
			<label htmlFor="image">
				<img src={preview} alt="" />
				<MdCameraAlt size={54} />
				Selecionar imagem
				<input
					type="file"
					accept="image/*"
					id="image"
					data-file={file}
					onChange={handleChange}
					ref={Ref}
				/>
			</label>
		</Container>
	);
}
