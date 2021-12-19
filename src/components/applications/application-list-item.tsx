import { ApplicationRecord } from "../../App";
import "./application-list-item.css";

interface ApplicationListItemProps {
  app: ApplicationRecord;
}

export const ApplicationListItem = ({ app }: ApplicationListItemProps) => {
  return (
    <div className="application-list-item__container">
      <h3>{app.name}</h3>
      <h4 className="application-list-item__spend">Total Spend: ${app.spend.toLocaleString()}</h4>
    </div>
  );
};
