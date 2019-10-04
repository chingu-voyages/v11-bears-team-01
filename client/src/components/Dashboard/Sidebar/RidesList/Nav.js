import React from "react";
import { updateRoute } from "../../../../utils/actions";
import ListButton from "../../../shared/ListButton";
import Ul from "../../../shared/Ul";

export default ({ routeDispatch, rides, setCoords }) => {
  function handleClick(e) {
    const id = e.target.dataset.id;
    const ride = rides.find(ride => id === ride._id);
    //setting currentRoute to display on map
    setCoords(ride.waypoints);
    routeDispatch(updateRoute({ createMode: "off", ...ride }));
  }

  return (
    <nav style={{ marginTop: "5px" }}>
      <Ul>
        {rides.map((ride, i) => (
          <li key={i}>
            <ListButton data-id={ride._id} onClick={e => handleClick(e)}>
              {ride.title}
            </ListButton>
          </li>
        ))}
      </Ul>
    </nav>
  );
};
