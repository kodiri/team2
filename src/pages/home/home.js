import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Content from '../../components/content/content';
import Footer from '../../components/Footer/footer.js';
import './home.scss';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default Home;