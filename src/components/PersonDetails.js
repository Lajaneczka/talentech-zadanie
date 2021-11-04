            import React from 'react'
            import { Table } from 'semantic-ui-react'

            export const PersonDetails = ({height, mass, haircolor, skincolor, eyecolor, birthyear, gender}) => {
                return (
                    <Table>
                            <Table.Row>
            <Table.Cell>height:{height}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>mass: {mass}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>haircolor: {haircolor}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>skincolor: {skincolor}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>eyecolor: {eyecolor}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>birthyear: {birthyear}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                            <Table.Cell>gender: {gender}</Table.Cell>
                            </Table.Row>
                    </Table>
                )
            }


