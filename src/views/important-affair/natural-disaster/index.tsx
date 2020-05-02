import React from "react";
import * as Style from "./style";
import { EmptyBox } from "constants/icon";

export default class NaturalDisaster extends React.Component<any, any> {
  render() {
    return (
      <Style.EmptyContainer>
        <EmptyBox />
      </Style.EmptyContainer>
    );
  }
}
