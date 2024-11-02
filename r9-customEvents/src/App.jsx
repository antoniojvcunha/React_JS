

function App() {
  const [counter, setCounter] = useState(0)

  function countUp() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div>Counter: {counter}</div>
      <button onClick={countUp}>COUNT + 1</button>
    </>
  );
}

export default App
