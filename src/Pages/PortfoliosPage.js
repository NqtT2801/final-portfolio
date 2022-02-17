import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import "../../node_modules/video-react/dist/video-react.css";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button, setButtons] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <Title title={"Portfolios"} span={"portfolios"} />
      <InnerLayout>
        <Button filter={filter} button={button} />
        <Menu menuItem={menuItem} />
      </InnerLayout>
      <Title title={"Video"} span={"Video"} />
    </MainLayout>
  );
}

export default PortfoliosPage;
