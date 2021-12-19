import React from "react";
import { ApplicationRecord } from "../App";

interface DataFetcherProps {
  url: string;
}

export type Level = "BCAP1" | "BCAP2" | "BCAP3";
export const order: Level[] = ["BCAP1", "BCAP2", "BCAP3"];
export interface TreeItem {
  id: string;
  title: string;
  level: number;
  children: TreeItem[];
}

export const useDataFetcher = ({ url }: DataFetcherProps) => {
  const [rawData, setRawData] = React.useState<ApplicationRecord[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>();

  const sortRecords = (a: TreeItem, b: TreeItem) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setRawData(data);
        setLoading(false);
      } catch (e) {
        setError((e as Error).message);
      }
    };

    fetchData();
  }, [url]);

  const defaultMaxSpend = React.useMemo(() => {
    return rawData.reduce((acc, newVal) => {
      return newVal.spend > acc ? newVal.spend : acc;
    }, 0);
  }, [rawData]);

  const treeData = React.useMemo(() => {
    const rawTreeData: TreeItem[] = [];
    const levels: any = { result: rawTreeData };
    rawData.forEach((record: ApplicationRecord) => {
      order.reduce((prev: any, next: Level) => {
        const title = record[next];
        const level = order.indexOf(next);
        const id = record.id;

        if (!prev[title]) {
          const value = { title, level, id, children: [] };
          prev[title] = { result: value.children };
          prev.result.push(value);
          prev.result.sort(sortRecords);
        }
        return prev[title];
      }, levels);
    });
    return rawTreeData;
  }, [rawData]);

  return {
    rawData,
    treeData,
    defaultMaxSpend,
    loading,
    error,
  };
};
