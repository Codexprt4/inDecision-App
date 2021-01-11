class IndecisionApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handelAddOption = this.handelAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options : []
        };
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        }catch(e){
            //Do Nothing
        }
        
    }
    componentDidUpdate(prevState) {

        console.log(prevState);
        
        if(prevState.options.length !== this.state.options.length){

            console.log(prevState.options.length, this.state.options.length);

            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }

    }
    handleDeleteOptions() {
        this.setState(() => ({ options : []}));
    }
    handleDeleteOption(optionToBeRemoved) {
        console.log("HDO", optionToBeRemoved);
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToBeRemoved !== option )//like map((option) => {}) each option will be checked
                 //return array with not including matched option 
            
        }));

    }
    handlePick() {
        const randomNr = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNr];
        alert(option);
    }
    handelAddOption(option){
        if(!option) {
            return 'Enter a valid Option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Option is already Added.';
        }
        this.setState((prevState) => ({ options : prevState.options.concat([option] )}));
    }
    
    render() {
        // const title = "Indecision App";
        const subtitle = "Put Your Life in the Hands of a computer";
        return (
            <div>
                <Header 
                    
                    subtitle={subtitle} 
                />
                <Action 
                    handlePick={this.handlePick} 
                    hasOptions={this.state.options.length > 0}
                />
                <Options 
                    handleDeleteOptions={this.handleDeleteOptions}  
                    options={this.state.options}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handelAddOption={this.handelAddOption}
                />
        </div>
        );
    }
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title : "Indecision"
};
// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Action = (props) => {
    return (
        <button 
            disabled={!props.hasOptions} 
            onClick={props.handlePick}>
            What should I do?
        </button>
    );
};
// class Action extends React.Component {
   
//     render() {
//         return (
//             <button 
//                 disabled={!this.props.hasOptions} 
//                 onClick={this.props.handlePick}>
//                 What should I do?
//             </button>
//         );
//     }
// }
const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started..</p>}

            {
                props.options.map((option) => 
                <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
                )
            }
            
            
        </div>
     ); 
};
// class Options extends React.Component {

//     render() {
//      return(
//         <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => 
//                 <Option key={option} optionText={option}/>
//                 )
//             }
            
            
//         </div>
//      );  
//     }
// }
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                    onClick={(e) =>{
                        props.handleDeleteOption(props.optionText);
                    }}
            >
                Remove
            </button>  
        </div>   
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
        
//                   Option: {this.props.optionText}
              
//             </div>   
//         );
//     }
// }
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handelAddOption = this.handelAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handelAddOption(e){       
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handelAddOption(option);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
               <form onSubmit={this.handelAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));