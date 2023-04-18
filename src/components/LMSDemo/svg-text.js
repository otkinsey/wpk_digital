const SvgText = (props) => {
  return (
    <text x={props.center.x} y={props.center.y}>
      {props.text}{" "}
    </text>
  );
};
