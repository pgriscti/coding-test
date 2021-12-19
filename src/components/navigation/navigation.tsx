import { TreeItem } from "../../hooks/use-data-fetcher";
import { NavigationItem } from "./navigation-item";

interface NavigationProps {
  treeData: TreeItem[];
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

export const Navigation = ({
  treeData,
  selectedItem,
  setSelectedItem,
}: NavigationProps) => {
  return (
    <>
      <h2>Navigation</h2>
      {treeData.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      ))}
    </>
  );
};
