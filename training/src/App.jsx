import React, { Component } from 'react';
import TextFieldDemo from './pages/TextFieldDemo/TextFieldDemo';
import {BannerDemo} from './pages/BannerDemo';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state= { flag : 'true'};
  }
  componentWillMount() {
    console.log('-------------> Component will mount');
  }
  componentDidMount() {
    console.log('-------------> Component did mount');
    const time = setInterval(() =>
    {
        console.log("APP render =>>");
        (this.state.flag)?this.setState({flag:false}):this.setState({flag:true})
    }
    , 3000);
  }

  render() {
    console.log('appp-----------render...', this.state);
    return (
    <>
    <BannerDemo />
    <TextFieldDemo {...this.state} />
    </>
    // this.state.flag?<TextFieldDemo />:<TextFieldDemo />
    );
  }
}

export default App;
