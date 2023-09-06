export default function Book(props) {
    return (
        <div>
            <h2 onClick={props.change} > Book Name: {props.bookName}</h2>
            <p> Writter: {props.writer}</p>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>
    )
}