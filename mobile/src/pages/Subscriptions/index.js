import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Header from '~/components/Header';

import { List } from './styles';
import Meetup from '~/components/Meetup';
import api from '~/services/api';

export default function Subscriptions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadSubscriptions() {
      const response = await api.get('subscriptions');
      setData(response.data);
    }
    loadSubscriptions();
  }, []);

  return (
    <Background>
      <Header />
      <List
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <Meetup data={item} subscription />}
      />
    </Background>
  );
}
Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
