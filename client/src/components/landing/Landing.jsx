import React from "react";

import CompanysList from "./CompanysList";
import CompanyCard from "./CompanyCard.jsx";
import KycFull from "./KycFull.jsx";

import "../../styles/langing.scss";

// http://localhost:5000/api/getList


const API_URL = " http://localhost:5005/api/getList"
;

class Landing extends React.Component {
state = {
error: false,
query: "",
listOfCompany: [],
results: [],
companyCard: [],
showPopup: false,
erds: "",
display: "none",
sourced: "Not currently sourced",
websites: []
};

getComnpany = event => {
event.preventDefault();

// let query = (this.state.query).toLocaleLowerCase();
let query = this.state.query;

fetch(`${API_URL}/${query}`, {
method: "GET"
})
.then(response => response.text())
.then(responseText => {
if (responseText.length === 0) {
alert("No available in the database!");
} else {
let tempData = JSON.parse(responseText);
console.log(tempData);
this.setState({
results: tempData
});
}
})
.catch(error => {
console.error(error);
});
};

handleInputChange = event => {
event.preventDefault();
this.setState({
query: event.target.value
});
};

chooseCompany = event => {
event.preventDefault();

let row = document.getElementsByClassName("rowhilight");
console.log(row);
for (let i = 0; i < row.length; i++) {
row[i].classList.remove("active");
}

console.log(event.currentTarget);

let tempArray = [];
tempArray.push(this.state.results[event.currentTarget.dataset.id]);
this.setState({
companyCard: tempArray,
erds: "ERDS",
display: "block",
websites: this.state.results[event.currentTarget.dataset.id].websites
});
event.target.parentElement.classList.add("active");
};

togglePopup = () => {
this.setState({
showPopup: !this.state.showPopup
});
};

render() {
return (
<div className="maincontainerlanding">
<div className="sidebar">
<div className="logohsbc-1">
<p className="logohsbc" />
</div>
<form className="list-companies-top" onSubmit={this.getComnpany}>
<input
value={this.state.query}
className="search-companies-button"
placeholder="Search for Legal name ..."
type="text"
onChange={this.handleInputChange}
/>
</form>
<form action="" className="radiobut">
<input
type="radio"
className="contactChoice1"
value="choise1"
/>Filter 1<br />
<input
type="radio"
className="contactChoice2"
value="choise2"
/>Filter 2<br />
<input
type="radio"
className="contactChoice3"
value="choise3"
/>Filter 3
</form>
<button
className="log-out-butt-landing"
onClick={this.props.changeCurrentComponent}
>
Log out
</button>
</div>
<div className="main">
<div className="list">
<CompanysList
results={this.state.results}
chooseCompany={this.chooseCompany}
/>
</div>
<CompanyCard
companyCard={ this.state.com
panyCard}
togglePopup={this.togglePopup}
erds={this.state.erds}
display={this.state.display}
sourced={this.state.sourced}
websites={this.state.websites}
/>
{this.state.showPopup
? <KycFull
closePopup={this.togglePopup}
companyCard={ this.state.com
panyCard}
sourced={this.state.sourced}
/>
: null}
</div>
</div>
);
}
}

export default Landing;