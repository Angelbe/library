import styled from "styled-components";

const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: [page-start]25% [main-start] 50% [main-end] 25% [page-end];
  grid-template-rows: [header-start] 10% [header-end main-start] 80% [main-end footer-start] 10% [footer-end];
  height: 100vh;
  min-height: 100vh;
  padding: 0 5em 0 5em;
`;

const HomeHeader = styled.header`
  grid-row: header-start / header-end;
  grid-column: page-start / page-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeMain = styled.main`
  grid-row: main-start / main-end;
  grid-column: main-start / main-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 25px;
`;

const HomeFooter = styled.footer`
  grid-row: footer-start / footer-end;
  grid-column: page-start / page-end;
  width: 100%;
  height: 100px;
  align-self: baseline;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  div {
    margin-top: 10px;
  }
`;

const ReturnArrow = styled.div`
  cursor: pointer;
  margin-top: 25px;
  grid-row: main-start / main-end;
  grid-column: page-start / main-start;
  display: flex;
  justify-content: flex-end;
`;

export { HomeMain, HomeFooter, HomeContainer, HomeHeader, ReturnArrow };
