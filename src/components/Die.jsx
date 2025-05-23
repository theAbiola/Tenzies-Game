import './Die.css'

function Die(props) {
    return (
        <button style={{ backgroundColor: props.isHeld ? '#59E391' : 'white' }} className='die-buttons'>{props.value}</button>
    )
}

export default Die