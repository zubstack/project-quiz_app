import "./ColorButton.css";
function ColorButton(props) {
  const { color, hover } = props;

  return (
    <button
      className={`font-normal background-${color} text-sm border border-black/80 p-2 hover:${hover} `}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default ColorButton;
