import { ReactNode } from "react";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (item: T) => ReactNode;
};

type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export function Table<T>({ columns, data, className = "" }: TableProps<T>) {
  return (
    <table className={`min-w-full border-collapse ${className}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.key)}
              className="border-b px-4 py-2 text-left text-sm font-medium text-gray-700"
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
            {columns.map((col) => (
              <td key={String(col.key)} className="px-4 py-2 text-sm text-gray-800">
                {col.render ? col.render(row) : String(row[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}