/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import classes from "./card.module.css";
export default function Card(props: any) {
  return <div className={classes.card}>{props.children}</div>;
}
