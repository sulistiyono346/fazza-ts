import { FC } from "react";
import classname from "classnames";

type H2Props = {
  color: string;
  weight: string;
  children?: React.ReactNode;
};

const H2: FC<H2Props> = ({ color, weight, children }) => {
  const classNames = classname("cH2 text-sm md:text-4xl", color, weight);
  return <h2 className={classNames}>{children}</h2>;
};

export default H2;
