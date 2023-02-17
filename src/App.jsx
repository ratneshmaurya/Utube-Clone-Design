import React from "react";
import "./index.css";
import "./App.css"; /* for flexing sidebar and main screen*/
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import SearchPage from "./SearchPage";
import {BrowserRouter as Router,Switch ,Route} from "react-router-dom";
const App=()=>{
    return (
        <>
        <div className="app">
            {/* header */}
            
            <Router>
            <Header/> {/* always shows ,not dependent on switch */}
                <Switch>
                    <Route path="/search/:input_wala_word">
                        <div className="app__page">
                            <Sidebar/>
                            <SearchPage/>
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app__page">
                            <Sidebar/>
                            <RecommendedVideos/>
                        </div>
                    </Route>
                </Switch>
            </Router>

            

        </div>
        </>
    );
}
export default App;