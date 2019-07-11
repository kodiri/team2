import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer.js';
import CSSPlaylist from '../../components/youtubeplayer/CSSPlaylist';

class CSS extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <CSSPlaylist />
                <Footer />
            </div>
        )
    }
}

export default CSS;