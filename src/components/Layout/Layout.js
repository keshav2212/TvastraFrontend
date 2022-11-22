import React from 'react';
import {Box,Container} from "@material-ui/core";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RootRouter from "../Router/RootRouter";
import useAuth from "./hooks/useAuth";
export default () => {
    const { isAuthenticated, handleLogin, handleLogout } = useAuth();

    return (
        <Box>
            <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />
            <Container maxWidth={false}>
                    <RootRouter isAuthenticated={isAuthenticated} onLogin={handleLogin}/>
            </Container>
            <Footer />
        </Box>
    )
};
