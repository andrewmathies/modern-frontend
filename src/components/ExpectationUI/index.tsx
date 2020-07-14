import React from 'react'
import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from '@material-ui/core'

import useStyles from './styles'
import Expectation from '../../interfaces/Expectation'
import { ExpectationType } from './enums'

const ExpectationUI: React.FC<{ expectations: Expectation[], type: ExpectationType }> = (params) => {
    const classes = useStyles()

    if (params == null) {
        console.error('could not create expecations list component. params: ' + params)
        return <div></div>
    }

    const expectations = params.expectations
    const type = params.type

    let expectationItems = expectations.map((expectation) =>
        <TableRow key={expectation.matcherName}>
            <TableCell className={classes.headerCell}>{expectation.matcherName}</TableCell>
            <TableCell>{expectation.message}</TableCell>
            <TableCell>{expectation.stack}</TableCell>
            <TableCell>{expectation.passed}</TableCell>
            <TableCell>{expectation.expected}</TableCell>
            <TableCell>{expectation.actual}</TableCell>
        </TableRow>
    )

    let typeDescriptor = ''

    switch (type) {
        case ExpectationType.Failed:
            typeDescriptor = 'Failed Expectations'
            break
        case ExpectationType.Passed:
            typeDescriptor = 'Passed Expectations'
            break
        case ExpectationType.Warning:
            typeDescriptor = 'Deprecation Warnings'
            break
        default:
            console.error('unknown expecation type: ' + type)
            return <div></div>
    }

    return <div>
            <Typography variant='h5'>{typeDescriptor}</Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>MatcherName</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Stack</TableCell>
                        <TableCell>Passed</TableCell>
                        <TableCell>Expected</TableCell>
                        <TableCell>Actual</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {expectationItems}
                </TableBody>
            </Table>
        </div>
}

export default ExpectationUI