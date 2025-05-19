import profilePic from '../Images/Itachi.jpg';

function Card(){
    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="Profile Picture" />
            <h2 className='card-title'>Draco</h2>
            <p className='card-text'>I Live!</p>
        </div>
    )
}

export default Card;