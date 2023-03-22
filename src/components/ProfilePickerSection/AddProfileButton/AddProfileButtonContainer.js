import './AddProfileButtonContainer.css';
import PlusButton from './PlusButton/PlusButton';
import AddProfileText from './AddProfileText/AddProfileText';

const AddProfileButtonContainer = () => {
    return (
        <div className='addProfileButtonContainer w-100 position-relative d-flex flex-column align-items-center justify-content-between'>
            <PlusButton />
            <AddProfileText />
        </div>
    )
}

export default AddProfileButtonContainer;