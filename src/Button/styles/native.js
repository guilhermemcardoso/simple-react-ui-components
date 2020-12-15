import styled from 'styled-components/native';

export const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${({backgroundColor, type, disabled}) => {
    return backgroundColor;
  }};
  justify-content: center;
  align-items: center;
  border-radius: ${({size}) => size}px;
  border-color: ${({borderColor, backgroundColor, type}) => {
    return borderColor;
  }};
  border-width: 1px;
  padding-horizontal: 20px;
  padding-vertical: 8px;
  elevation: ${({elevated}) => elevated ? 3 : 0};
`;

export const Badge = styled.View`
  position: absolute;
  top: 10px;
  right: 8px;
  width: 12px;
  height: 12px;
  background-color: ${({badgeColor}) => badgeColor};
  border-radius: 6px;
  elevation: 1;
`;