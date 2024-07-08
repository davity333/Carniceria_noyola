import styled from "styled-components";

const TextS= styled.h1`
    font-size: 1.5em;
    color: #C13923;
    font-weight: bold;

`;
function Title({title}) {
    return ( <>
    <TextS>{title}</TextS>
    </> );
}

export default Title