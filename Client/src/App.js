import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Trending from './components/Trending';
import ImportantProducts from './components/ImportantProducts';
import Software from './components/SoftWare';
import Cards from './components/Cards';
import XboxBestseller from './components/XboxBestseller';
import Ps from './components/Ps';
import Browse from './components/Browse';
import Footer from './components/Footer';
import SingleProductPage from './components/SingleProductPage';
import Cart from './components/Cart';
import LoginForm from './components/LogIn/Form';
import { useDispatch } from 'react-redux';
import { productsData } from "./redux/action";
import { useEffect, useState } from 'react';
function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        dispatch(productsData(data))
        setLoading(false)
        console.log(dispatch(productsData(data)))
      } catch (err) {
        console.log(err)
      }
    }
    fetchData("https://gamesk.herokuapp.com/products")
  }, [])

  return <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={
          loading ? <h2>Loading...</h2>
            : <><Header />
              <Trending />
              <ImportantProducts />
              <Software /><Cards />
              <XboxBestseller /><Ps />
              <Browse />
              <LoginForm /></>
        }>
        </Route>
        <Route exact path="/product/:id" element={<><ScrollToTop /><SingleProductPage /></>}></Route>
        <Route exact path="/cart" element={<><ScrollToTop /><Cart /></>}></Route>
      </Routes>
      <Footer />
    </Router>
  </>
}

export default App;
