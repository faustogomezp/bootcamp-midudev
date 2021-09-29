export const Note = ({ title, body }) => {
  /*        if (typeof note === 'undefined' || note.lenght === 0) {
		return "No tenemos notas que mostrar";
	} */
  /* const content, date =  note ; */
  return (
    <li>
      <p>{title}</p>
      <small>{body}</small>
    </li>
  );
};

/* export default ListNotes;
 */
