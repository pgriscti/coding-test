import { ApplicationListItem } from "./application-list-item";
import { useApplicationsFinder } from "./use-applications-finder";
import { ApplicationRecord } from "../../App";
import "./applications-list.css";

interface ApplicationsListProps {
  rawData: ApplicationRecord[];
  selectedItem: string;
  maxSpend: number;
}

export const ApplictionsList = ({
  rawData,
  selectedItem,
  maxSpend,
}: ApplicationsListProps) => {
  const filteredApplications = useApplicationsFinder(
    rawData,
    selectedItem,
    maxSpend
  );

  return (
    <div className="applications-list__container">
      {filteredApplications.map((app: ApplicationRecord) => (
        <ApplicationListItem key={app.id} app={app} />
      ))}
    </div>
  );
};
