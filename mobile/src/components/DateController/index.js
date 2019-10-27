import React, { useMemo } from 'react';
import { format, addDays, subDays, isToday } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, DateText } from './styles';

export default function DateController({ date, setDate }) {
  const formattedDate = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date]
  );

  function addDay() {
    setDate(addDays(date, 1));
  }
  function subDay() {
    if (!isToday(date)) {
      setDate(subDays(date, 1));
    }
  }
  return (
    <Container>
      <TouchableOpacity onPress={subDay}>
        <Icon name="chevron-left" size={30} color="#fff" />
      </TouchableOpacity>
      <DateText>{formattedDate}</DateText>
      <TouchableOpacity onPress={addDay}>
        <Icon name="chevron-right" size={30} color="#fff" />
      </TouchableOpacity>
    </Container>
  );
}
