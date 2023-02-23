import { FC } from "react";
import classname from "classnames";

type H1Props = {
  color: string;
  weight: string;
  children?: React.ReactNode;
};

const H1: FC<H1Props> = ({ color, weight, children }) => {
  const classNames = classname("cH1 text-sm md:text-4xl", color, weight);
  return <h1 className={classNames}>{children}</h1>;
};

export default H1;
