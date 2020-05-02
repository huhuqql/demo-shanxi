import React from "react";
import * as Style from "./style";
import Zmage from "react-zmage";

import PicOne from "./pic1.jpg";
import PicTwo from "./pic2.jpg";

const config = {
  className: "feedback-image",
};

export default class SafeProductionDetail extends React.Component<any, any> {
  render() {
    return (
      <Style.Container>
        <Style.Title>一月份全省生产安全事故情况</Style.Title>
        <Style.TextArea>
          <p className="bold">总体情况</p>
          <p className="indent">
            1月份，全省共发生各类生产安全亡人事故12起，死亡12人，同比事故起数减少36起、下降75%，死亡人数减少45人、下降78.95%。1月份未发生较大及以上生产安全事故。
          </p>
        </Style.TextArea>
        <Style.GraphTitle>1月份重点行业生产安全亡人事故情况表</Style.GraphTitle>
        <Style.GraphImage>
          <Zmage
            {...config}
            src={PicOne}
            controller={{
              close: true,
              zoom: false,
              download: true,
            }}
          />
        </Style.GraphImage>
        <Style.GraphTitle>1月份各市生产安全亡人事故情况表</Style.GraphTitle>
        <Style.GraphImage>
          <Zmage {...config} src={PicTwo} />
        </Style.GraphImage>
      </Style.Container>
    );
  }
}
