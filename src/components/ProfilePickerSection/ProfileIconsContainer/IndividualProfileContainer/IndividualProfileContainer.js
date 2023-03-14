import './IndividualProfileContainer.css';
import IndividualProfileContainerImage from './IndividualProfileContainerImage/IndividualProfileContainerImage';
import IndividualProfileContainerName from './IndividualProfileContainerName/IndividualProfileContainerName';

const IndividualProfileContainer = props => {
    return (
        <div className='individualProfileContainer h-100 w-25 d-flex flex-column justify-content-between align-items-center'>
            <IndividualProfileContainerImage image={props.image}/>
            <IndividualProfileContainerName name={props.name}/>
        </div>
    )
}

export default IndividualProfileContainer;