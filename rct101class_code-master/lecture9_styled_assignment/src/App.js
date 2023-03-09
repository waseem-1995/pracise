import logo from './logo.svg';

import styled from "styled-components";

const Appstyled=styled.div`
text-align: center;
`;
const header=styled.header `
 background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;`;
  
  const Applogo=styled.img `
   height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
  
  animation: App-logo-spin infinite 20s linear;

}
  `

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
