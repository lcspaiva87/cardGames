import React from 'react';
import styled from 'styled-components';

import Page from './componets/Page.js';
import Header from './componets/Header.js';
import Home from './componets/Home.js';
import Slide from './componets/Slide'
import Form from './componets/Form';
import  Footer from './componets/Footer.js';
function App() {
    return ( 
        <Page>
            <Header></Header>
            <Home></Home>
            <Slide></Slide>
            <Form></Form>
            <Footer></Footer>
        </Page>
        
    );
}

export default App;