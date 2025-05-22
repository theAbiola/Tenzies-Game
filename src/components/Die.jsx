import './Die.css'

function Die(props) {
    return (
        <button className='die-buttons'>{props.value}</button>
    )
}

export default Die