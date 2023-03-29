import React from 'react'

import { Table } from 'data-table-mui'
import './index.css'
import { ColumnTableProps } from 'data-table-mui/dist/components/types'
import ThemeConfig from './theme'
import GlobalStyles from './theme/globalStyles'

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
  return (
    <ThemeConfig>
      <GlobalStyles />
      <Table columns={columns} rows={rows} />
    </ThemeConfig>
  )
}

export default App
