import { FunctionComponent } from "react";
// import { ImageSVG, ImagePNG } from "Config/Helpers";
import { H1, NavBar } from "Components";

const Home: FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <H1 color="black" weight="bold">
        Solusi Terbaik Untuk Meningkatkan Income Kamu
      </H1>
    </div>
  );
};

export default Home;
