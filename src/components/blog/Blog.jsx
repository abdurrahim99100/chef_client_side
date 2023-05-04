import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto my-40'>
            <h1>Question(1): -Tell us the differences between uncontrolled and controlled components.</h1>
            <p>Ans:- In React, there are two ways to handle form data in our components. The first way is by using the state within the component to handle the form data. This is called a controlled component. The second way is to let the DOM handle the form data by itself in the component. This is known as an uncontrolled component12.
                The primary difference between a controlled component vs an uncontrolled component is related to how they handle their value. Uncontrolled components pass down the value through props. In contrast, controlled components use state to handle the value internally3.</p>

            <h1 className='mt-10'>Question(2):- How to validate React props using PropTypes.</h1>
            <p>Ans:- You can use PropTypes to validate the props passed to a component in React. PropTypes is a package that comes with React and it allows you to specify the type of each prop that your component is expecting.</p>

            <h1 className='mt-10'>Question(3):- Tell us the difference between nodejs and express js.</h1>
            <p>Ans:- Node.js is a platform for building server-side applications using JavaScript. It is an open-source, cross-platform runtime environment that executes JavaScript code outside of a web browser1. Express.js is a framework based on Node.js that provides a set of features for building web and mobile applications2.
            The main difference between Node.js and Express.js is that Node.js is a runtime environment while Express.js is a framework. Node.js provides the core functionality for building server-side applications, while Express.js provides additional features on top of Node.js to make it easier to build web and mobile applications1.</p>


            <h1 className='mt-10'>Question(4):- What is a custom hook, and why will you create a custom hook?</h1>
            <p>Ans:- A custom hook is a JavaScript function that starts with the word “use” and may call other hooks. It allows you to extract some component logic into a reusable function. Custom hooks are a handy way to encapsulate hook-related logic that can be re-used across components when using component composition isn’t really something that will help, make sense, or just “look” semantically right1.</p>

        </div>
    );
};

export default Blog;