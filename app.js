let GroceryList = (props) => {
    
    let onListItemClick = (event) => {
          console.log('I got clicked');
      };

    return (
      <ul>
        <li onClick={onListItemClick}>{ props.list[0] }</li> 
        <li>{ props.list[1] }</li> 
        <li>{ props.list[2] }</li> 
    </ul>
    );
}


let App = () => (
    <div>
        <h1>My Grocery List</h1>
        <GroceryList list= { ['hemp seeds', 'almonds', 'bananas'] }/>
    </div>
  );

ReactDOM.render(<App />, document.getElementById("app"));
