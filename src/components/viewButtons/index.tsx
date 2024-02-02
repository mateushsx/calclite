import React from 'react';
import {CustomButton} from '../customButton';
import {
  ButtonRight,
  ButtonSection,
  ButtonsContainer,
  ButtonsLeft,
} from './styles';

export function ViewButtons() {
  return (
    <ButtonsContainer>
      <ButtonsLeft>
        <ButtonSection>
          <CustomButton number="Ac" color="#616161" />
          <CustomButton number="x" color="#616161" />
          <CustomButton number="/" color="#005DB2" />
        </ButtonSection>

        <ButtonSection>
          <CustomButton number="7" />
          <CustomButton number="8" />
          <CustomButton number="9" />
        </ButtonSection>

        <ButtonSection>
          <CustomButton number="4" />
          <CustomButton number="5" />
          <CustomButton number="6" />
        </ButtonSection>

        <ButtonSection>
          <CustomButton number="1" />
          <CustomButton number="2" />
          <CustomButton number="3" />
        </ButtonSection>

        <ButtonSection>
          <CustomButton number="0" width="160px" />
          <CustomButton number="." />
        </ButtonSection>
      </ButtonsLeft>

      <ButtonRight>
        <CustomButton number="*" color="#005DB2" />
        <CustomButton number="-" color="#005DB2" />
        <CustomButton number="+" color="#005DB2" height="110px" />
        <CustomButton number="=" color="#1991FF" height="120px" />
      </ButtonRight>
    </ButtonsContainer>
  );
}
