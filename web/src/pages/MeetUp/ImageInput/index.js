import React, { useState } from 'react';

import { MdCameraAlt } from 'react-icons/md';
import { Container } from './styles';

export default function ImageInput() {
	const [preview, setPreview] = useState();

	function handleChange(e) {
		console.log(e);
	}

	return (
		<Container>
			<label htmlFor="image">
				<img src="" />
				<MdCameraAlt size={54} />
				Selecionar imagem
				<input
					type="file"
					accept="image/*"
					id="image"
					onChange={handleChange}
				/>
			</label>
		</Container>
	);
}
