import styles from './Product.module.css'


function Header() {
    return (
    <header>
      <div className= {styles.header}>
        {/* <h1>
            Simple React Application
        </h1> */}
        <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
        </nav>
      </div>
    </header>
    );
  }
  
  export default Header;