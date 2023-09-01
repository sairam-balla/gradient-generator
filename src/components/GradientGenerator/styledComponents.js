// Style your elements here
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-image: linear-gradient(
    to ${props => props.bgDirection},
    ${props => props.colorOne},
    ${props => props.colorTwo}
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
`

export const SubHeading = styled.p`
  color: #ffffff;
  font-weight: 600;
  text-align: center;
  font-size: 18px;
`

export const GenerateButton = styled.button`
  width: 105px;
  height: 35px;
  color: #1e293b;
  border: none;
  border-radius: 5px;
  margin: 10px;
`

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
`

export const FlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`

export const FlexRowContainer = styled.div`
  display: flex;
  justify-content: center;
`
