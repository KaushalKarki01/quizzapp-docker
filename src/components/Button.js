export default function Button({ onClick, isDisabled }) {
  return (
    <button className="btn" onClick={onClick} disabled={isDisabled}>
      Next
    </button>
  );
}
