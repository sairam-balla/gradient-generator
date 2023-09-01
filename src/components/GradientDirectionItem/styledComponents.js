// Style your elements here
import styled from 'styled-components'

export const GradientButton = styled.button`
  width: 105px;
  height: 35px;
  color: #000000;
  border: none;
  border-radius: 5px;
  opacity: ${props => (props.isActive === true ? 1 : 0.5)};
`

export const ListItem = styled.li`
  list-style-type: none;
  margin: 10px;
`
