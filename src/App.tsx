import {Box, ChakraProvider, Grid, GridItem, useDisclosure} from "@chakra-ui/react";

import theme from "./theme";

import {
    BrowserRouter as Router,
    Switch,
    Route,

    // @ts-ignore
} from "react-router-dom";
import Roadmap from "./pages/Roadmap";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Faq from "./pages/Faq";
import Mint from "./pages/Mint";
import Game from "./pages/Game";
import * as React from "react";
import Layout from "./components/Layout";

import "@fontsource/orbitron";

function App() {

    return (
        <ChakraProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/about">
                            <Roadmap/>
                        </Route>
                        <Route path="/roadmap">
                            <Roadmap/>
                        </Route>
                        <Route path="/info">
                            <Info/>
                        </Route>
                        <Route path="/faq">
                            <Faq/>
                        </Route>
                        <Route path="/mint">
                            <Mint/>
                        </Route>
                        <Route path="/game">
                            <Game/>
                        </Route>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ChakraProvider>
    );
}

export default App;
