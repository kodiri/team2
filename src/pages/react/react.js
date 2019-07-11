import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer.js';
import ReactPlaylist from '../../components/youtubeplayer/ReactPlaylist.js';

class ReactPage extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <ReactPlaylist />
                <Footer />
            </div>
        )
    }
}

export default ReactPage;