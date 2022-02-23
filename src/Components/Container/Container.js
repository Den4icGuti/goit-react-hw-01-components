import styles from './Container.module.css';
import PropTypes from 'prop-types';

function Container({ children }) { 
   console.log(children)
   return (
     
     <div className={styles.container}>{children}</div>
   );
}

Container.propTypes = { 
 Container:PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Container;