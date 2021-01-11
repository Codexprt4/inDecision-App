class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            count : 0
        };
    }
    componentDidMount() {
        console.log(":MOunted");
      
            const stringCount = localStorage.getItem("count");
            const count = parseInt(stringCount, 10);
            if(!isNaN(count)){
                console.log(count);
                this.setState(() => ({ count }));
            }
    
    }
    componentDidUpdate(prevState) {
        console.log(":Updated");

        console.log(prevState.count,this.state.count);

        if(prevState.count !== this.state.count){
            console.log(prevState.count,this.state.count);

            localStorage.setItem("count", this.state.count);
        }

    }
    addOne() {
        // this.state.count = this.state.count +1;
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });     
    }
    minusOne() {
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        }); 
    }
    reset() {
        this.setState(() => {return { count : 0 };}); 
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
// Counter.defaultProps = {
//     count : 100
// };
ReactDOM.render(<Counter/>, document.getElementById("app"));



// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
//     // console.log("addOne",count++);
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
//     // console.log("-1",count--);
// };
// const reset = () => {
//     console.log("Reset");
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const template = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>        
//     );
//     ReactDOM.render(template, appRoot);
// };
// renderCounterApp();



//ANOTHER EX

// const user = {
//     name : "het",
//     age : 27,
//     location : "Rajkot"
// };
// function getLocation(location) {
//     if(location){
//         return <p>Location : {location}</p>;
        
//     }
// }
/*var userName = "Dipti";
var userAge = 26;
var userLocation = "Rajkot";*/
// const template2 = (
//     <div>
//         <h1>{user.name ? user.name.toLocaleUpperCase() : "Anonymous"}</h1>
//         {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
// const appTwoRoot = document.getElementById("app2");
// ReactDOM.render(template2, appTwoRoot);
