import './IndividualProfileContainer.css';
import IndividualProfileContainerImage from './IndividualProfileContainerImage/IndividualProfileContainerImage';

const IndividualProfileContainer = props => {
    return (
        <div className='individualProfileContainer h-100 w-25'>
            <IndividualProfileContainerImage image={props.image}/>
        </div>
    )
}

export default IndividualProfileContainer;