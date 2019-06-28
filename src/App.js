import React from 'react';
import './App.css';

const uuidv4 = require('uuid/v4');

const dishesNationalities = ['Mexican', 'Dominican','Ecuatorian', 'Peruvian', 'Colombian'];



const dishes = [

  {       
    id: uuidv4(),
    nationality : 'mexican',
    name : 'enchiladas',
    description : 'Tortillas con mole poblano, pollo, crema y queso',
    price : 10,
    ordered : 0  
  },
    
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'pozole',
    description : 'Maiz pozolero en un caldo picante con carne de puerco, oregano, cebolla y tostadas',
    price : 12,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Tacos dorados de pollo',
    description : 'Tortilla dorada con pollo, lechuga, jitomate y salsa',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Pernil',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Estofado de mariscos',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Moro',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Ceviche',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Llapingachos',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Uchumanga',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Lomo saltado',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Rocoto relleno',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Aji de gallina',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Bandeja paisa',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Fritanga',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Arepas',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0
  },

];

let cloneDishes = [...dishes];


function App() {
  return (


      <DashboardFood 
      />

      
      
    
  );
}

class DashboardFood extends React.Component{
  

  state ={
    total : 0,
    isOpenFoodList : true,
    isOpenDishesDashboard : true,
    kindOfFood : dishesNationalities[0],
    viewOrderButton : true,
    viewOrder : false
  }

  handleOpenViews = (kindFood) => {
    this.setState(
      {
        isOpenFoodList:true, 
        isOpenDishesDashboard:true,
        kindOfFood : kindFood
      });
  }


  handleCloseDashboardFood = () => {
    this.setState(
      {
        isOpenDishesDashboard:false   
      }
    );
  }

  handleIncrementTotal = (ammount) => {

    this.setState({
      total : this.state.total + ammount
    });

    
  }


  handleDecrementTotal = (ammount) => {
    this.setState({
      total : this.state.total - ammount
    });
  }

  handleOpenFoodList = () => {
    this.setState({
      isOpenFoodList:true
    });
  }

  handleCloseFoodList = () => {
    this.setState(
      {
        isOpenFoodList:false
      }
    );
  }
  
  handleOpenOrder = () => {
    this.setState({
      viewOrder : true,
      isOpenDishesDashboard: false,
      isOpenFoodList: false,
      viewOrderButton: false
    });
  }

  closeOrder = () => {
    this.setState({
      viewOrder: false,
      isOpenFoodList: true,
      viewOrderButton: true,
      isOpenDishesDashboard: true    
    });
  }

  handleUpdateTotal = (ammount) => {
    this.setState({
      total : this.state.total - ammount
    });
  }

  render(){


    //console.log(this.state.kindOfFood);
    return(
      <div>
        <Total
           total = {this.state.total} 
         />
        <FoodsList 
          isOpen={this.state.isOpenFoodList}
          openFoodList = {this.handleOpenViews}
        />
        <DishesDashboard
          total = {this.state.total} 
          isOpen= {this.state.isOpenDishesDashboard}
          kindOfFood={this.state.kindOfFood}
          closeDashboardFood={this.handleCloseDashboardFood}
          incrementTotal = {this.handleIncrementTotal}
          decrementTotal = {this.handleDecrementTotal}
          openFoodList={this.handleOpenFoodList}
        />

        <ViewOrderButton 
          //viewOrderButton={this.state.viewOrderButton}
          total={this.state.total}
          handleOpenOrder={this.handleOpenOrder}
          viewOrderButton={this.state.viewOrderButton}
          
        />

        <Order 
          handleOpenOrder={this.state.viewOrder}
          handleCloseOrder={this.closeOrder}
          total={this.state.total}
          handleUpdateTotal={this.handleUpdateTotal}
        />

      </div>
      
    );


  }
}


