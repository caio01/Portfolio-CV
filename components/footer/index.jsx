import Link from "next/link";
import * as C from "./styles";

const Footer = (props) => {
  return (
    <C.Container>
      <Link href={props.link}>
        <C.Text>&copy; caiooliveira - {props.rights}</C.Text>
      </Link>
    </C.Container>
  );
};

export default Footer;