import './App.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyPo from "./Components/MyPoPage/MyPo";
import SinglePoDetails from "./Components/MyPoPage/SinglePoDetails/SinglePoDetails";
import PoHistory from "./Components/MyPoPage/PoHistory/PoHistory";
import ManageProfile from "./Components/MyPoPage/ManageProfile/ManageProfile";
import People from "./Components/MyPoPage/People/People";
import Disclaimer from "./Components/Disclaimer/Disclaimer";
import WhoWeAre from "./Components/WhoWeAre/WhoWeAre";
import ContactPage from "./Components/ContactPage/ContactPage";
import Login from "./Components/LoginRegistration/Login/Login";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import NavBar from "./Components/LandingPage/NavBar/NavBar";
import CreateNewPo from "./Components/MyPoPage/CreateNewPo/CreateNewPo";
import Footer from "./Components/LandingPage/Footer/Footer";
import RootBrand from "./Components/MyPoPage/RootBrand/RootBrand";
import MessageCenter from "./Components/MyPoPage/MessageCenter/MessageCenter";
import ForgetPassword from "./Components/LoginRegistration/ForgetPassWord/ForgetPassword";
import MultiStepsRegistrationForm
    from "./Components/LoginRegistration/MultiStepsRegistrationForm/MultiStepsRegistrationForm";
import CongratulationBox from "./Components/LoginRegistration/CongratulationBox/CongratulationBox";

function App() {
    const routes = [
        {
            path: "/myPo",
            sidebar: () => <RootBrand> </RootBrand>,
            main: () =>  <MyPo/>
        },
        {
            path: "/manageOffer",
            sidebar: () => <RootBrand> </RootBrand>,
            main: () =>  <MyPo/>
        },
        {
            path: "/poHistory",
            sidebar: () => <RootBrand> </RootBrand>,
            main: () =>  <PoHistory/>
        },
        {
            path: "/people",
            sidebar: () =><RootBrand> </RootBrand>,
            main: () => <People/>
        }
        ,
        {
            path: "/manageProfile",
            sidebar: () =><RootBrand> </RootBrand>,
            main: () => <ManageProfile/>
        }
        ,
        {
            path: "/messageCenter",
            sidebar: () =><RootBrand> </RootBrand>,
            main: () => <MessageCenter/>
        }
        ,
        {
            path: "/createNewPo",
            sidebar: () =><RootBrand> </RootBrand>,
            main: () => <CreateNewPo/>
        }
    ];

  return (
    <div className='pageContainer mx-auto'>
            <Router>
                <header className="custom-margin">
                    <NavBar/>
                </header>
                <hr className="solid"/>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-md-3">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.sidebar />}
                                    />
                                ))}
                            </Switch>
                        </div>
                        <div className="col-md-9 ">
                            <Switch>
                                {routes.map((route, index) => (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        exact={route.exact}
                                        children={<route.main />}
                                    />
                                ))}
                            </Switch>
                        </div>
                    </div>

                </div>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/signup">
                        <MultiStepsRegistrationForm/>
                    </Route>
                    <Route path="/forgetPassword">
                        <ForgetPassword/>
                    </Route>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route path="/congratulations">
                        <CongratulationBox/>
                    </Route>
                    <Route path="/home">
                        <LandingPage/>
                    </Route>
                    <Route path="/whoWeAre">
                        <WhoWeAre/>
                    </Route>
                    <Route path="/contact">
                        <ContactPage/>
                    </Route>
                    <Route path="/disclaimer">
                        <Disclaimer/>
                    </Route>
                    <Route path="/myPo:singlePoDetails">
                        <SinglePoDetails/>
                    </Route>

                </Switch>
                <Footer/>
            </Router>

        {/*<CompletedPoDetails></CompletedPoDetails>*/}



    </div>
  );
}

export default App;
