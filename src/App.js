import React from 'react';
import './App.css';

const uuidv4 = require('uuid/v4');

const dishesNationalities = ['Mexican', 'Dominican','Ecuatorian', 'Peruvian', 'Colombian'];



const dishes = [

  {       
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Enchiladas verdes',
    description : 'Sauced with salsa verde  made with white corn tortillas, filled with poached chicken.',
    price : 10,
    ordered : 0,
    imageUrl : 'https://github.com/fr4nkydevelop3r/latinFoodApp/blob/master/public/images/dishes/mexican/enchiladas.jpg?raw=true'  
  },
    
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Pozole',
    description : 'Soup made with pork, hominy, and red chiles.',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/mexican/pozole.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Quesadillas de papa',
    description : 'Crispy fried tacos filled with seasoned mashed potato.',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/mexican/tacos-dorados.jpg'  
  },
  {       
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Enchiladas verdes',
    description : 'Sauced with salsa verde  made with white corn tortillas, filled with poached chicken.',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/mexican/enchiladas.jpg'  
  },
    
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Pozole',
    description : 'Soup made with pork, hominy, and red chiles.',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/mexican/pozole.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'mexican',
    name : 'Quesadillas de papa',
    description : 'Crispy fried tacos filled with seasoned mashed potato.',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/mexican/tacos-dorados.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Pernil',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/dominican/pernil.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Estofado de mariscos',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/dominican/estofado-de-mariscos.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'dominican',
    name : 'Moro',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/dominican/moro.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Ceviche',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/ecuatorian/ceviche.jpeg'  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Llapingachos',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/ecuatorian/llapingachos.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'ecuatorian',
    name : 'Uchumanga',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/ecuatorian/uchumanga.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Lomo saltado',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/peruvian/lomo-saltado.jpg'  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Rocoto relleno',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/peruvian/rocoto-relleno.jpeg'  
  },
  {
    id: uuidv4(),
    nationality : 'peruvian',
    name : 'Aji de gallina',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/peruvian/aji-de-gallina.jpg'
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Bandeja paisa',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/colombian/bandeja-paisa.jpg'
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Fritanga',
    description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price : 12,
    ordered : 0,
    imageUrl : '/images/dishes/colombian/fritanga.jpeg'
  },
  {
    id: uuidv4(),
    nationality : 'colombian',
    name : 'Arepas',
    description : 'Lorem ipsum dolor sit amet',
    price : 10,
    ordered : 0,
    imageUrl : '/images/dishes/colombian/arepas.jpg'
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
    viewOrder : false,
    totalItems : 0
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
      total : this.state.total + ammount,
      totalItems: this.state.totalItems + 1
    });



    
  }

  handleDecrementTotal = (ammount) => {
    this.setState({
      total : this.state.total - ammount,
      totalItems: this.state.totalItems - 1
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

  handleUpdateTotal = (ammount, items) => {
    this.setState({
      total : this.state.total - ammount,
      totalItems : this.state.totalItems - items
    });
  }

  render(){


    //console.log(this.state.kindOfFood);
    return(
      <div className='mainContainer'>
        <div className='headerContainer'>
          
          <div className='totalItemsContainer'>
              <button
                className='shoppingButton'
                onClick={this.handleOpenOrder}
              ><i className="fas fa-shopping-cart"></i>
              </button>

              <TotalItems
                totalItems = {this.state.totalItems}
              />
          </div>
          
          <div className='logoContainer'>
            <img src='../images/logo.png' alt='logo' />
          </div>
          
        </div>
     
        
        <div className='countriesAndDishesContainer'>
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
        </div>

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
        <div className= 'viewOrderContainer'>
          <button
            className='viewOrderButton'
            onClick={this.props.handleOpenOrder}
          >View Order ${this.props.total} </button>
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
    let items = 0;

    for(let i = 0; i < cloneDishes.length; i++){
      if(cloneDishes[i].id === id){
        
        let cantidad = cloneDishes[i].price * cloneDishes[i].ordered;
        items = cloneDishes[i].ordered;
        cloneDishes[i].ordered = 0;
        this.props.handleUpdateTotal(cantidad,items)

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

        <div className='orderContainer'>
           
           <div className='atrasButtonContainer'>
            <button 
              className='atrasButton'                   
              onClick={this.props.handleCloseOrder}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>
           
           
           <div className='orderTitle'>Your order!</div>
          
          <div className='containerItemsList'>
            <ul>
              {
                dishesOrdered.map((item,index) => {
                  return (
                  <li 
                            key={index}> {item.ordered} {item.name} ${item.ordered*item.price} 
                  
                  
                  
                  <button
                    onClick={() => this.handleDeleteDish(item.id)}
                    className='trashButton'  
                  ><i className="far fa-trash-alt"></i></button>
                  
                  </li>  )
                })
              }
            </ul>
          </div>

          <div className='totalOrderContainer'>
            Total: ${this.props.total}
          </div>
          
   
      </div>

      );
    } else if(this.props.total === 0 && this.props.handleOpenOrder) {
      return(
        
        <div className='emptyBagContainer'>        
          
          <div className='atrasButtonContainer'>
            <button 
              className='atrasButton'                   
              onClick={this.props.handleCloseOrder}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className='emptyBag'>Tu bolsa esta vacia!</div>

      </div>

      );
    } else {
      return(
        <div></div>
      );
    }

  }




}


class TotalItems extends React.Component{
  

  
  render(){

    if(this.props.totalItems > 0){
      return(
        <div className='totalItems'>
          {this.props.totalItems}
        </div>
      );
    } else {
      return(
        <div></div>
      );
    }
    
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
        <div></div>
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

  codeCountry = (country) => {
    
    
    switch(country){
      case 'mexican':
        return 'MX';
      case 'dominican':
        return 'DR';
      case 'ecuatorian':
        return 'EC';
      case 'peruvian':
        return 'PE';
      case 'colombian':
        return 'CO';
      default :
        return ''
    }
  }
  
  render(){

    let classCountry = 'countryTitle';

    
   

    return(
      <div className='foodContainer'>
        <button 
        className={'btn background-'+ this.props.title.toLowerCase()}
        onClick={this.handleOpenFoodList}
        >  {this.codeCountry(this.props.title.toLowerCase())}
        </button>
        <div className={classCountry + ' ' + this.props.title.toLowerCase()}>
          <h1>{this.props.title.toUpperCase()} </h1>
        </div>
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
        <div className='containerDishesList'>
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
      imageUrl = {dish.imageUrl}
      />
      
    ));


  
      return(      
              <div className='dishesList'>{dishesList} </div>

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
      <div className='dish'>
        
        <div className='dishImage'>
          <img 
          src={this.props.imageUrl}
          alt={this.props.title}
          />
          <div className='description'>
            <p>{this.props.description}</p>
          </div>
        </div> 

      <div className={'dishContent background-' + this.props.nationality}>

      <div className='dishPrice'>
        {this.props.price}
      </div>

      <div className='dishTitleDescription'>
        <div className='dishTitle'>
            {this.props.title}
        </div>
        {/*<div className='dishDescription'>
             {this.props.description} 
        </div> */}
      </div>

      <div className='dishUpDownButtons'>
        
        <div className='upButton'>
          <button
            className='btnUpDown' 
            onClick= {this.increase}
          >+</button>
        </div>

        <div className='ordered'>
          {this.state.ordered}
        </div>

        <div className='downButton'>
          <button
            className='btnUpDown'
            onClick = {this.decrease}
          >-</button>
        </div>

      </div>

      </div>


        
      </div>
    );
  }
}


export default App;
