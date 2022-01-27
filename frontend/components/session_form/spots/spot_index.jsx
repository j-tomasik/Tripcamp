import React from 'react';
import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpots();
    }

    render() {
        const { spots } = this.props;
        return(
            <div className='spot-index'>
                <h1>Discover new locations</h1>
                {spots.map(spot => (
                    <SpotIndexItem
                        spot={spot}
                        key={spot.id}
                    />
                ))}
            </div>
        )
    }
}

export default SpotIndex; 