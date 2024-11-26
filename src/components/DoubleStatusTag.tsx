import { BlinkDot } from "./BlinkDot";
import { StatusTagProps } from "./StatusTag";

const DoubleStatusTag = (props: {
  upper: StatusTagProps;
  lower: StatusTagProps;
}) => {
  return (
    <div className="bg-gray-700 p-2 rounded ring-1 ring-gray-600 flex flex-col">
      <div className="flex flex-row items-center">
        <span className="mx-1">
          <BlinkDot
            color={props.upper.color}
            size="2"
            ping={props.upper.ping}
          />
        </span>
        <p className="ml-1 text-sm text-gray-400">{props.upper.status}</p>
        <p className="ml-auto font-semibold">{props.upper.name}</p>
      </div>
      <div className="flex flex-row items-center">
        <span className="mx-1">
          <BlinkDot
            color={props.lower.color}
            size="2"
            ping={props.lower.ping}
          />
        </span>
        <p className="ml-1 text-sm text-gray-400">{props.lower.status}</p>
        <p className="ml-auto font-semibold">{props.lower.name}</p>
      </div>
    </div>
  );
};

export { DoubleStatusTag };
