export default function Message({ status }) {
  return (
    <span className={status ? "correct" : "wrong"}>
      {status ? "correct" : "wrong"}answer
    </span>
  );
}
