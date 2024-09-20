// App.js
import React, { useState } from 'react';
import ItemCard from './components/ItemCard';
import ExpensiveComponent from './components/ExpensiveComponent';
import InfiniteScroll from './components/InfiniteScroll';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar'; // Import Navbar

const App = () => {
  // State for ExpensiveComponent
  const [data, setData] = useState('Initial Data');
  const [count, setCount] = useState(0);

  // Render function for InfiniteScroll items
  const renderItem = (item) => <ItemCard key={item.id} item={item} />;

  return (
    <div className="app">
      {/* Navbar Component */}
      <Navbar />

      {/* ExpensiveComponent Example */}
      <section>
        <h1>Expensive Component Example</h1>
        <ExpensiveComponent data={data} />
        <button onClick={() => setCount(count + 1)}>Increment Count ({count})</button>
        <button onClick={() => setData('Updated Data')}>Update Data</button>
      </section>

      {/* Signup Form Example */}
      <section>
        <h1>Signup Form Example</h1>
        <SignupForm />
      </section>

      {/* Infinite Scrolling Example */}
      <section>
        <h1>Infinite Scrolling Example</h1>
        <InfiniteScroll renderItem={renderItem} />
      </section>
    </div>
  );
};

export default App;
