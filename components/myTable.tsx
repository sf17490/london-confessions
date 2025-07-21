export type TableRow = {
  year: number;
  value: number;
};

export type TableColumns = {
  keyColumn: string;
  valueColumn: string;
};

export type TableProps = {
  columns: TableColumns;
  rows: TableRow[];
};

export default function Table({ columns, rows }: TableProps) {
  return (
    <div>
      <table data-testid="table" className="govuk-table">
        <thead data-testid="columnHeadings" className="govuk-table__head">
          <tr className="govuk-table__row">
            <th
              scope="col"
              data-testid="keyColumn"
              className="govuk-table__header"
            >
              {columns.keyColumn}
            </th>
            <th
              scope="col"
              data-testid="valueColumn"
              className="govuk-table__header"
            >
              {columns.valueColumn}
            </th>
          </tr>
        </thead>
        <tbody data-testid="rows" className="govuk-table__body">
          {rows.map((rowData) => row(rows.indexOf(rowData) + 1, rowData))}
        </tbody>
      </table>
    </div>
  );
}

function row(index: number, { year, value }: TableRow) {
  return (
    <tr data-testid={`row${index}`} key={index} className="govuk-table__row">
      <th
        data-testid={`row${index}key`}
        scope="row"
        className="govuk-table__header"
      >
        {year}
      </th>
      <td data-testid={`row${index}Value`} className="govuk-table__cell">
        {value}
      </td>
    </tr>
  );
}