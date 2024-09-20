// ExpensiveComponent.js

// 3. What is React.memo?
// React.memo is a higher-order component (HOC) used to optimize the performance of functional components. It prevents unnecessary re-renders of a component by memoizing its output based on the props.

// How it works:

// React.memo compares the previous and next props. If they are the same, it skips re-rendering the component.
// It helps in optimizing performance for components that receive the same props frequently and don’t need to re-render.
// Implementation Example:

import React from 'react';

const ExpensiveComponent = React.memo(({ data }) => {
    console.log('Rendering ExpensiveComponent');
    return <div>{data}</div>;
});

export default ExpensiveComponent;
