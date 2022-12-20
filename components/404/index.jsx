import Link from "next/link";
import * as C from "./styles";

const NotFound = () => {
  return (
    <>
      <C.Main>
        <C.Title>404</C.Title>
        <C.Text>OH NO! We cound´t find this page.</C.Text>
        <C.Buttons>
          <Link href="/en-us/projects" target="_blank">
            <C.Button1>Projects</C.Button1>
          </Link>
          <Link href="/" target="_blank">
            <C.Button2>Home</C.Button2>
          </Link>
        </C.Buttons>
      </C.Main>
    </>
  );
};

export default NotFound;
