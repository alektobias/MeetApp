import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const List = styled.FlatList.attrs({
  showsScrollVerticalIndicator: false,
})`
  padding: 0 20px;
`;
