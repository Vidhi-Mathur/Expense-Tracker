import './Card.css'

const Card = (props) => {
    //For css, apart from 'card', rest of class will also be applied for styling as passed separately
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Card