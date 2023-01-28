import styled from 'styled-components';

export const TableLine = styled.tr``;
export const TableColumn = styled.td`
  padding: 10px 0;
`;
export const Category = styled.div<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 7px;
  display: inline-block;
  padding: 5px 10px;
  color: #fff;
`;
export const Value = styled.div<{ color: string }>`
 color: ${({ color }) => color};

`;
