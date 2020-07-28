import React from 'react';

function buttonlink(props) {
    return (
      <a href={props.href} className={props.className}>
           Novo video
      </a>
    );
}
export default buttonlink;