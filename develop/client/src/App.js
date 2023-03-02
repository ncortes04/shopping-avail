import './App.css';

function App() {
  const createUser = (userData) => {
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name:"joe", password:"yoo"}),
    });
  };
  const yo = {name:"joe", password:"mama"}
  return (
    <div className="App">
      <div>
        <button onClick={() => {
          createUser(yo)}}>Click to post</button>
      </div>
    </div>
  );
}

export default App;
