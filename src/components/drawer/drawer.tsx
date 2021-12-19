import { TreeItem } from "../../hooks/use-data-fetcher";
import { Filters } from "../filters/filters";
import { Navigation } from "../navigation/navigation";
import "./drawer.css";

interface DrawerProps {
  treeData: TreeItem[];
  defaultMaxSpend: number;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
  setMaxSpend: (maxSpend: number) => void;
}

export const Drawer = ({
  treeData,
  defaultMaxSpend,
  selectedItem,
  setSelectedItem,
  setMaxSpend,
}: DrawerProps) => {
  return (
    <div className="drawer__container">
      <Navigation
        treeData={treeData}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Filters setMaxSpend={setMaxSpend} defaultMaxSpend={defaultMaxSpend} />
    </div>
  );
};
