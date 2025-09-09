const Contact = () => {
  const person = "";
  
  const contacts = [
    {
      id: "id-1",
      name: "Rosie Simpson",
      number: "459-12-56",
    },
    {
      id: "id-2",
      name: "Hermione Kline",
      number: "443-89-12",
    },
    {
      id: "id-3",
      name: "Eden Clements",
      number: "645-17-79",
    },
    {
      id: "id-4",
      name: "Annie Copeland",
      number: "227-91-26",
    },
  ];
  
  //? Determine the id of the contact
  const idN = contacts.map((contact) => {
    return Number(contact.id.slice(3));
    
  });
  
  console.log(idN.length);
  
  console.log("idN",
              idN);
  
  const newId = idN.length + 1;
  
  console.log(newId);
  
  
};


export default Contact;