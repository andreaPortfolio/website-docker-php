import React, {Component} from 'react';

import ReactModal from 'react-modal';


const customStyles = {
    overlay: {
        backgroundColor: '#61605f'
    },
    content : {

        padding:0,
        maxWidth: '957px',
        maxHeight: '658px',
        background: '#F8E627',
        borderRadius: '12px',
        overflow: 'hidden',
        margin: 'auto'


    }
};

export class Modal extends Component {

    constructor(props) {
        super(props);


    }


    render(){
    const {open, close} = this.props;

    const styles = {
        image: {
            marginLeft: 18,
            width: '177px',
            height: '179px'
        }
    };

    return( <ReactModal
        isOpen={open}
        contentLabel="Modal #2 Global Style Override Example"
        onRequestClose={close}
        style={customStyles}
        ariaHideApp={false}

    >

            <div className="modal_container">
                <div className="modal_section_1"></div>
                <div className="gallery_modal">
                    <img
                        src="/images/gallery_image_01.svg"
                        alt="image_1"
                        style={styles.image}
                    />
                    <img
                        src="/images/gallery_image_01.svg"
                        alt="image_1"
                        style={styles.image}
                    />
                    <img
                        src="/images/gallery_image_01.svg"
                        alt="image_1"
                        style={styles.image}
                    />
                    <img
                        src="/images/gallery_image_01.svg"
                        alt="image_1"
                        style={styles.image}
                    />
                    <img
                        src="/images/gallery_image_01.svg"
                        alt="image_1"
                        style={styles.image}
                    />
                </div>


            </div>
        </ReactModal>



    );
    }
}






