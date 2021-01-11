import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModel from './OptionModel';


class IndecisionApp extends React.Component{
    state = {
        options : [],
        selectedOptions : undefined
    };
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
     componentDidUpdate(prevProps, prevState) {        
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options : []}));
    };
    handleDeleteOption = (optionToBeRemoved) => {
        this.setState((prevState) => ({
            options : prevState.options.filter((option) => optionToBeRemoved !== option )//like map((option) => {}) each option will be checked
                 //return array with not including matched option 
        }));
    };
    handlePick = () => {
        const randomNr = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNr];
        
        this.setState(() => ({ selectedOptions : option}));

        // alert(option);
    };
    handelAddOption = (option) => {
        if(!option) {
            return 'Enter a valid Option';
        }else if(this.state.options.indexOf(option) > -1){
            return 'This Option is already Added.';
        }
        this.setState((prevState) => ({ options : prevState.options.concat([option] )}));
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOptions : undefined}));
    };
    
    render() {
        const subtitle = "Put Your Life in the Hands of a computer";
        return (
            <div>
                <Header  subtitle={subtitle} />
                <div className="container">
                    <Action 
                        handlePick={this.handlePick} 
                        hasOptions={this.state.options.length > 0}
                    />
                    <div className="widget">
                        <Options 
                            handleDeleteOptions={this.handleDeleteOptions}  
                            options={this.state.options}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handelAddOption={this.handelAddOption}
                        />
                    </div>
                </div>
                <OptionModel
                    selectedOptions={this.state.selectedOptions}
                    handleCloseModal={this.handleCloseModal}
                />
        </div>
        );
    }
}

export default IndecisionApp;