class GroceryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            done: false
        }
    }
    
     onListItemClick() {
         this.setState({
             done: !this.state.done
         });
      };

render(){
   let style = { textDecoration: this.state.done ? 'line-through' : 'none'
   };

    return (
        <li style = {style} onClick= {this.onListItemClick.bind(this)} onHover>{ this.props.item }</li> 
    );
  }
}


let App = (props) => (
    <div>
        <h1>My Grocery List</h1>
        <ul>
        {props.list.map((item,key) =>
        <GroceryList item= {item} key={key}/>
        )}
        </ul>
    </div>
  );

ReactDOM.render(<App list = {['hemp seeds', 'almonds', 'bananas']} />, document.getElementById("app"));
 