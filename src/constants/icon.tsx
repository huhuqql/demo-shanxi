import styled from "styled-components";
import emptyIcon from "../assets/png/empty.png";

export const EmptyBox = styled.img.attrs({
  src: emptyIcon,
})`
  height: 70px;
  pointer-events: none;
`;
