import React from "react";
import { TreeItem } from "../../hooks/use-data-fetcher";
import arrow from "../../icons/right-chevron.png";
import "./navigation-item.css";

interface NavigationItemProps {
  item: TreeItem;
  selectedItem: string;
  setSelectedItem: (selectedItem: string) => void;
}

export const NavigationItem = ({
  item,
  selectedItem,
  setSelectedItem,
}: NavigationItemProps) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div
      className={item.title === selectedItem ? "navigation__selected" : ""}
      style={{ paddingLeft: `calc(13px * ${item.level})` }}
    >
      {item.children.length > 0 ? (
        <img
          alt="arrow"
          className={
            expanded ? "navigation__expanded" : "navigation__collapsed"
          }
          src={arrow}
          onClick={() => setExpanded(!expanded)}
        />
      ) : null}
      <span
        className="navigation__title"
        onClick={() => setSelectedItem(item.title)}
      >
        {item.title}
      </span>
      {expanded
        ? item.children?.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          ))
        : null}
    </div>
  );
};
