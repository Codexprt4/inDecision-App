import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/style.scss';


ReactDOM.render(<IndecisionApp/>, document.getElementById("app"));


//PASSING BY CHILDREN

// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     );
// };



// ReactDOM.render(
//     <Layout>
//         <div>
//             <h1>Hello There</h1>
//             <p>This is form Inline..</p>
//         </div>
//     </Layout>
// , document.getElementById("app")
// );
// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting(){
//         return `Hi! I'm ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi! I'm ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newgetGreeting = newSyntax.getGreeting;
// console.log(newgetGreeting());