"use client";

import { useEffect, useState } from "react";
import { StatusTag } from "../StatusTag";

const HttpResponseTag = (props: {
  refresh: number;
  url: string;
  name: string;
}) => {
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    getResponseState();
  }, [props.refresh]);

  const getResponseState = async () => {
    const res = await fetch(props.url);
    setState(res.status);
  };

  return (
    <>
      {state === 0 && (
        <StatusTag name={props.name} color="gray" status="Unknown" />
      )}
      {state.toString().startsWith("2") && (
        <StatusTag
          name={props.name}
          color="emerald"
          status={`OK (${state})`}
          ping
        />
      )}
      {state >= 400 && state !== 502 && (
        <StatusTag name={props.name} color="red" status={`Errors (${state})`} />
      )}
      {(state === 502 || state === 521) && (
        <StatusTag
          name={props.name}
          color="gray"
          status={`Offline (${state})`}
        />
      )}
    </>
  );
};

export { HttpResponseTag };
