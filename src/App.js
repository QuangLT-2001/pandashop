import "./App.css"
import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Header from './container/Header';
import Login from './container/Components/login';
import Register from "./container/Components/register"
import Home from './container/Home';
import FooterWare from './container/Product/Component/FootWare';
import Footer from "./container/Components/Footer";
import Introduce from "./container/Components/Introduce";
import Clothes from "./container/Product/Component/Clothes";
import Accessory from "./container/Product/Component/Accessory";
import { useEffect, useState } from 'react';
import ProductAll from "./container/Product/Component/All"
import Error from "./container/Components/Error";
import Detail from "./container/Detail";
import Post from "./container/ListPost"
import PostDetail from "./container/PostDetail";
import Cart from "./container/Cart";
import Service from "./container/Components/Sevice";
import Contact from "./container/Components/Contact";
import Scroll from "./container/Components/Scroll";
import ChangeColor from "./container/ChangeColor";
import Pay from "./container/Pay";

import Screen from "./container/Components/Screen";
const App = props => {
  const [checkScreen, setCheckScreen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize)
    setCheckScreen(width < 300)
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [width])
  if (checkScreen) return <Screen />
  return (
    <>
      <Router hashType='noslash'>
        <Header color="#ee4d2d" />
        {/* <PayIcon /> */}
        <Scroll />
        <ChangeColor />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dang-ky" component={Register} />
          <Route exact path="/dang-nhap" component={Login} />
          <Route exact path="/gioi-thieu" component={Introduce} />
          <Route exact path="/san-pham/giay-dep" component={FooterWare} />
          <Route exact path="/san-pham/quan-ao" component={Clothes} />
          <Route exact path="/san-pham/phu-kien-khac" component={Accessory} />
          <Route exact path="/san-pham" component={ProductAll} />
          <Route exact path="/san-pham/:id" component={Detail} />
          <Route exact path="/tin-tuc" component={Post} />
          <Route exact path="/tin-tuc/:id" component={PostDetail} />
          <Route exact path="/gio-hang" component={Cart} />
          <Route exact path="/dich-vu" component={Service} />
          <Route exact path="/lien-he" component={Contact} />
          <Route exact path="/don-hang" component={Pay} />
          <Route exact component={Error} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
