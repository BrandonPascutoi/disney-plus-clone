import './ProfileIconsContainer.css';
import IndividualProfileContainer from './IndividualProfileContainer/IndividualProfileContainer';

const ProfileIconsContainer = () => {
    return (
        <div className='profileIconsContainer row align-items-center w-100 position-relative'>
            <IndividualProfileContainer image={process.env.PUBLIC_URL + '/images/dr-strange.png'} name='Brandon' locked={true}/>
            <IndividualProfileContainer image={process.env.PUBLIC_URL + '/images/sarah.png'} name='Irina' locked={false}/>
        </div>
    )
}

export default ProfileIconsContainer;