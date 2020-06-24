import React from 'react';
import {
  ButtonAction,
	ButtonContainer,
	ButtonText
} from './style';

export default function buttonPower({ onPress, text  }){
	return(
		<ButtonAction onPress={onPress}>
      <ButtonContainer>
		    <ButtonText>{text}</ButtonText>
		  </ButtonContainer>
		</ButtonAction>
	)
}
