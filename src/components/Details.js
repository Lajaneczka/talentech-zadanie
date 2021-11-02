import React from 'react'
import { Table } from 'semantic-ui-react'

export const Details = ({height, mass, haircolor, skincolor, eyecolor, birthyear, gender, homeworld, films}) => {
    return (
        <Table>
                <Table.Row>
<Table.Cell>height:{height}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>mass:{mass}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>haircolor:{haircolor}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>skincolor:{skincolor}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>eyecolor{eyecolor}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>birthyear:{birthyear}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>gender:{gender}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>homeworld:{homeworld}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell>films:{films.map(el => <p>{el}</p>)}</Table.Cell>
                </Table.Row>
        </Table>
    )
}


