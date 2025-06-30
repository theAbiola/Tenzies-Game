import './Die.css'

function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
        color: "black"
    }
    return (
        <button onClick={() => props.holdFunction(props.id)} style={styles} className='die-buttons'>
            {props.value}
        </button>
    )
}

export default Die