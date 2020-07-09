import styled from "styled-components"

const StyledComponent = styled.div`
    max-width: ${({theme}) => theme.container}px;
    margin: 0 auto;
    background: red;
    /* width: 200px; */
`;

export default StyledComponent;