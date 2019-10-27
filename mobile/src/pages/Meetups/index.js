import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Background from '~/components/Background';
import Header from '~/components/Header';
import DateController from '~/components/DateController';
import Meetup from '~/components/Meetup';
import { Container, List } from './styles';

export default function Meetups() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          date,
        },
      });
      setData(response.data);
    }
    loadMeetups();
  }, [date]);

  return (
    <Background>
      <Container>
        <Header />
        <DateController date={date} setDate={setDate} />
        <List
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <Meetup data={item} />}
        />
      </Container>
    </Background>
  );
}

Meetups.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="list" size={20} color={tintColor} />
  ),
};
