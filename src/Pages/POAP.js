import axios from "axios";
import React, {Component} from "react";
import './POAP.css'
import BlockchainContext from "../context/BlockchainContext";
import { Button, Card, Col, Row } from "react-bootstrap";


class POAPClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poapID: '',
      authToken: '',
      codes: '',
      result: '',
      submit: 'Submit',
      accounts: null,
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
          <Row className='justify-content-center' style={{maxWidth: '100%'}}>
                    <Col xs={12} md={9} lg={8} xl={8}>
                        <Card className='round my-5 colored' style={{color: 'white', backgroundColor: 'rgba(20, 50, 150, 0.3)'}}>
                            <Card.Body>
                                <div className='p-2'>
                                    <div className='text-left'>
                                        <h4 className="mb-4" style={{fontWeight: 600}}>Create POAP</h4>
                                    </div>
                                    <form onSubmit={this.handleSubmit} style={{color: 'white'}} >
                                        <div className="mb-3">
                                          <input type="number" value={this.state.poapID} className="form-control" onChange={this.onPOAPIDChange} placeholder="POAP ID" style={{background: 'none', border: '1px solid rgb(45, 45, 45)', color: 'white'}} required />
                                        </div>
                                        <div className="mb-3">
                                          <input type="text" value={this.state.authToken} className="form-control" onChange={this.onAuthChange} placeholder="Authorization Token" style={{background: 'none', border: '1px solid rgb(45, 45, 45)', color: 'white'}} required />
                                        </div>
                                        <div className="mb-3">
                                        <textarea type="text" maxLength="10000000" rows="10" className="form-control" cols="50" value={this.state.codes} onChange={this.onCodesChange} style={{background: 'none', border: '1px solid rgb(45, 45, 45)', color: 'white'}} placeholder="POAP Codes" required />
                                        </div>
                                      <Button type="submit">Submit</Button>
                                    </form>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </div>
        )
    }
}

POAPClass.contextType = BlockchainContext;

export default POAPClass;