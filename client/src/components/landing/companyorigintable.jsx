import React from 'react'

import ReactTableContainer from 'react-table-container'

import '../../styles/companysList.scss'

class ListErds extends React.Component {
render () {
const datared = this.props.results
console.log(this.props.results)
const row = datared.map((element, index) =>
<tr
className='rowhilight'
key={index}
onClick={this.props.chooseCompany}
data-id={index}
>
<td className='legal-name'>
{element.legalName}
</td>
<td className='element-grid'>
{element.grid}
</td>
<td className='countryofinc'>
{element.countryOfIncorporation}
</td>
<td className='reg-numb'>
{element.crNumber}
</td>
<td className='lei-numb'>
{element.lei}
</td>
<td className='main-city-name'>
{element.addresses[0].city}
</td>
<td className='main-count'>
{element.countryOfHeadOffice}
</td>
</tr>
)

return (
<div className='table-orbis'>
<p className='title-tablie-land'>KYC profile search results</p>
{/* <ReactTableContainer width="auto" height="500px"> */}
<table className='header-table'>
<thead className='thead-header'>
<tr className='row-header-list'>
<th tooltip='Legal-Name' className='lglnma'>
Legal name
</th>
<th tooltip='ERDS-grid' className='erdsgrd'>
ERDS grid
</th>
<th tooltip='Country-Of-Incorporation' className='cntfinc'>
Country of incorporation
</th>
<th tooltip='Company-registration-number' className='rgnmb'>
Registration number
</th>
<th tooltip='LEI' className='lnmby'>
LEI
</th>
<th tooltip='Main-address-city' className='mnddrct'>
Main address city
</th>
<th tooltip='Main-address-country' className='mncntr'>
Main address country
</th>
</tr>
</thead>
<tbody>
{row}
</tbody>
</table>
{/* </ReactTableContainer> */}
</div>
)
}
}

export default ListErds