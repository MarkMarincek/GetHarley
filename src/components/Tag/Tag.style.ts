import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

interface TagContainerProps {
  $large?: boolean;
}
const TagContainer = styled(Link)<TagContainerProps>`
  text-decoration: none;
  color: white;
  background-color: coral;
  padding: ${(p) => (p.$large ? '8px' : '4px')};
  border-radius: 4px;
  font-size: ${(p) => (p.$large ? '24px' : 'inherit')};
`;

export { TagContainer };
