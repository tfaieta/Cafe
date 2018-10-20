import styled from '../../../node_modules/styled-components'

export const ReaderContainer = styled.div`
  font-size: 16px;
  position: fixed;
  top: ${props => (props.fullscreen ? 0 : 135)}px;
  left: ${props => (props.fullscreen ? 7 : 100)}%;
  right: ${props => (props.fullscreen ? 0 : 1)}rem;
  bottom: ${props => (props.fullscreen ? 0 : 1)}rem;
  transition: all 0.6s ease;
  ${props => !props.fullscreen && '0 0 5px rgba(0,0,0,.3);'};
`