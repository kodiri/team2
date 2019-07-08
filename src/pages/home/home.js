import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Content from '../../components/content/content';
import './home.scss';
import Footer from '../../components/Footer/footer.js';


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