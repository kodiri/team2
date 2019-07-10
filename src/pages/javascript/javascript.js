import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer.js';
import YoutubePlayer from '../../components/youtubeplayer/yotubeplayer.js';
import './javascript.scss';

class JavaScript extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <YoutubePlayer />
                <Footer />
            </div>
        )
    }
}

export default JavaScript;