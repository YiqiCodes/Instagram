import styled from "styled-components";

export const FeedOverall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FeedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 375px;
  height: 123px;
`;

export const FeedIndividual = styled.div`
  width: 33.2%;
  height: 100%;
  background: slategray;
  border: 1px solid black;
`;

export const FeedIndividualLarge = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
`;

export const FeedPost = styled.img`
  width: 100%;
  height: 100%;
`;
