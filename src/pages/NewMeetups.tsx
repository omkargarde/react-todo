/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import NewMeetup from "../components/meetups/NewMeetup";
export default function NewMeetupsPage() {
  const navigate = useNavigate();
  async function addMeetHandler(meetupData: any) {
    await fetch(
      "https://react-todo-56d15-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <NewMeetup addNewMeetup={addMeetHandler}></NewMeetup>
    </section>
  );
}
