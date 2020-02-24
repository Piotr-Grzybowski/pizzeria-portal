import React from "react";
import MainLayout from "./components/layout/MainLayout/MainLayout";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import HomePage from './components/views/HomePage/HomePage';
import BookingEvent from "./components/views/BookingEvent/BookingEvent";
import Tables from './components/views/Tables/Tables';
import Ordering from './components/views/Ordering/Ordering';
import NewOrder from './components/views/NewOrder/NewOrder';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';

const App = () => {
  return (
  <BrowserRouter basename={'/panel'}>
    <MainLayout>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomePage} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingEvent} />
        <Route exact path={`${process.env.PUBLIC_URL}/tables/event/:id`} component={BookingEvent} />
        <Route exact path={`${process.env.PUBLIC_URL}/ordering`} component={Ordering} />
        <Route exact path={`${process.env.PUBLIC_URL}/ordering/new`} component={NewOrder} />
        <Route exact path={`${process.env.PUBLIC_URL}/ordering/order/:id`} component={Order} />
        <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
  )
}

export default App;
