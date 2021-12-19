import { ApplicationRecord } from "../../App";
import { order } from "../../hooks/use-data-fetcher";

export const useApplicationsFinder = (
  rawData: ApplicationRecord[],
  selectedItem: string,
  maxSpend: number
) => {
  const filteredApplications = rawData.filter((item) => {
    let matchesAnyItem = false;
    order.forEach((level) => {
      if (!matchesAnyItem) {
        matchesAnyItem = item[level] === selectedItem && item.spend <= maxSpend;
      }
    });
    return matchesAnyItem;
  });

  return filteredApplications;
};
