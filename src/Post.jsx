import React from 'react';

export const Post = () => {

    return (<div className="box_1">
        <div className="text_1">Nun ce sta' mammà là</div>
        <div className="text_2">Quann steva là in Honduras, steva rint a na capanna e nziemm a me ce steva.</div>
        <div className="text_3">E intant' e sord tuoj nunn arrivavan. 'Na sera gli honduregni me mettetter' nu macete n'man e gridavan': 'Accirel'! Accirel'! Je pregav', pregav' ca corcrun' me venev' a salva', ca tu me veniv' a salva'! </div>
        <hr/>
        <div style={{display: 'flex', justifyContent:'space-between', height: '27px', marginTop: '47px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}><div className="oval"/><div className="oval_text">Lore ipsum</div></div>
            <div style={{display: 'flex'}}>
                <div className="fire"/>
                <div className="toilet_paper"/>
                <div className="drop"/>
            </div>
        </div>

        <div className="gallery">

            <img
                src="/images/image_1.svg"
                alt="image_1"
            />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <img
                    src="/images/image_2.svg"
                    alt="image_2"
                />
                <img
                    src="/images/image_3.svg"
                    alt="image_3"
                />
            </div>
            <img
                src="/images/image_4.svg"
                alt="image_4"
            />
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <img
                    src="/images/image_5.svg"
                    alt="image_5"
                />
                <img
                    src="/images/image_6.svg"
                    alt="image_6"
                />
            </div>
        </div>
    </div>);
};
