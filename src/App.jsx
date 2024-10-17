import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { GiRotaryPhone } from "react-icons/gi";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>
        <GiRotaryPhone className={"phonebook-logo"} />
        Phonebook
      </h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
