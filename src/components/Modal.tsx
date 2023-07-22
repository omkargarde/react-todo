export default function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt">Cancel</button>
      <button className="btn btn--primary">Delete</button>
    </div>
  );
}
