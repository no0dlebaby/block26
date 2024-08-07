import "./App.css";
import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  const handleBackToList = () => {
    setSelectedContactId(null);
  };

  return (
    <>
      {selectedContactId === null ? (
        <ContactList setSelectedContactId={setSelectedContactId} />
      ) : (
        <SelectedContact
          contactId={selectedContactId}
          onBackToList={handleBackToList}
        />
      )}
    </>
  );
}