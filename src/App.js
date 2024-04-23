import './App.css';

function App() {
  const containerStyle = {
    display: "flex",
    height: "40vh", 
    
  };

  const leftStyle = {
    flex: 1,
    backgroundColor: "yellow",
  
  };

  const rightStyle = {
    flex: 1,
    backgroundColor: "green",
  };

  return (
    <div className="App" style={containerStyle}>
      <div className="left" style={leftStyle}></div>
      <div className="right" style={rightStyle}></div>
    </div>
  );
}

export default App;
