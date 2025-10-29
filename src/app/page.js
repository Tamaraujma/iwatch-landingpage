import Image from "next/image";
import Header from "./components/Header";
import BigImg from "./components/BigImg";
import Smallimgs from "./components/Smallimgs";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Header />
      <BigImg />
      <Button />
      <Smallimgs />
    </div>
  );
}
