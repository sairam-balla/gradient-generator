import {Component} from 'react'
import {
  Heading,
  SubHeading,
  GenerateButton,
  BackgroundContainer,
  FlexColumnContainer,
  FlexRowContainer,
  UnorderedList,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    bgDirectionInput: gradientDirectionsList[0].value,
    colorOneInput: '#8ae323',
    colorTwoInput: '#014f7b',
    bgDirection: gradientDirectionsList[0].value,
    colorOne: '#8ae323',
    colorTwo: '#014f7b',
  }

  onClickDirection = value => {
    this.setState({bgDirectionInput: value})
  }

  onChangeColorOne = event => {
    this.setState({colorOneInput: event.target.value})
  }

  onChangeColorTwo = event => {
    this.setState({colorTwoInput: event.target.value})
  }

  onGenerate = () => {
    const {bgDirectionInput, colorOneInput, colorTwoInput} = this.state

    this.setState({
      bgDirection: bgDirectionInput,
      colorOne: colorOneInput,
      colorTwo: colorTwoInput,
    })
  }

  render() {
    const {
      bgDirection,
      colorOne,
      colorTwo,
      bgDirectionInput,
      colorOneInput,
      colorTwoInput,
    } = this.state

    console.log(this.state)
    return (
      <BackgroundContainer
        data-testid="gradientGenerator"
        colorOne={colorOne}
        colorTwo={colorTwo}
        bgDirection={bgDirection}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <SubHeading>Choose Direction</SubHeading>
        <UnorderedList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              {...eachItem}
              onClickDirection={this.onClickDirection}
              isActive={eachItem.value === bgDirectionInput}
            />
          ))}
        </UnorderedList>
        <SubHeading>Pick the Colors</SubHeading>
        <FlexColumnContainer>
          <FlexRowContainer>
            <FlexColumnContainer>
              <SubHeading>{colorOneInput}</SubHeading>
              <input
                value={colorOneInput}
                type="color"
                onChange={this.onChangeColorOne}
              />
            </FlexColumnContainer>
            <FlexColumnContainer>
              <SubHeading>{colorTwoInput}</SubHeading>
              <input
                value={colorTwoInput}
                type="color"
                onChange={this.onChangeColorTwo}
              />
            </FlexColumnContainer>
          </FlexRowContainer>

          <GenerateButton onClick={this.onGenerate} type="button">
            Generate
          </GenerateButton>
        </FlexColumnContainer>
      </BackgroundContainer>
    )
  }
}

export default GradientGenerator
