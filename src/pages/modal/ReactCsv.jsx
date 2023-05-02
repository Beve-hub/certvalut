import React from 'react'
import { CSVLink } from 'react-csv'

const ReactCsv = () => {
    const headers = [
        {label: "Name", key:"name",  },
        {label: "Email", key:"Email"},
        {label: "Wallet address", key:"Wallet address"},
        {label: "Status", key:"Status"},
        {label: "Action", key:"Action"}
      ];

      const data = [
        {lab, key:"name", },
      ];
  return (
    <div>
      <CSVLink 
      data={}
      headers={}
      filename={}
      target='_blank'
      >
        <AiOutlineDownload size={20}/>
         Upload list sheet
      </CSVLink>
    </div>
  );
}

export default ReactCsv
