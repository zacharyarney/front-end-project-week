import styled from 'styled-components';
import { ViewContainer, StyledH3, StyledInput } from '../../mixins';
import { StyledLink } from '../../mixins';

export const StyledView = styled(ViewContainer)`
padding: 0;
`;

export const SearchBar = styled.div`
  position: sticky;
  top: 0;
  z-index: 5;
  width: 100%;
  background: rgb(243, 243, 243);
  /* background: linear-gradient(rgb(243, 243, 243) 52px, transparent); */
  /* border-bottom: 1px solid rgb(152, 152, 152); */
  /* margin-bottom: 8px; */
`;

export const SearchInput = styled(StyledInput)`
  width: 50%;
  margin: 8px 0 8px;
`;

export const ListTitle = styled(StyledH3)`
  margin-left: 30px;
`;

export const StyledListDiv = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
width: 100%;
padding: 33px 1px;
margin-left: 30px;
`;

export const StyledNoteLink = styled(StyledLink)`
  margin-right: 17.5px;
  margin-bottom: 27px;
`;