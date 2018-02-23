import React, {Component} from 'react';

import { Modal } from './Modal';



export class BoxList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        }
    }

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (<div className="box_list_container">
            <div className="box">
                <div className="background_text_01">
                    <div className="box_container">

                        <div className="icon_1"/>
                        <div className="text_4">Sapeva pure ca oggi je e te stevema inda 'sta machina</div>
                        <div className="text_5">Quann' tu me purtast' a spara' chillu cristian' p'a prima vota.</div>
                        <div className="center_button">
                            <button onClick={this.handleOpenModal}>Clicca qui</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="box">
                <div className="background_text_02" style={{marginTop: '30px'}}>
                    <div className="box_container">


                        <div className="text_5" style={{marginTop: '92px'}}>Quann' Salvatore Conte è turnat', quann'
                            Danielino è muort', iss 'o sapeva.
                        </div>

                    </div>
                </div>
            </div>
            <div className="box" style={{marginTop: '30px'}}>
                <div className="background_text_03">
                    <div className="box_container">
                        <div className="text_5" style={{marginTop: '92px'}}>Mammà se n'è ghiuta! Tu ci credi in Dio?
                        </div>
                    </div>
                </div>
            </div>


                <Modal open={this.state.showModal} close={this.handleCloseModal}/>


        </div>);
    };
}

