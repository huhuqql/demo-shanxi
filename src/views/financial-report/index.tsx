import React from "react";
import * as Style from "./style";

export default class FinancialReport extends React.Component<any, any> {
  jumpToDetailPage = () => {
    (window as any).dd.postMessage({
      action: "jumpPage",
      params: {
        page: "financial-report-detail",
      },
    });
  };

  render() {
    return (
      <Style.Container>
        <Style.PanelContainer>
          <Style.PanelTitleIcon />
          <Style.PanelTitle>{data.title}</Style.PanelTitle>
          {data.list.map((d) => {
            return (
              <Style.BlockContainer onClick={this.jumpToDetailPage}>
                <Style.BlockType>{d.type}</Style.BlockType>
                <Style.BlockTitle>{d.title}</Style.BlockTitle>
                <Style.BlockDescriptionContainer>
                  <Style.BlockDescription>
                    数据来源：{d.source}
                  </Style.BlockDescription>
                  <Style.BlockDescription>{d.date}</Style.BlockDescription>
                </Style.BlockDescriptionContainer>
              </Style.BlockContainer>
            );
          })}
          <Style.SeeAllContainer>
            <Style.SeeAllButton>查看全部 ></Style.SeeAllButton>
          </Style.SeeAllContainer>
        </Style.PanelContainer>

        <Style.PanelContainer>
          <Style.PanelTitleIcon />
          <Style.PanelTitle>{data_1.title}</Style.PanelTitle>
          {data_1.list.map((d) => {
            return (
              <Style.BlockContainer onClick={this.jumpToDetailPage}>
                <Style.BlockType>{d.type}</Style.BlockType>
                <Style.BlockTitle>{d.title}</Style.BlockTitle>
                <Style.BlockDescriptionContainer>
                  <Style.BlockDescription>
                    数据来源：{d.source}
                  </Style.BlockDescription>
                  <Style.BlockDescription>{d.date}</Style.BlockDescription>
                </Style.BlockDescriptionContainer>
              </Style.BlockContainer>
            );
          })}
          <Style.SeeAllContainer>
            <Style.SeeAllButton>查看全部 ></Style.SeeAllButton>
          </Style.SeeAllContainer>
        </Style.PanelContainer>
      </Style.Container>
    );
  }
}

const data = {
  title: "经济运行检测报告",
  list: [
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-4-29",
      type: "经济",
    },
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-3-29",
      type: "经济",
    },
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-2-29",
      type: "经济",
    },
  ],
};

const data_1 = {
  title: "地区生产总值",
  list: [
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-4-29",
      type: "经济",
    },
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-3-29",
      type: "经济",
    },
    {
      title: "2020第一季度经济运行检测报告",
      source: "省应急管理厅",
      date: "2020-2-29",
      type: "经济",
    },
  ],
};
