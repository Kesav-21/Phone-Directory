import React from 'react';

const Header=function(props){
    const headerStyle={textAlign:'center',padding:20,background:'blue',textTransform:'uppercase',color:'white'}
    return(
        <div style={headerStyle}>
            {props.heading}
        </div>
        )
}


export default Header;