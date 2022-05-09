const Like = (props) => {
  let classes = "fa fa-heart";
  if (props.liked !== true) classes += "-o";
  return (
    <i
      style={{ cursor: "pointer" }}
      role="button"
      onClick={props.onClick}
      className={classes}
    ></i>
  );
};

export default Like;
