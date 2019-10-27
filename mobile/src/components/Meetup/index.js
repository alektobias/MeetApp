import React, { useMemo } from 'react';
import { Alert } from 'react-native';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Title,
  SubContent,
  ContentText,
  SubscriptionButton,
  CancelSubscription,
} from './styles';
import api from '~/services/api';

export default function Meetup({ data, subscription }) {
  const { id, title, date, location, User, Meetup, File } = data;

  const formattedDate = useMemo(
    () =>
      format(
        subscription ? parseISO(Meetup.date) : parseISO(date),
        "dd 'de' MMMM, 'às' HH'h",
        {
          locale: pt,
        }
      ),
    [data]
  );

  async function handleSubscription() {
    try {
      await api.post(`meetups/${id}/subscriptions`);
      Alert.alert(
        'Inscrição relizada',
        'Sua inscrição foi realizada com sucesso!'
      );
    } catch (err) {
      Alert.alert(
        'Algo deu errado!',
        'Lembre-se, não é possivel se increver em seus própios meetups ou em meetups que estão acontecendo na mesma hora.'
      );
    }
  }
  async function handleCancel() {
    try {
      await api.delete(`meetups/${id}/subscriptions`);
      Alert.alert(
        'Inscrição deletada',
        'Sua inscrição foi cancelada com sucesso!'
      );
    } catch (err) {
      Alert.alert(
        'Algo deu errado!',
        'Verifique se o meetup não já passou, se tudo estiver certo, tente novamente mais tarde!'
      );
    }
  }

  return (
    <Container>
      <Image source={{ uri: File && File.url }} style={{ height: 150 }} />
      <Content>
        <Title>{Meetup ? Meetup.title : title}</Title>
        <SubContent>
          <Icon name="event" size={14} color="#999" />
          <ContentText>{formattedDate}</ContentText>
        </SubContent>
        <SubContent>
          <Icon name="location-on" size={14} color="#999" />
          <ContentText>{Meetup ? Meetup.location : location}</ContentText>
        </SubContent>
        <SubContent>
          <Icon name="person" size={14} color="#999" />
          <ContentText>Organizador: {Meetup ? '' : User.name}</ContentText>
        </SubContent>
        {subscription ? (
          <CancelSubscription onPress={handleCancel}>
            Cancelar inscrição
          </CancelSubscription>
        ) : (
          <SubscriptionButton onPress={handleSubscription}>
            Realizar inscrição
          </SubscriptionButton>
        )}
      </Content>
    </Container>
  );
}
