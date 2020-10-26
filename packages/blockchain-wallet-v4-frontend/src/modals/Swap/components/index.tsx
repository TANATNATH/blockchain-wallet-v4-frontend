import { Form } from 'redux-form'
import { Text } from 'blockchain-info-components'
import styled from 'styled-components'

export const TopText = styled(Text)<{
  marginBottom?: boolean
  spaceBetween: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.spaceBetween ? 'space-between' : 'initial'};
  margin-bottom: ${props => (props.marginBottom ? '16px' : '0px')};
`
export const StyledForm = styled(Form)<{ marginTop?: boolean }>`
  margin-top: ${props => (props.marginTop ? '36px' : '0px')};
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${props => `1px solid ${props.theme.grey000}`};
  padding: 16px 40px;
  cursor: pointer;
`
export const BalanceRow = styled.div`
  display: flex;
  align-items: center;
`
export const IconBackground = styled.div<{ color: string }>`
  position: absolute;
  left: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  z-index: 100;
  background: ${props => props.theme[props.color]};
`

export const TrendingIconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 24px;
`

export const FlexStartRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const CircleBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: white;
  border: 1px solid ${props => props.theme.grey300};
  border-radius: 24px;
  margin-left: 24px;
`

export const CircleSelected = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: ${props => props.theme.grey300};
  border-radius: 20px;
`
