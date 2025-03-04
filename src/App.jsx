//import logo from './logo.svg';
//import Content from './components/Content';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product'
import products from './data/products';

function App() {
  return (
    <div>

      <h1>Store</h1>
      <Header/>
      <h2>Products</h2>
      <div>
          {
            products.map(item=> {
              return <Product {...item} key ={item.id}/>
                }
              )
          }
      </div>
      <hr />
      <Footer/>
    </div>
  );
}

export default App;


{/* <Content color="blue" text = "This is my First React Application" />
      <Content color="red" text="Wish me luck..." />
      <Content color="green" text="I think I've got it!" /> */}


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div> */}