import { Link } from "wouter";

function Header() {
    return(
        <>
         <h1>yo</h1>
        <nav>
          <Link href="/">HomePage</Link> | {""}
          <Link href="/contacts">Contacts</Link>
        </nav>
        </>
    )
}

export default Header;