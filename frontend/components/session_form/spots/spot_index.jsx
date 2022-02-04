import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpots();
        window.scrollTo(0, 0);
        
    }

    render() {
        const { spots } = this.props;
        return(

            <div>
                <div className='welcome'>                 
                    <h1>Find yourself outside.</h1>
                    <p>Discover and book tent camping, RV</p>
                    <p>parks, cabins, treehouses, and glamping.</p>
                
                </div>
                <div className='spot-index'>
                    {spots.map(spot => (
                        <SpotIndexItem
                            spot={spot}
                            key={spot.id}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default SpotIndex; 