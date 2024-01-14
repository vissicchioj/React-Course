

function Contact(props) {

    return (
        <div className = "contact-card">
            <img src = {require('../images/' + props.img)}/>
            <h3>{props.name}</h3>
            <div className = "info-group">
                <p>{props.phone}</p>
            </div>
            <div className = "info-group">
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Contact;