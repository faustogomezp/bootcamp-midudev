export const Note = ({content, date}) => {
  /*        if (typeof note === 'undefined' || note.lenght === 0) {
		return "No tenemos notas que mostrar";
	} */
  /* const content, date =  note ; */
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

/* export default ListNotes;
 */
