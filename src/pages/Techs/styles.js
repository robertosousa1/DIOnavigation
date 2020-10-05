import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #e9e9e9;
  border-radius: 4px;
  padding: 0 15px;
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #f04227;
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${(props) => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  flex: 1,
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Tech = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
  border-radius: 4px;
`;

export const Name = styled.Text`
  flex: 1;
  height: 40px;
  background: #e9e9e9;
  border-radius: 4px;
  padding: 12px 15px;
  align-items: center;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

export const ProfileButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background};
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: 1;
`;
