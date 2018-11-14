import React from 'react'

import ReactTableContainer from 'react-table-container'

import '../../styles/companysList.scss'

class ListErds extends React.Component {
render () {
const datared = this.props.results
console.log(this.props.results)
const row = datared.map((element, index) =>
<TableRow
className='rowhilight'
key={index}
onClick={this.props.chooseCompany}
data-id={index}
>
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
</TableRow>
)

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
<Table className={classes.table}>
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
{row}
</TableBody>
</Table>
</ReactTableContainer>
</Paper>
)
}
}

export default ListErds