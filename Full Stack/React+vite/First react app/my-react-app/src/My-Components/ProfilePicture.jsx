export default function ProfilePicture(){
    const imageUrl = 'src\\Images\\Itachi.jpg';

    const handleClick = (e) => e.target.style.display="none";
    
    return(
        <img onClick={(e) => handleClick(e)} src={imageUrl}/>
    )
}