function Button({ text, color, onClick }) {
  return (
    <button
      type="button"
      className={`rounded-md ${color} text-white text-sm py-1 px-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
