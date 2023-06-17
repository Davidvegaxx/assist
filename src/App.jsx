// import './App.css';
import '/App.css'
import Dynamic from './pages/Dynamic';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import Section from './pages/Section';
import Click from './pages/Click';
import Usestate from './pages/Usestate';
import List from './pages/List';

function App() {
  let color = 'red'
  
  return (
    <>
    <Dynamic/>
    <Footer newColor={color}/>
    <Navbar/>
    <Section newColor={color}/>
    <Click/>
    <Usestate/>
    <List newColor={color}/>

    </>
  )
}

export default App