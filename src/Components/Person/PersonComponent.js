import React from 'react';
import './Person.css';

const PersonComponent = function(props){
    const p = props;

    console.log("Propsssss", p);

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 10, cursor: 'pointer'}}>
           <div style={{width: 300, height: 50, display: 'flex'}}>
                <div style={{display: 'flex'}}>
                    <img src={props.user.avatar_url} className="image-user" alt={props.user.name+'_image'}></img>
                </div>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    width: '100%', 
                    borderBottom: '1px solid #D3D3D3', 
                    marginLeft: 20
                }}>
                    <div style={{fontWeight: 'bold', textAlign: 'justify'}}>
                        {props.user.name}
                    </div>
                    <div style={{color: 'gray', textAlign: 'justify'}}>
                        {props.user.location}
                    </div>
                </div>
           </div>
        </div>
    )
    
}

export default PersonComponent;