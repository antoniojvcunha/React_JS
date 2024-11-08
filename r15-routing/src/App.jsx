import { Link, Route, Switch} from "wouter";
import ContactsView from "./views/ContactsView"
import HomeView from "./views/HomeView"
import Header from "./views/Header";

function App() {

  return (
    <>
    <Header />
    <Switch>
      <HomeView path="/" component={HomeView}/>
      <ContactsView path="/contacts" component={ContactsView} />
    </Switch>
     
    </>
  )
}

export default App
