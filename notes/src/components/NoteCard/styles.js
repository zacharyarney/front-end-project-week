import styled from 'styled-components';
import { StyledP } from '../../mixins';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 217px;
  height: 222px;
  background: rgb(255, 255, 255);
  padding: 13px 20px;
  border: 1px solid rgb(152, 152, 152);
`;

export const StyledH5 = styled.h5`
  color: rgb(0, 0, 0);
  font-size: 1.8rem;
  text-align: left;
  padding-bottom: 9px;
  border-bottom: 1px solid rgb(152, 152, 152);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardP = styled(StyledP)`
  height: 166px;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  ::before {
    content: '';
    width: 100%;
    height: 100%;    
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(transparent 100px, white);
  }
`;
