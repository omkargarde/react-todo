/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";
export default function MeetupList(props: any) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup: any) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        ></MeetupItem>
      ))}
    </ul>
  );
}
