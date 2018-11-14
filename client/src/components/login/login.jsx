import React from "react";

import "../../styles/login.scss";

class Login extends React.Component {
state = {
username: "",
password: "",
user: "admin",
pass: "admin",
alert: ""
};

handleUsername = (e) => {
e.preventDefault();
this.setState({
username: e.target.value
});
}

handlePassword = (e) => {
e.preventDefault();
this.setState({
password: e.target.value
});
}

handleLogin = (e) => {
e.preventDefault();
if(
this.state.username !== this.state.user &&
this.state.password !== this.state.pass
){
this.setState({
alert: "Enter valid values"
})
} else {
this.props.changeCurrentComponent("login");
}
}

render() {
return (
<div className='body-login-main'>
<div className="left">
<div className="alert_wrapp">
<div className="alertBox">{this.state.alert}</div>
</div>
<form className="wrapper" onSubmit={this.handleLogin}>
<input type="text"
className="inputform-1"
placeholder="Login..."
onChange={this.handleUsername}/><br />
<input type="password"
className="inputform-1"
placeholder="Password..."
onChange={this.handlePassword}/><br />
<input type="submit" value="Log in" className="button"/>
</form>
</div>
<div className="right">
<div className="image-right"></div>
</div>
</div>
);
}
}

export default Login;