import React from "react";
import { useRouter } from "next/router";

const SingleEvent = () => {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <div>
      <h1>This is single event. Event Id is {eventId}</h1>
    </div>
  );
};

export default SingleEvent;
