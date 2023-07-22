export default function Todo(props: any) {
  function deleteHandler() {}
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}
