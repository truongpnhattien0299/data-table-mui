import React from 'react'

import { Table } from 'data-table-mui'
import 'data-table-mui/dist/index.css'
import { ColumnTableProps } from 'data-table-mui/dist/components/types'

const App = () => {
  const columns: ColumnTableProps[] = [
    {
      field: 'stt',
      headerName: 'STT',
      type: 'text',
      width: 50
      // renderCell: (row, index) => index
    }
  ]
  const rows = [{ stt: 1 }, { stt: 2 }, { stt: 3 }, { stt: 4 }]
  return <Table columns={columns} rows={rows} />
}

export default App
