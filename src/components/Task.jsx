import { FaTimes } from 'react-icons/fa'

export default function Task({ tasks, onDelete, onToggle }) {
    return (
        <div className={`task ${tasks.remainder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(tasks.email)}>
            <h3>{tasks.name}  <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(tasks.email)} /></h3>
            <h5>{tasks.email} </h5>
            <h5>{tasks.age} </h5>
        </div>
    )
}
