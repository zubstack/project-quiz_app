import "./BaseLayout.css";

export default function BaseLayout(props) {
  return (
    <div id="baseLayout" {...props}>
      {props.children}
    </div>
  );
}
