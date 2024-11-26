"use client";

import { useEffect, useState } from "react";
import { DoubleStatusTag } from "../DoubleStatusTag";

const DoubleHttpResponseTag = (props: {
  refresh: number;
  upperUrl: string;
  lowerUrl: string;
  upperName: string;
  lowerName: string;
}) => {
  const [upperState, setUpperState] = useState<number>(0);
  const [lowerState, setLowerState] = useState<number>(0);

  useEffect(() => {
    getUpperResponseState();
    getLowerResponseState();
  }, [props.refresh]);

  const getUpperResponseState = async () => {
    const res = await fetch(props.upperUrl, {
      method: "HEAD",
    });
    setUpperState(res.status);
  };
  const getLowerResponseState = async () => {
    const res = await fetch(props.lowerUrl);
    setLowerState(res.status);
  };

  const determineColor = (state: number) => {
    return state >= 200 && state < 300
      ? "emerald"
      : state >= 400 && state !== 502 && state !== 521 && state !== 523
      ? "red"
      : "gray";
  };
  const determineStatus = (state: number) => {
    if (state === 200) return "OK";
    if (state >= 200 && state < 300) return `OK (${state})`;
    if (state >= 400) return `Error (${state})`;
    return "Unknown";
  };

  return (
    <>
      <DoubleStatusTag
        upper={{
          name: props.upperName,
          color: determineColor(upperState),
          status: determineStatus(upperState),
          ping: upperState === 200,
        }}
        lower={{
          name: props.lowerName,
          color: determineColor(lowerState),
          status: determineStatus(lowerState),
          ping: lowerState === 200,
        }}
      />
    </>
  );
};

export { DoubleHttpResponseTag };
