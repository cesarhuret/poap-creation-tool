import axios from "axios";
import React, {Component} from "react";
import './POAP.css'


export class POAP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poapID: '',
      authToken: '',
      codes: '',
      result: '',
      submit: 'Submit',
    };

    this.onAuthChange = this.onAuthChange.bind(this);
    this.onCodesChange = this.onCodesChange.bind(this);
    this.onPOAPIDChange = this.onPOAPIDChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onPOAPIDChange(event) {
    this.setState({poapID: event.target.value})
  }

  onAuthChange(event) {
    this.setState({authToken: event.target.value});
  }

  onCodesChange(event) {
    this.setState({codes: event.target.value})
  }

  handleSubmit(event) {
    // this.setState({submit: 'Loading...'})
    alert(`Creation for event  with POAP ID: '${this.state.poapID}'`);
    this.uploadPOAPs(this.state.authToken, this.state.poapID, this.state.codes)
    event.preventDefault();
  }

  uploadPOAPs(authToken, poapID, codes) {
        let list = codes.split("http://POAP.xyz/claim/")
        let text = [];
        for (let i = 1; i < list.length; i++) {
          let item = list[i].replace("\n", "")
          text.push(item);
        }
        const body = {};  
        axios.post(`https://poapapi.dcl.guru/event/${poapID}`, body, { headers: { 'Authorization': authToken } })
        .then((response) => {
          console.log(response);
          alert(`${poapID} event was created`);
        }, (error) => {
          console.log(error);
          alert(`${poapID} - an error occurred`);
        })
        .then(async () => {
          await axios.post(`https://poapapi.dcl.guru/addcodes/${poapID}`, { codes: text }, { headers: { 'Authorization': authToken } })
        })
        .then((response) => {
          console.log(response);
        }, (error) => {
          console.log(error);
        })
  }

  render() {
        return ( 
        <div className="App">
          <form onSubmit={this.handleSubmit} className="UI">
            <h1 style={{color: '#c7c7c7', fontSize: 50}}>Create POAP Event</h1>
            <input type="text" value={this.state.poapID} onChange={this.onPOAPIDChange} placeholder="POAP ID"/>
            <br></br>
            <input type="text" value={this.state.authToken} onChange={this.onAuthChange} placeholder="Authorization Token" />
            <br></br>
            <textarea type="text" maxLength="100000" rows="10" cols="50" value={this.state.codes} onChange={this.onCodesChange} placeholder="POAP Codes"></textarea>
            <br></br>
            <input type="submit" value={this.state.submit} />
          </form>
        </div>
        )
    }
}
