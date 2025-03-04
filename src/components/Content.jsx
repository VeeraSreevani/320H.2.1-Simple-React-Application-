import styles from './Product.module.css'
import './App.css'


function Content(props) {
    return (
      <div className = {styles.content}>
        {/* <p>
        This is my first React Application, wish me luck!
        </p> */}
        <p style={{color: props.color, fontSize: '20px'}}>
            {props.text}

        </p>
      </div>
    );
  }
  
  export default Content;