const BlinkDot = (props: {
  color: "emerald" | "yellow" | "red" | "gray";
  size: "2" | "3" | "4";
  ping?: boolean;
  breathe?: boolean;
}) => {
  return (
    <div
      className={`relative rounded-full ring-2
        ${props.color === "emerald" && "ring-emerald-400"}
        ${props.color === "yellow" && "ring-yellow-400"}
        ${props.color === "red" && "ring-red-400"}
        ${props.color === "gray" && "ring-gray-400"}
        ${props.size === "2" && "w-2 h-2"}
        ${props.size === "3" && "w-3 h-3"}
        ${props.size === "4" && "w-4 h-4"}
      `}
    >
      {props.ping && (
        <div
          className={`absolute rounded-full ring-2 animate-ping
            ${props.color === "emerald" && "ring-emerald-400"}
            ${props.color === "yellow" && "ring-yellow-400"}
            ${props.color === "red" && "ring-red-400"}
            ${props.color === "gray" && "ring-gray-400"}
            ${props.size === "2" && "w-2 h-2"}
            ${props.size === "3" && "w-3 h-3"}
            ${props.size === "4" && "w-4 h-4"}
          `}
        />
      )}
      {props.breathe && (
        <div
          className={`absolute rounded-full animate-pulse
          ${props.color === "emerald" && "bg-emerald-400"}
          ${props.color === "yellow" && "bg-yellow-400"}
          ${props.color === "red" && "bg-red-400"}
          ${props.color === "gray" && "bg-gray-400"}
          ${props.size === "2" && "w-2 h-2"}
          ${props.size === "3" && "w-3 h-3"}
          ${props.size === "4" && "w-4 h-4"}
        `}
        />
      )}
    </div>
  );
};

export { BlinkDot };
