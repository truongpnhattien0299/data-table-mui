import React from 'react'
import DataTable, { Props } from './components/data-table'
export const Table: React.FC<Props> = (props) => {
  const { columns, rows, ...rest } = props
  return <DataTable columns={columns} rows={rows} {...rest} />
}
