import { BlinkDot } from "./BlinkDot";

type TF2ServerProps = {
  hostname: string;
  mapname: string;
  players: string;
  maxplayers: string;
  state: "OK" | "Unresponsive" | "None";
};

const TF2ServerPropsDefault: TF2ServerProps = {
  state: "None",
  hostname: "-",
  mapname: "-",
  maxplayers: "-",
  players: "-",
};

const TF2ServerTag = (props: {
  hostname: string;
  mapname: string;
  players: string;
  maxplayers: string;
  state: "OK" | "Unresponsive" | "None";
  headertext: string;
  image: "None" | "WorldWarWednesday" | "BreadFrightSoldier";
}) => {
  const backimg =
    props.image === "None"
      ? "UNREACHABLE"
      : //
      props.image === "WorldWarWednesday"
      ? "https://steamcdn-a.akamaihd.net/apps/tf2/artwork/worldwarwednesday.jpg"
      : props.image === "BreadFrightSoldier"
      ? "https://steamcdn-a.akamaihd.net/apps/tf2/artwork/expiration_date_07.jpg"
      : "UNREACHABLE";
  return (
    <div className="bg-gray-700 p-2 rounded ring-1 ring-gray-600 col-span-2 relative overflow-clip">
      {props.image !== "None" && (
        <img
          src={backimg}
          alt="tf2 soldier holding bread, scared"
          className="absolute h-full top-0 left-0 [mask-image:linear-gradient(90deg,white,rgba(255,255,255,0))] opacity-25"
        />
      )}
      <div className="absolute bottom-1 left-1 text-sm text-gray-500">
        <pre>{`players: ${props.players}/${props.maxplayers}`}</pre>
        <pre>{`mapname: ${props.mapname}`}</pre>
        <pre>{`hostname: ${props.hostname}`}</pre>
      </div>
      <div className="flex flex-col items-end">
        <p className="font-semibold">{props.headertext}</p>
        <div
          className={`flex flex-row items-center mx-2 gap-2 ${
            props.state === "None" && "mt-[6px]"
          }`}
        >
          {props.state === "OK" && (
            <>
              <p>{"OK"}</p>
              <BlinkDot color="emerald" size="2" ping />
            </>
          )}
          {props.state === "Unresponsive" && (
            <>
              <p>{"Unresponsive"}</p>
              <BlinkDot color="yellow" size="2" />
            </>
          )}
          {props.state === "None" && (
            <>
              <div className="block bg-gray-500 animate-pulse w-12 h-3 rounded" />
              <div className="block bg-gray-500 animate-pulse w-16 h-3 rounded" />
              <BlinkDot color="gray" size="2" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { TF2ServerTag };
export type { TF2ServerProps };
export { TF2ServerPropsDefault };