class ViewOrderButton extends React.Component{
  render(){
    if(this.props.total > 0 && this.props.viewOrderButton){
      return(
        <div>
          <button
            onClick={this.props.handleOpenOrder}
          >View Order {this.props.total} </button>
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
}

class Order extends React.Component{

  state = {
    updateOrder : false,
    emptyBag : false,
  }

  handleDeleteDish = (id) => {
    

    for(let i = 0; i < cloneDishes.length; i++){
      if(cloneDishes[i].id === id){
        
        let cantidad = cloneDishes[i].price * cloneDishes[i].ordered;
        cloneDishes[i].ordered = 0;
        this.props.handleUpdateTotal(cantidad)

      }
    }



    this.setState({
      updateOrder : true
    });
  }

    
  render(){
    const dishesOrdered = cloneDishes.filter(dish => dish.ordered > 0);
    
    //console.log(dishesOrdered);

    if(this.props.handleOpenOrder && this.props.total > 0){
      return(

        <div>
           <div>Your order!</div>
          
          <div>
            <ul>
              {
                dishesOrdered.map((item,index) => {
                  return (
                  <li 
                            key={index}>{item.name} X {item.ordered} .....{item.ordered * item.price} 
                  
                  
                  
                  <button
                    onClick={() => this.handleDeleteDish(item.id)}

                  >Borrar</button>
                  
                  </li>  )
                })
              }
            </ul>
          </div>

          <div>
            TOTAL: {this.props.total}
          </div>
          
          <div>
            <button                    
              onClick={this.props.handleCloseOrder}
            >
              Atras
            </button>
          </div>
      </div>

      );
    } else if(this.props.total === 0 && this.props.handleOpenOrder) {
      return(
        
        <div>        <div>Tu bolsa esta vacia!</div>
        <div>
        <button                    
          onClick={this.props.handleCloseOrder}
        >
          Atras
        </button>
      </div>
      </div>

      );
    } else {
      return(
        <div></div>
      );
    }

  }




}





class Total extends React.Component{
  

  
  render(){
    return(
      <div>
        {this.props.total}
      </div>
    );
  }
}


class FoodsList extends React.Component{
  
  render(){

    const dishesCountries = dishesNationalities.map((country) => (
      <Food 
        id= {uuidv4()}
        key={uuidv4()}
        title={country}
        openFoodList = {this.props.openFoodList}

      />
    ));
    if(this.props.isOpen)
    {
      return(
        <div className='foodListContainer'>
          {dishesCountries}        
        </div>
      );
    } else{
      return(
        null
      );
    }
  }
}


class Food extends React.Component{
  
  handleOpenFoodList = () => {
    this.props.openFoodList(
      this.props.title
    );
  }
  
  render(){

    return(
      <div className='foodContainer'>
        <button
        onClick={this.handleOpenFoodList}
        >
          {this.props.title}
        </button>
      </div>
    );
  }
}


class DishesDashboard extends React.Component{
  

  handleCloseDishesDashboard = () => {
    this.props.closeDashboardFood();
    this.props.openFoodList();
  }


  render(){
    if(this.props.isOpen){
      return(
        <div>
          <DishesList 
            kindOfFood={this.props.kindOfFood}
            incrementTotal={this.props.incrementTotal}
            decrementTotal={this.props.decrementTotal}
            dishesCountries={this.props.decrementTotal} 
          />
         
          
        </div>
      );
    } else{
      return(
        <div></div>
      );
    }
  } 
    
}






class DishesList extends React.Component{
  
  

  render(){
    
    console.log(this.props.kindOfFood);

    const dishesList = cloneDishes.filter( dish => dish.nationality.toLowerCase() === this.props.kindOfFood.toLowerCase()).map((dish) => (
    
      
    <Dish 
      id={dish.id}
      key={uuidv4()}
      nationality={dish.nationality}
      title={dish.name}
      description={dish.description}
      price={dish.price}
      ordered = {dish.ordered}
      incrementTotal = {this.props.incrementTotal}
      decrementTotal = {this.props.decrementTotal}
      />
      
    ));


  
      return(      
        <div>
              
          {dishesList}

        </div>
      );
    
  }
}

class Dish extends React.Component{
  

  state = {
    ordered : this.props.ordered
  }


  handleIncrementTotal = (ammount) => {
    this.props.incrementTotal(ammount);
  }

  handleDecrementTotal = (ammount) => {
    this.props.decrementTotal(ammount);
  }

  increase = () => {
    for(let i = 0; i < cloneDishes.length; i++){
      if(cloneDishes[i].id === this.props.id){
        cloneDishes[i].ordered = ++cloneDishes[i].ordered;
        this.setState({
          ordered : cloneDishes[i].ordered
        });
        this.handleIncrementTotal(cloneDishes[i].price);
      }
    }

  }

  decrease = () => {
    for(let i=0; i < cloneDishes.length; i++){
      if(cloneDishes[i].id === this.props.id){

        if(cloneDishes[i].ordered >= 1) {
          cloneDishes[i].ordered = --cloneDishes[i].ordered;
          this.handleDecrementTotal(cloneDishes[i].price);
        } else {
          cloneDishes[i].ordered = 0;
        }
        this.setState({
          ordered : cloneDishes[i].ordered
        });
      }
    }
  }
  
  
  render(){
    return(
      <div>
        {this.props.nationality}
        {this.props.title}
        {this.props.description}
        {this.props.price} Ordered : 
        {this.state.ordered} 
        <button 
          onClick= {this.increase}
        >+</button>
        <button
          onClick = {this.decrease}
        >
        
        -</button>
        
      </div>
    );
  }
}


export default App;
