import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
export default function Layout(props) {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
