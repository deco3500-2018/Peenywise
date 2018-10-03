import React, {Component} from 'react';
import {Button, Icon, Label, Checkbox, Form} from 'semantic-ui-react';
import {GoogleLogin} from 'react-google-login';
import {PostData} from './PostData';
import {Redirect} from 'react-router-dom';



class Registe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickText:'',
      textcolor: 'White',
      inputwidth: '256 px',
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  signup(res, type){
    let postData = {
      name : res.w3.ig,
      email : res.w3.U3,
      token: res.Zi.access_token,
      pic: res.w3.Paa
    };

    if (postData) {
      sessionStorage.setItem("userData", JSON.stringify(postData));
      console.log(sessionStorage.getItem('userData'));
      this.setState({redirect:true});
      }else {}
  }

  render() {

    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to = {'/Welcome'}/>)
    }

    const responseGoogle = (response) => {
      this.signup(response, 'google');
    }



    document.getElementById('googleButton')
    return (
      <div>
      <div id="googleButton">
        <GoogleLogin clientId="421584335247-he3fuab3hj1042ikdargouvt2cpul800.apps.googleusercontent.com" buttonText="Login with google" onSuccess={responseGoogle} onFailure={responseGoogle}/>
      </div>

      <div class="likes">
        <Button as='div' labelPosition='right'>
          <Button color='red'>
            <Icon name='heart'/>
            Like
          </Button>
          <Label as='a' basic="basic" color='red' pointing='left'>
            1
          </Label>
        </Button>
      </div>

    </div>
  );
  }

}

export default Registe;
