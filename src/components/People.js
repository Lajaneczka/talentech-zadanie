import React from 'react'
import { Table } from 'semantic-ui-react'

export const People  = ({data}) => {

   return(
    <Table basic>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {data.map((people, i) => {
            return ( 
                <Table.Row>
                <Table.Cell key={i}>{people.name}</Table.Cell>
            </Table.Row>
            )
           
        })}

    {/* <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        
      </Table.Row> */}

    </Table.Body>
  </Table>
   
   )}









