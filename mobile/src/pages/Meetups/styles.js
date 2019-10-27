import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;


export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 20px;
`;
