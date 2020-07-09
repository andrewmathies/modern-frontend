import React from 'react'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core'

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
        <ListItem>
            <ListItemText primary={'matcherName: ' + expectation.matcherName} />
            <ListItemText primary={'message: ' + expectation.message} />
            <ListItemText primary={'stack: ' + expectation.stack} />
            <ListItemText primary={'passed: ' + expectation.passed} />
            <ListItemText primary={'expected: ' + expectation.expected} />
            <ListItemText primary={'actual: ' + expectation.actual} />
        </ListItem>
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
            <List component='nav' className={classes.list} children={expectationItems} />
        </div>
}

export default ExpectationUI