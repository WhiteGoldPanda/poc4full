import React from 'react';

import Login from './login/login.jsx';
import Landing from './landing/Landing.jsx';

class App extends React.Component {

state = {
'currentComponent':[]
}

componentWillMount(){
let currentComponent = [];
currentComponent.push(
<Login
key={"loginComponent"}
changeCurrentComponent={this.changeCurrentComponent}
/>
);
this.setState({ currentComponent });
}

changeCurrentComponent = (componentValue) => {


if(componentValue === 'login'){
let currentComponent = []
currentComponent.push(
<Landing
key={"feedComponent"}
changeCurrentComponent={this.changeCurrentComponent}
/>
)
this.setState({ currentComponent });
} else {
let currentComponent = [];
currentComponent.push(
<Login
key={"loginComponent"}
changeCurrentComponent={this.changeCurrentComponent}
/>
);
this.setState({ currentComponent })
}

}

render() {
return (
<div>
{this.state.currentComponent}
</div>
);
}
}

export default App