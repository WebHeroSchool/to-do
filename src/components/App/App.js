import React from 'react';
import ItemList from "../ItemList/ItemList";
import InputItem from "../InputItem/InputItem";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div>
            <h1 style = {{textAlign: 'center'}}>Hello!!!</h1>
            <InputItem/>
            <ItemList/>
            <Footer/>
        </div>
    )
};

export default App;