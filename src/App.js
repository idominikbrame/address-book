import './App.css';
import {useEffect, useState} from "react";
import Contacts from "./Contact";

const API_URL = "https://randomuser.me/api?results=25"

function App() {
    const [addressBook, setAddressBook] = useState([])

    useEffect(() => {
        console.log("I mounted")

        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setAddressBook(data.results))
    }, [])

    useEffect(() => {
        console.log(addressBook)
    }, [addressBook])


  return (
    <div className="App">
        <ul>
            {addressBook.map((contact, index) => {
                return (<Contacts contact={contact} index={index}/>)
            })}
        </ul>
    </div>
  );
}

export default App;
