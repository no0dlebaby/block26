import { useEffect, useState } from 'react';

const SelectedContact = ({ contactId, onBackToList }) => {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContactDetails = async () => {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${contactId}`);
      const data = await response.json();
      setContact(data);
    };

    fetchContactDetails();
  }, [contactId]);

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Contact Details</h1>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <button onClick={onBackToList}>Back to List</button>
    </div>
  );
};

export default SelectedContact;