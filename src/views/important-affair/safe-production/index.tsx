import React from "react";
import * as Style from "./style";
import { EmptyBox } from "constants/icon";

enum ReadStatus {
  UNREAD = "未读",
  READ = "已读",
}

export default class SafeProduction extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }

  jumpToDetailPage = () => {
    (window as any).dd.postMessage({
      action: "jumpPage",
      params: {
        page: "safe-production-detail",
      },
    });
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index,
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <Style.HeaderTab>
          <Style.TabButton
            active={activeTab === 0}
            onClick={() => this.handleTabChange(0)}
          >
            安全生产月报
          </Style.TabButton>
          <Style.TabButton
            active={activeTab === 1}
            onClick={() => this.handleTabChange(1)}
          >
            安全生产专报
          </Style.TabButton>
        </Style.HeaderTab>
        <Style.Container>
          {activeTab === 0 ? (
            <>
              {data.map((d) => {
                return (
                  <Style.BlockContainer onClick={this.jumpToDetailPage}>
                    <Style.BlockTitle>{d.title}</Style.BlockTitle>
                    <Style.BlockReadStatusContainer>
                      <Style.BlockReadStatus>
                        <Style.BlockReadStatusIcon />
                        {d.status}
                      </Style.BlockReadStatus>
                    </Style.BlockReadStatusContainer>
                    <Style.BlockDescriptionContainer>
                      <Style.BlockDescription>
                        {d.source}
                      </Style.BlockDescription>
                      <Style.BlockDescription>{d.date}</Style.BlockDescription>
                    </Style.BlockDescriptionContainer>
                  </Style.BlockContainer>
                );
              })}
              <Style.FooterText>数据全部加载完成</Style.FooterText>
            </>
          ) : (
            <Style.EmptyContainer>
              <EmptyBox />
            </Style.EmptyContainer>
          )}
        </Style.Container>
      </>
    );
  }
}

const data = [
  {
    title: "一月份全省生产安全事故情况",
    status: ReadStatus.READ,
    source: "省应急管理厅",
    date: "2020-2-19",
  },
];
