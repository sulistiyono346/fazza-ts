import { FC } from "react";
import classname from "classnames";

type TextProps = {
  color: string;
  weight: string;
  children?: React.ReactNode;
};

const Text: FC<TextProps> = ({ color, weight, children }) => {
  const classNames = classname("cText text-sm md:text-4xl", color, weight);
  return <p className={classNames}>{children}</p>;
};

export default Text;
