function MeetupDetails(props) {
    return (<>
    <img src={props.url}></img>
        <h1>{props.title}</h1>
        <p>{props.details}</p>
        </>)
}

export default MeetupDetails