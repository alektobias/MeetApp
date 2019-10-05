import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile, Logout } from './styles';
import Logo from '~/assets/images/logo.svg';

export default function Header() {
	return (
		<Container>
			<Content>
				<nav>
					<Link to="/dashboard">
						<img src={Logo} alt="Logo MeetApp" />
					</Link>
				</nav>
				<aside>
					<Profile>
						<span>Alek Tobias</span>
						<Link to="/profile">Meu Perfil</Link>
					</Profile>
					<Logout>Sair</Logout>
				</aside>
			</Content>
		</Container>
	);
}
