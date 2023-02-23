import { FC } from "react";
import classname from "classnames";

type H3Props = {
  color: string;
  weight: string;
  children?: React.ReactNode;
};

const H3: FC<H3Props> = ({ color, weight, children }) => {
  const classNames = classname("cH3 text-sm md:text-4xl", color, weight);
  return <h3 className={classNames}>{children}</h3>;
};

export default H3;
