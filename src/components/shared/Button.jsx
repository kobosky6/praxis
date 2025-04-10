import React from "react";
import classNames from "classnames";

const Button = ({
  title,
  size = "sm",
  variant = "primary",
  loading = false,
  className = "",
  loadingText = "Loading...",
  ...props
}) => (
  <button
    className={classNames(
      "inline-flex items-center justify-center w-auto font-medium focus:outline-none disabled:opacity-50",
      {
        "py-1 px-2 text-base font-light": size === "xs",
        "py-2 px-6 text-base font-normal": size === "sm",
        "bg-[#f29549] text-white shadow": variant === "primary",
        "bg-[#065252] text-white shadow": variant === "secondary",
        "": variant === "custom",
        "bg-opacity-80 bg-gray-400 text-white": variant === "disabled",
        "cursor-not-allowed": loading,
      },
      className
    )}
    disabled={loading || props.disabled}
    {...props}
  >
    {!loading && title && <span>{title}</span>}
    {loading && <span>{loadingText}</span>}
    {loading && (
      <span className="flex items-center">
        <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin ml-2"></div>
      </span>
    )}
  </button>
);

export default Button;
