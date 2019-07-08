import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Content from '../../components/content/content';
import './home.scss';


class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Content />
            </div>
        )
    }
}

export default Home;