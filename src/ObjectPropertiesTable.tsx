import BTable from 'react-bootstrap/Table'
import React, { ReactChild } from 'react'

interface ObjectPropertiesTableProps {
  object: {
    [key: string]: string | number | undefined | ReactChild
  }
}
export default function ObjectPropertiesTable({
  object,
}: ObjectPropertiesTableProps) {
  return (
    <BTable
      responsive
      bordered
      hover
      className="border objectPropertiesTable"
      id="objectPropertiesTable"
    >
      <tbody>
        {Object.keys(object).map(function (property) {
          return (
            <tr key={property}>
              <td>{property}</td>
              {/* @ts-ignore (TS doesn't like property accessor syntax) */}
              <td>{object[property]}</td>
            </tr>
          )
        })}
      </tbody>
    </BTable>
  )
}