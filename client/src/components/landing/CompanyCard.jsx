// TODO no currently sourced to find
import React from 'react'
import '../../styles/companyCard.scss'
class CompanyCard extends React.Component {
render() {

const data = this.props.com
panyCard

const row = data.map((element, index) =>

<table className='table-kyc-mini' key={index}>
<tbody>
<tr className='row-kys-prof'>
<th className='table-title'>
<span className='titlewrap'>Legal name:</span>
</th>
<td className='data-left-col'>
{element.legalName}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>Organisation sub type:</span>
</th>
<td className='data-right-col'>
{ element.org
anizationType}
</td>
</tr>
<tr className='row-kys-prof'>
<th className='table-title'>
<span className='titlewrap'>ERDS Grid:</span>{' '}
</th>
<td className='data-left-col'>
{element.grid}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>
Tax id:</span>
</th>
<td className='data-right-col'>
{element.taxIdNumber}
</td>
</tr>
<tr className='row-kys-prof'>
<th className='table-title'>
{' '}<span className='titlewrap'>Main address:</span>
</th>
<td className='data-left-col'>
{element.addresses[0].addressLine1}
{element.addresses[0].addressLine1 == '' || element.addresses[0].addressLine1 == null
? ''
: ', '}
{element.addresses[0].addressLine2}
{element.addresses[0].addressLine2 == '' || element.addresses[0].addressLine2 == null
? ''
: ', '}
{element.addresses[0].city}
{element.addresses[0].city == '' || element.addresses[0].city == null
? ''
: ' '}
{element.addresses[0].stateProvince}
{element.addresses[0].stateProvince == '' || element.addresses[0].stateProvince == null
? ''
: ', '}
{element.addresses[0].addressCountry}
{element.addresses[0].addressCountry == '' || element.addresses[0].addressCountry == null
? ''
: ', '}
{element.addresses[0].postalCode}
{element.addresses[0].postalCode == '' || element.addresses[0].postalCode == null
? ''
: ''}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>LEI:</span>
</th>
<td className='data-right-col'>
{element.lei}
</td>
</tr>
<tr className='row-kys-prof'>
<th className='table-title'>
{' '}<span className='titlewrap'>
Country of incorporation:
</span>
</th>

<td className='data-left-col'>
{element.countryOfIncorporation}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>Registration number:</span>
</th>
<td className='data-right-col'>
{element.crNumber}
</td>
</tr>
<tr className='row-kys-prof'>
<th className='table-title'>
<span className='titlewrap'>Country of head office:</span>
</th>
<td className='data-left-col'>
{element.countryOfHeadOffice}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>Web site:</span>
</th>
<td className='data-right-col'>
{element.websites.map((web, ind) => {
return <p className= "websites" key={ind}>{web.website}</p>
})}
</td>
</tr>
<tr className='row-kys-prof'>
<th className='table-title'>
{' '}<span className='titlewrap'>Date of incorporation:</span>
</th>
<td className='data-left-col'>
{element.incorporationDate}
</td>
<th className='table-title-right-col'>
{' '}<span className='titlewrap'>Data supplier:</span>
</th>
<td className='data-right-col'>
{this.props.erds}
</td>
</tr>
<tr className='row-kys-prof'/>
</tbody>
</table>

)

return (
<div className='companydata'>
<p className='title-kyc-prof'>KYC profile summary</p>
{row}
<button onClick={this.props.togglePopup}
className='pop-but-landing'
style={{display: this.props.display}}>Display full profile</button>
</div>
)
}
}

export default CompanyCard