import classes from "./Reload.module.css";
export default function ReloadButton() {
  return (
    <div className={classes.container}>
      <button className={classes.btn12}>
        <span>Click!</span>
        <span>Reload Page</span>
      </button>
    </div>
  );
}
