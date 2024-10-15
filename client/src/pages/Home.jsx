import React from "react";
import { Alert } from 'antd';

const Home = () => {
    return <div className="home">
        <h1>Home page</h1>
        <p>Carousel</p>
        <p>Recommended Movies</p>
        <p>Live Events</p>
        <p>Tranding</p>
        <Alert message="Success Text" type="success" />
    </div>
}

export default Home;