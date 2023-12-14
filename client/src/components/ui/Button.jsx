function Button(props) {
  return (
    <button
      className="bg-black/90 text-white text-sm font-normal px-5 py-2 mt-6 rounded-md hover:bg-slate-800"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
