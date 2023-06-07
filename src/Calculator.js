import Calculator from './components/CalculatorC';
import styles from './styles/Calculator.module.css';

const CalculatorPage = () => (
  <div className={styles.calc}>
    <h2>Lets do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
