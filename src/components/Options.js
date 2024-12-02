export default function Options({ option, onTap }) {
  return <li onClick={() => onTap(option)}>{option}</li>;
}
