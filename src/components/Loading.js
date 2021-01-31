import classes from "./Loading.module.css";
export default function Loading() {
  return (
    <div className={classes.loader}>
      <div className={classes.loaderInner}>
        <div className={classes.loaderLineWrap}>
          <div className={classes.loaderLine} />
        </div>
        <div className={classes.loaderLineWrap}>
          <div className={classes.loaderLine} />
        </div>
        <div className={classes.loaderLineWrap}>
          <div className={classes.loaderLine} />
        </div>
        <div className={classes.loaderLineWrap}>
          <div className={classes.loaderLine} />
        </div>
        <div className={classes.loaderLineWrap}>
          <div className={classes.loaderLine} />
        </div>
      </div>
    </div>
  );
}
