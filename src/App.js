import './App.css';
import ButtonOne from './ButtonOne/Button';
import ButtonTwo from './ButtonTwo/Button';
import ButtonThree from './ButtonThree/Button';
import ButtonFour from './ButtonFour/Button';
import ButtonFive from './ButtonFive/Button';

function App() {
  const styles = {
    backgroundColor: 'blue',
    color: 'yellow',
    borderRadius: '10px',
    hoverBackgroundColor: 'yellow',
    hoverColor: 'red',
  };
  return (
    <div className="App">
      <ButtonOne stylesObject={styles}>Button One is here</ButtonOne>
      <ButtonTwo stylesObject={styles}>Button Two is here</ButtonTwo>
      <ButtonThree stylesObject={styles}>Button Three is here</ButtonThree>
      <ButtonFour stylesObject={styles}>Button Four is here</ButtonFour>
      <ButtonFive stylesObject={styles}>Button Five is here</ButtonFive>
    </div>
  );
}

export default App;
