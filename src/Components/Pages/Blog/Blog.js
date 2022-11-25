import React from 'react';

const Blog = () => {
    return (
        <section className='container py-5'>
            <div className="row">
                <div className="col-12 mb-3">
                    <h2 className="fw-bolder">
                        1. What are the different ways to manage a state in a React application?
                    </h2>
                    <p className="fs-6">
                        There are four main types of state you need to properly manage in your React apps:

                        <ol>
                            <li className="li">Local state</li>
                            <li className="li">Global state</li>
                            <li className="li">Server state</li>
                            <li className="li">URL state</li>
                        </ol>
                    </p>
                </div>
                <div className="col-12 mb-3">
                    <h2 className="fw-bolder">
                       2. How does prototypical inheritance work?
                    </h2>
                    <p className="fs-6">
                        Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                    </p>
                </div>
                <div className="col-12 mb-3">
                    <h2 className="fw-bolder">
                     3. What is a unit test? Why should we write unit tests?
                    </h2>
                    <p className="fs-6">
                        Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        <p className='fw-bolder fs-4'>Why unit Test?</p>
                        <ol>
                            <li>
                            The earlier a problem is identified, the fewer compound errors occur.
                            </li>
                            <li>
                            Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                            </li>
                            <li>
                            Debugging processes are made easier.
                            </li>
                            <li>
                            Developers can quickly make changes to the code base.
                            </li>
                            <li>
                            Developers can also re-use code, migrating it to new projects.
                            </li>
                        </ol>
                    </p>
                </div>
                <div className="col-12 mb-3">
                    <h2 className="fw-bolder">
                     4. What is a unit test? Why should we write unit tests?
                    </h2>
                    <p className="fs-6">
                        Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended.

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                        <p className='fw-bolder fs-4'>Why unit Test?</p>
                        <ol>
                            <li>
                            The earlier a problem is identified, the fewer compound errors occur.
                            </li>
                            <li>
                            Costs of fixing a problem early can quickly outweigh the cost of fixing it later.
                            </li>
                            <li>
                            Debugging processes are made easier.
                            </li>
                            <li>
                            Developers can quickly make changes to the code base.
                            </li>
                            <li>
                            Developers can also re-use code, migrating it to new projects.
                            </li>
                        </ol>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;