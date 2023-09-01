// Write your code here
import {GradientButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {isActive, displayText, value, onClickDirection} = props

  const onClickButton = () => {
    onClickDirection(value)
  }

  return (
    <ListItem>
      <GradientButton isActive={isActive} type="button" onClick={onClickButton}>
        {displayText}
      </GradientButton>
    </ListItem>
  )
}

export default GradientDirectionItem
