import React from "react";
import { DateTime } from "luxon";

function Timestamp(props) {
  const time = props.time;
  const { ts, day, hour, minute, month, year } = time;
  console.log(day);
  return (
    <>
      <p>{`Updated at ${day}/${month}/${year} ${hour}:${minute}`}</p>
    </>
  );
}

export default Timestamp;
