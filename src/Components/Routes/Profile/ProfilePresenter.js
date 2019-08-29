import styled from 'styled-components';
import React from 'react';

const EXAMPLE = "https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg";

const Div = styled.div`
    display:grid;
    justify-items:center;
`

export default ()=>{
    return(
    <Div>
        <img src={EXAMPLE} alt="IDK" title="BEN"></img>
        <p>NAME : BEN</p>
        <p>JOB : NOT SPECIFIED</p>
    </Div>
    )
}