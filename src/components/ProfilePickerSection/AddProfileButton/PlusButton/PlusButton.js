import './PlusButton.css'
import PlusSVG from './PlusSVG/PlusSVG';

const PlusButton = () => {
    return (
        <button id='plusButton' className='plusButton w-25 d-flex align-items-center justify-content-center'>
            <PlusSVG />
        </button>
    )
}

export default PlusButton;