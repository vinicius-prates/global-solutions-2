import './Card.css'

export const Card = (props) => {
    return(
        <div className='card'>
            <h5><b>{props.title}</b></h5>
            <p>{props.paragraph}</p>
        </div>
    )
}