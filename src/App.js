import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    myContacts: contacts.slice(0, 5)
  }

addRandomContact = () => {
  let randomContactIndex = Math.floor(Math.random() * contacts.length) 
  let randomContact = contacts[randomContactIndex]  
  let contactsCopy = this.state.myContacts.concat(randomContact)

  this.setState({
    myContacts: contactsCopy
  })

  }

sortByName = () => {
  let contactsCopy = [...this.state.myContacts]
  contactsCopy.sort(function(a, b){return a.name.localeCompare(b.name)}); 
 
  this.setState({
    myContacts: contactsCopy
  })
}

sortByPopularity = () => {
  let contactsCopy = [...this.state.myContacts]
  contactsCopy.sort(function(a,b) {return b.popularity - a.popularity});

  this.setState ({
    myContacts: contactsCopy
  })
}

deleteMovieHandler = (id) => {
  let contactsCopy = [...this.state.myContacts]
  const contactToRemove = contactsCopy.findIndex((item) => {
    return item.id === id;
  });
  contactsCopy.splice(contactToRemove, 1);

  this.setState({
    myContacts: contactsCopy
  });
}


  render() {
    return (
      <div className="App">
      <button onClick={this.addRandomContact} > Add Random Contact</button>
      <button onClick={this.sortByName} >Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
        <thead>
          <tr>
            <th>
              Picture
            </th>
            <th>
              Name
            </th>
            <th>
              Popularity
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
              {this.state.myContacts.map(contact => {
                return (
                  <tr key={contact.id}>
                      <td> <img src={contact.pictureUrl} alt={contact.name} /> </td>
                      <td> {contact.name} </td>
                      <td> {contact.popularity} </td>
                      <td> <button onClick={() => this.deleteMovieHandler(contact.id)} > Delete</button> </td>
                  </tr>
                  )
              })}
        </tbody>
        </table>
        

      </div>
    );
  }
}

export default App;
