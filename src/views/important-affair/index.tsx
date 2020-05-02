import React from "react";
import { Tabs } from "antd-mobile";
import "antd-mobile/lib/tabs/style/css";
import SafeProduction from "./safe-production";
import NaturalDisaster from "./natural-disaster";

const tabs = [{ title: "安全生产" }, { title: "自然灾害" }];

export default class ImportantAffair extends React.Component<any, any> {
  render() {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#f8f8f8" }}>
        <Tabs
          tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <div
            style={{
              minHeight: "90vh",
              backgroundColor: "#F4F4F4",
            }}
          >
            <SafeProduction />
          </div>
          <div
            style={{
              minHeight: "90vh",
              backgroundColor: "#F4F4F4",
            }}
          >
            <NaturalDisaster />
          </div>
        </Tabs>
      </div>
    );
  }
}
