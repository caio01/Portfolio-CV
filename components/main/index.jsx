import * as C from "./styles";

import { AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";

const Main = (props) => {
  return (
    <C.Container>
      <C.Content>
        <C.Title>
          {props.hi}
          <br></br> Caio Oliveira
        </C.Title>
        <C.Subtitle>{props.subtitle}</C.Subtitle>
        <C.Buttons>
          <C.Button1 href="/assets/documents/Caio Oliveira.pdf" download="curriculo-caiooliveira">
            Download CV
          </C.Button1>
          <C.Button2 href="https://www.linkedin.com/in/caio-oliveira1/" target="_blank">
            <C.Span>
              <AiOutlineLinkedin />
            </C.Span>
            LinkedIn
          </C.Button2>
        </C.Buttons>
      </C.Content>
      <C.Image>
        <Image
          width="350px"
          height="365px"
          style={{ pointerEvent: "none", userDrag: "none", userSelect: "none" }}
          src="/assets/images/2.png"
        />
      </C.Image>
    </C.Container>
  );
};

export default Main;
