import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";

import { Login } from "../components/Login/Login";
import { DashBoard } from "../components/DashBoard/DashBoard";

export const Authenticator = () => {


    const token = window.localStorage.getItem("@TOKEN")

    if(!token) {
        return (
            <>
                <Route path="/" >
                    <Login />
                </Route>
            </>
        )
    }

    return (
        <>
            <Route path="/dashboard">
                <DashBoard />
            </Route>
        </>
    )


}  

