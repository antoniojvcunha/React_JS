import MyList from "../../r5-moreListRendering/src/components/MyList"
import MyObjectList from "./components/MyObjectList";

function App() {
  const osList = ["Windows", "MacOS", "Linux"];
  const fruit = ["Apples", "Bananas", "Strawaberries", "Pears"];

  return (
    <>
      <h1>My Awesome </h1>
      <MyList listValues={osList} />
      <MyList listValues={fruit}/>
      <MyObjectList />
    </>
  )
}

export default App
