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

  render() {
    return (
      <div className="App">
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
          </tr>
        </thead>
        <tbody>
              {this.state.myContacts.map(contact => {
                return (
                  <tr key={contact.id}>
                      <td> <img src={contact.pictureUrl} alt={contact.name} /> </td>
                      <td> {contact.name} </td>
                      <td> {contact.popularity} </td>
                  </tr>
                  )
              })}
        </tbody>
        </table>
        <button onClick={this.addRandomContact} > Add Random Contact</button>
      </div>
    );
  }
}

export default App;
