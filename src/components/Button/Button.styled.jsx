import styled from '@emotion/styled';
 
export const LoadMoreBtn = styled.button`
  display: block;
  margin: 24px auto;
  padding: 8px 24px;
  border: none;
  border-radius: 18px;
  background-color: #fafafa;
  color: #444;
  line-height: 1.5;
  font-weight: 600;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:is(:hover, :focus) {
    background-color: #444;
    color: #fff;
  }
`;
