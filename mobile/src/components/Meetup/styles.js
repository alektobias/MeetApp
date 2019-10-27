import styled from 'styled-components/native';
import Button from '../Button';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;
  overflow: hidden;
`;

export const Content = styled.View`
  padding: 20px;
`;
export const SubContent = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ContentText = styled.Text`
  color: #999;
  font-size: 13px;
  margin-left: 10px;
`;
export const SubscriptionButton = styled(Button)`
  margin-top: 10px;
`;
export const CancelSubscription = styled(Button)`
  background: #d44059;
  margin-top: 10px;
`;
