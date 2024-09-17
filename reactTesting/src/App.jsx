import Card from './components/Card'

function App() {
    return (
      <>
        <Card iconUrl='../src/assets/cardIconDev.png' name={false} description='Web architect | Frontend developer | React master' />
        <Card iconUrl='../src/assets/cardIconDev.png' name='Ivan' description='No job' />
      </>
    );
}

export default App