import MyList from "./components/MyList";
import MyObjectList from "./components/MyObjectList";

function App() {
  const osList = ["Windows", "MacOS", "Linux"];
  const fruit = ["Apples", "Bananas", "Strawberries", "Pears"];

  return (
    <>
      <h1>My Awesome App</h1>
      <MyList listValues={osList} />
      <MyList listValues={fruit} />
      <MyObjectList />
    </>
  );
}

export default App;