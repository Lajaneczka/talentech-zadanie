     import React from 'react'
     import { Table } from 'semantic-ui-react'
     import { Homeworld } from './Homeworld'

                export const PersonDetails = ({height, mass, haircolor, skincolor, eyecolor, birthyear, gender, homeworld}) => {
                    return (
                        <Table>
                                <Table.Row>
                                <Table.Cell>Height: {height}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Mass: {mass}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Haircolor: {haircolor}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Skincolor: {skincolor}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Eyecolor: {eyecolor}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Birthyear: {birthyear}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>Gender: {gender}</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                <Table.Cell>
                                    <Homeworld data={homeworld}/>
                                </Table.Cell>
                                </Table.Row>
                        </Table>
                    )
                }


