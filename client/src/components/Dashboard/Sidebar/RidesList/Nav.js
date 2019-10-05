import React from "react";
import { updateRoute } from "../../../../utils/actions";
import ListButton from "../../../shared/ListButton";
import Ul from "../../../shared/Ul";

const style = {
  nav: {
    marginTop: "5px"
  },
  ListButton: {
    margin: "3px 0"
  },
  noRides: {
    textAlign: "left",
    color: "rgba(19,30,65,0.6)",
    padding: "10px"
  }
};

export default ({
  routeStore,
  routeDispatch,
  rides,
  setCoords,
  toggleSidebar,
  sidebarOpen
}) => {
  const { currentRoute } = routeStore;

  function handleClick(e) {
    const id = e.target.dataset.id;
    const ride = rides.find(ride => id === ride._id);
    //setting currentRoute to display on map
    setCoords(ride.waypoints);
    routeDispatch(updateRoute({ createMode: "off", ...ride }));
    toggleSidebar(!sidebarOpen);
  }

  return (
    <nav style={style.nav}>
      <Ul>
        {rides.length < 1 && <h3 style={style.noRides}>No rides to show.</h3>}
        {rides.map((ride, i) => (
          <li key={i}>
            <ListButton
              style={style.ListButton}
              data-id={ride._id}
              onClick={handleClick}
              selected={currentRoute._id === ride._id ? true : false}
            >
              {ride.title}
            </ListButton>
          </li>
        ))}
      </Ul>
    </nav>
  );
};
