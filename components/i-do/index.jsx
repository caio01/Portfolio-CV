import * as C from "./styles";
import { FaConnectdevelop, FaDev } from "react-icons/fa";

const Ido = (props) => {
  return (
    <C.Geral>
      <C.Title>{props.title}</C.Title>
      <C.Container>
        <C.Card>
          <C.Icon src="./assets/images/icon1.png" />
          <C.Text>Software Development</C.Text>
        </C.Card>{" "}
        <C.Card>
          <C.Icon src="./assets/images/icon2.png" />
          <C.Text>Web Development</C.Text>
        </C.Card>{" "}
      </C.Container>
    </C.Geral>
  );
};

export default Ido;
