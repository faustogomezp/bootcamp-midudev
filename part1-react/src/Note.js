export const Note = (id, content, date) => {
        if (typeof notes === 'undefined' || notes.lenght === 0) {
		return "No tenemos notas que mostrar";
	}

	return (
		<ol>
		{notes.map((note) => {
			return (<li key={note.id}>
				<p>{note.content}</p>
			        <small><time>{note.date}</time></small>
				</li>);
		})}
		</ol>
	)
}

/* export default ListNotes;
 */