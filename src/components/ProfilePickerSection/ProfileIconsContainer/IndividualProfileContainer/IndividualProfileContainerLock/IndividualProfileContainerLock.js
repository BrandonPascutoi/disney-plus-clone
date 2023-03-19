import './IndividualProfileContainerLock.css';

const IndividualProfileContainerLock = props => {
    if (props.locked === true) {
        return (
            <img src={process.env.PUBLIC_URL + '/images/lock.png'}/>
        )
    } else if (props.locked === false) {
        return (
            <img style={{opacity: 0}} src={process.env.PUBLIC_URL + '/images/lock.png'}/>
        )
    }
}

export default IndividualProfileContainerLock;