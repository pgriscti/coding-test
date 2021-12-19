import React from "react";
import { ApplictionsList } from "./components/applications/applications-list";
import { Drawer } from "./components/drawer/drawer";
import { useDataFetcher } from "./hooks/use-data-fetcher";
import "./app.css";

const dataUrl = "http://localhost:3000/data";

export interface ApplicationRecord {
  id: string;
  name: string;
  spend: number;
  BCAP1: string;
  BCAP2: string;
  BCAP3: string;
}

function App() {
  const { rawData, loading, error, treeData, defaultMaxSpend } = useDataFetcher(
    { url: dataUrl }
  );
  const [selectedItem, setSelectedItem] = React.useState<string>();
  const [maxSpend, setMaxSpend] = React.useState<number>();

  if (loading) {
    return <h1>{`...loading`}</h1>;
  }

  if (error) {
    return <h1>{`Error loading data: ${error}. Please try again.`}</h1>;
  }

  const defaultSelectedItem = treeData.length > 0 ? treeData[0].title : "";

  return (
    <div className="app__container">
      <Drawer
        treeData={treeData}
        setSelectedItem={setSelectedItem}
        setMaxSpend={setMaxSpend}
        defaultMaxSpend={defaultMaxSpend}
        selectedItem={selectedItem || defaultSelectedItem}
      />
      <ApplictionsList
        rawData={rawData}
        selectedItem={selectedItem || defaultSelectedItem}
        maxSpend={maxSpend || defaultMaxSpend}
      />
    </div>
  );
}

export default App;
