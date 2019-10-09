import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content, Profile, Logout } from './styles';
import Logo from '~/assets/images/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

export default function Header() {
	const dispatch = useDispatch();
	const { name } = useSelector(state => state.user.profile);

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
						<span>{name}</span>
						<Link to="/profile">Meu Perfil</Link>
					</Profile>
					<Logout onClick={() => dispatch(signOut())}>Sair</Logout>
				</aside>
			</Content>
		</Container>
	);
}
