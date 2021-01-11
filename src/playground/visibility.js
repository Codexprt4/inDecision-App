class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility : false
        }
    }
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            };
        });

    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                {this.state.visibility && (
                   <div>
                   <p>Hey..Some details you can see now!!</p>
                   </div>
               )}
            </div>
        );
    }
}
ReactDOM.render(<Visibility/>, document.getElementById("app"));

// console.log("For Test");

// let visibility = false;

// const content = {
//     title : "Visibility Toggle",
//     sub : ''
// }
// const onSubmitHide = () => {

//     visibility = !visibility;
//     renderApp();
// }

// const renderApp = () => {
// const template = 
//     <div>
//         <h1>{content.title}</h1>
//         <button onClick={onSubmitHide}>
//             {visibility ? "Hide Details" : "Show Details"}
//         </button>

//             {visibility && (
//                 <div>
//                 <p>Hey..Some details you can see now!!</p>
//                 </div>
//             )}
//     </div>; 
//     ReactDOM.render(template, appRoot);
// }
// const appRoot = document.getElementById("app");
// renderApp();