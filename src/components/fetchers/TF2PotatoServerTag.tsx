"use client";

import { useEffect, useState } from "react";
import {
  TF2ServerProps,
  TF2ServerPropsDefault,
  TF2ServerTag,
} from "../TF2ServerTag";

const TF2PotatoServerTag = (props: { refresh: number }) => {
  const [state, setState] = useState<TF2ServerProps>(TF2ServerPropsDefault);

  useEffect(() => {
    getServerState();
  }, [props.refresh]);

  const getServerState = async () => {
    const res = await fetch(
      "https://api.manczak.net/tf2-server-info/167.235.205.150"
    );
    if (res.ok) {
      const json = await res.json();
      setState({
        state: "OK",
        hostname: json["hostname"],
        mapname: json["map"],
        players: json["players"],
        maxplayers: json["maxplayers"],
      });
    } else {
      setState({
        ...TF2ServerPropsDefault,
        state: "Unresponsive",
      });
    }
  };

  return (
    <TF2ServerTag
      hostname={state.hostname}
      mapname={state.mapname}
      maxplayers={state.maxplayers}
      players={state.players}
      state={state.state}
      image="WorldWarWednesday"
      headertext="Team Fortress 2 Server"
    />
  );
};

export { TF2PotatoServerTag };
