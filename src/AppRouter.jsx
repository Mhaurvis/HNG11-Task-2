import React from "react";
import Landing from "./pages/landing";
import Sales from "./pages/sales";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

function AppRouter(){
    return(
            <Routes>
                <Route exact path="/" Component={Landing}></Route>
                <Route path="/sales" Component={Sales}></Route>
                <Route path="/contact" Component={Contact}></Route>
            </Routes>
    )
}

export default AppRouter;