import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import ReactTableContainer from 'react-table-container'
import '../../styles/companysList.scss'

import '../../styles/companysList.scss'

let styles = theme => ({
root: {
display: 'inline-block'
},
table: {
backgroundColor: '#ffffff'
}
})

class ListErds extends React.Component {
render () {
const { classes } = props

return (
<Paper className={classes.root}>
<ReactTableContainer
style={{
// Removes `inline-block` space between <Paper> and <ReactTableContainer>
marginBottom: '-4px'
}}
width='auto'
height='50vh'
customHeader={[TableHead]}
>
<Table>
<TableHead>
<TableRow>
<TableCell tooltip='Legal-Name'>Legal name</TableCell>
<TableCell tooltip='ERDS-grid'> ERDS grid</TableCell>
<TableCell tooltip='Country-Of-Incorporation'>
Country of Incorporation
</TableCell>
<TableCell tooltip='Company-registration-number'>
Registration number
</TableCell>
<TableCell tooltip='LEI'>LEI</TableCell>
<TableCell tooltip='Main-address-city'>
Main address city
</TableCell>
<TableCell tooltip='Main-address-country'>
Main address country
</TableCell>
</TableRow>
</TableHead>
<TableBody>
<TableCell className='legal-name'>
{element.legalName}
</TableCell>
<TableCell className='element-grid'>
{element.grid}
</TableCell>
<TableCell className='countryofinc'>
{element.countryOfIncorporation}
</TableCell>
<TableCell className='reg-numb'>
{element.crNumber}
</TableCell>
<TableCell className='lei-numb'>
{element.lei}
</TableCell>
<TableCell className='main-city-name'>
{element.addresses[0].city}
</TableCell>
<TableCell className='main-count'>
{element.countryOfHeadOffice}
</TableCell>
</TableBody>
</Table>
</ReactTableContainer>
</Paper>
)
}
}

export default withStyles(styles)(ListErds)