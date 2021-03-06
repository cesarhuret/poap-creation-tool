import axios from "axios";
import React, {Component} from "react";
import './POAP.css'
import BlockchainContext from "../context/BlockchainContext";
import { Button, Card, Col, Row } from "react-bootstrap";


class EditPOAP extends Component {

  constructor(props) {
    super(props);
    this.state = {
      poapID: '',
      authToken: '',
      testing: false,
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
    this.uploadPOAPs(this.state.authToken, this.state.poapID, this.state.codes)
    event.preventDefault();
  }


  uploadPOAPs(authToken, poapID) {
        let body = {
          options: [
            ["testing", this.state.testing]
          ]

        }
        axios.patch(`https://poapapi.dcl.guru/event/${poapID}`, body, { headers: { 'Authorization': authToken } })
        .then((response) => {
          console.log(response);
          alert(`${poapID} event was edited`);
        }, (error) => {
          console.log(error);
          alert(`${poapID} - an error occurred`);
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
                                        <h4 className="mb-4" style={{fontWeight: 600}}>Edit POAP</h4>
                                    </div>
                                    <form onSubmit={this.handleSubmit} style={{color: 'white'}} >
                                        <div className="mb-3">
                                          <input type="number" value={this.state.poapID} className="form-control" onChange={this.onPOAPIDChange} placeholder="POAP ID" style={{background: 'none', border: '1px solid rgb(45, 45, 45)', color: 'white'}} required />
                                        </div>
                                        <div className="mb-3">
                                          <input type="text" value={this.state.authToken} className="form-control" onChange={this.onAuthChange} placeholder="Authorization Token" style={{background: 'none', border: '1px solid rgb(45, 45, 45)', color: 'white'}} required />
                                        </div>
                                        <div className="mb-3">
                                        { this.state.testing 
                                            ? <Button variant='danger' onClick={ () => { this.setState({ testing: false})}}>Disable Testing</Button> 
                                            : <Button variant='success' onClick={ () => { this.setState({ testing: true}) }}>Enable Testing</Button> 
                                        }
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

EditPOAP.contextType = BlockchainContext;

export default EditPOAP;