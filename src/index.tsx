import React from 'react'
import DataTable from './components/data-table'
import { ColumnTableProps } from './components/types'

interface Props {
  columns: Array<ColumnTableProps>
  rows: any
}

export const Table: React.FC<Props> = (props) => {
  const { columns, rows, ...rest } = props
  return <DataTable columns={columns} rows={rows} {...rest} />
}
