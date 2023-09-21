import styled from 'styled-components/macro'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(${props => props.gradientValue});
  height: 100vh;
  text-align: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-height: 550px;

  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #fff;
  font: bold 24px Roboto;
  text-align: center;
  padding-top: 50px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionDescription = styled.p`
  color: #ededed;
  font: 500 22px/1.5 Roboto;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorsPickerDescription = styled.p`
  color: #ededed;
  font: 500 normal 22px/1.5 Roboto;
`
export const ColorsPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 150px;
`
export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #fff;
  font: 500 normal 18px Roboto;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  color: #1e293b;
  font: 600 normal 14px Roboto;
  background-color: #00c9b7;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  padding: 12px 24px;
  margin: 0px 0px 225px;
  outline: none;
  cursor: pointer;
`
