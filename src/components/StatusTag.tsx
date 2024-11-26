import { BlinkDot } from "./BlinkDot";

type StatusTagProps = {
  name: string;
  status: string;
  ping?: boolean;
  color: "emerald" | "yellow" | "red" | "gray";
};

const StatusTag = (props: StatusTagProps) => {
  return (
    <div className="bg-gray-700 p-2 rounded ring-1 ring-gray-600 flex flex-row items-center">
      <span className="mx-1">
        <BlinkDot color={props.color} size="2" ping={props.ping} />
      </span>
      <p className="ml-1 text-sm text-gray-400">{props.status}</p>
      <p className="ml-auto font-semibold">{props.name}</p>
    </div>
  );
};

export { StatusTag };
export type { StatusTagProps };
