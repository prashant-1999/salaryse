import React from "react";

const sizeClasses = {
  txtNotoSansBold72LimeA200: "font-bold font-notosans",
  txtNotoSansBold16: "font-bold font-notosans",
  txtNotoSansBold20LimeA200: "font-bold font-notosans",
  txtNotoSansRegular20: "font-normal font-notosans",
  txtNotoSansBold20: "font-bold font-notosans",
  txtNotoSansBold30: "font-bold font-notosans",
  txtNotoSansRegular16WhiteA7007f: "font-normal font-notosans",
  txtNotoSansBlack40: "font-black font-notosans",
  txtNotoSansRegular16Black900: "font-normal font-notosans",
  txtNotoSansBold16LimeA200: "font-bold font-notosans",
  txtNotoSansBold16WhiteA700cc: "font-bold font-notosans",
  txtNotoSansBold60: "font-bold font-notosans",
  txtNotoSansBold72: "font-bold font-notosans",
  txtNotoSansBlack16: "font-black font-notosans",
  txtNotoSansBold60LimeA200: "font-bold font-notosans",
  txtNotoSansSemiBold48: "font-notosans font-semibold",
  txtNotoSansRegular16WhiteA700cc: "font-normal font-notosans",
  txtNotoSansRegular48: "font-normal font-notosans",
  txtNotoSansRegular16: "font-normal font-notosans",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
