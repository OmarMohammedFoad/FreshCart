
import './App.css'
import { NavBar } from './Components/NavBar/NavBar';
import { Header } from './Components/Header/Header'
import { Categories } from './Components/Categories/Categories';
import { Product } from './Components/Products/Products';

function App() {

  return (
    <>
        <NavBar />
        <Header/>
        <Categories/>
        <Product/>
        {/* {body} */}
        {/* <Footer/> */}
    </>
  )
}

export default App
