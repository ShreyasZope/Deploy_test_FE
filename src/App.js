import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch('http://localhost:5000/create', {  // Send POST request to /create
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, age })
      });

      if (response.ok) {
        const data = await response.json(); // Get the returned users
        setUsers(data); // Update the users state
        setMessage('User created successfully!'); // Display success message
        setName(''); // Clear input fields
        setEmail('');
        setAge('');

      } else {
        // Handle errors (e.g., display an error message)
        const errorData = await response.text(); // Get error from server
        setMessage(`Error: ${errorData || response.statusText}`);

      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred during the request."); // Display error message for network issues, etc.
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={e => setAge(e.target.value)} required />
        </div>
        <button type="submit">Create</button>
      </form>

      {/* Display the list of users */}
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            Name: {user.name}, Email: {user.email}, Age: {user.age}
          </li>
        ))}
      </ul>

        <div id="message">{message}</div> {/* Display success or error messages */}

    </div>

  );
}

export default App;

