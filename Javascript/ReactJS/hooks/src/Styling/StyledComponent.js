import React from "react";
import styled from "styled-components";
function StyledComponent() {
  const StyledDiv = styled.div`
    width: 80%;
    border: 1px solid black;
    padding: 10px;
    margin: 30px;
    border-radius:8px;
    :hover{
        background-color:lightgreen;
    }
  `;
  return (
    <StyledDiv>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        voluptatem debitis quos similique amet aperiam, deleniti molestias fuga
        modi neque repellat! Quibusdam quam commodi eos nam, vitae ea? Molestiae
        excepturi ipsam dolorum nihil esse ipsa aperiam iste architecto
        inventore reprehenderit!
      </p>
      <button>More Details</button>
    </StyledDiv>
  );
}

export default StyledComponent;
