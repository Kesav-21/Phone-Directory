import React from 'react';

const Header=function(props){
    const headerStyle={textAlign:'center',padding:10,background:'grey',textTransform:'uppercase',color:'white',fontWeight:'600',fontSize:'22px'}
    return(
        <div style={headerStyle}>
            {props.heading}
        </div>
        )
}


export default Header;