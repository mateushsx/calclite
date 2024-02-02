import styled from 'styled-components/native';

interface TouchableButtonProps {
  color?: string;
  height?: string;
  width?: string;
}

export const TouchableButton = styled.TouchableOpacity<TouchableButtonProps>`
  height: ${props => props.height ?? '70px'};
  width: ${props => props.width ?? '70px'};
  background-color: ${props => props.color ?? '#303136'};
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const NumberText = styled.Text`
  font-size: 30px;
`;
