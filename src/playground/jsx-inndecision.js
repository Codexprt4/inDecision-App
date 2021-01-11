//JSX
const app = {
    title : "Indecision App",
    subtitle : "TO-DO List",
    options : []
}
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp();
    }
};
const onRemoveAll = () => {
    app.options = [];
    renderApp();
}
const onMakeDecision = () => {
    const randomNr = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNr];
    alert(option);
}
const appRoot = document.getElementById("app");

const renderApp = () => {
    const template1 =
    <div>
        <h2>{app.title}</h2>
        {app.subtitle && <h4>{app.subtitle}</h4>}
        <p>{app.options.length > 0 ? 'Here is your List' : 'No Items Found'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onRemoveAll}>Remove All</button>
        {/* { {app.options.length > 0 ? <ol>
            <li>{app.options[0]}</li>
            <li>{app.options[1]}</li>
        </ol> : ""} 
         */}
        <ol>
        {
            app.options.map((items) => <li key={items}>{items}</li>)
        }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        
    </div>;
    ReactDOM.render(template1, appRoot);
}

renderApp();

