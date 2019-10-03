import React, { useEffect } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import { updateRoute } from "../../../../utils/actions";

const Title = styled(ContentEditable)`
  font-family: "Archivo", sans-serif;
  outline: none;
  color: #444444;
  text-align: left;
  width: 30%;
  min-width: 200px;
`;

export default ({ routeDispatch, routeStore, title, setTitle }) => {
  const { currentRoute } = routeStore;

  useEffect(() => {
    setTitle(currentRoute.title);
  }, [currentRoute.title]);

  const handleTitle = e => {
    routeDispatch(updateRoute({ title: e.currentTarget.innerText }));
    setTitle(e.currentTarget.innerText);
  };

  return (
    <React.Fragment>
      <Title html={`<h3>${title}</h3>`} id="title" onChange={handleTitle} />
    </React.Fragment>
  );
};

//set title limit
