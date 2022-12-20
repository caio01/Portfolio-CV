import * as C from "./styles";
import { SiSpring, SiCsharp } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Skills = (props) => {
  return (
    <C.Container>
      <C.Main>{props.title}</C.Main>
      <C.Content>
        <C.Card>
          <C.Title>
            <SiSpring className="svg" />
          </C.Title>
          <C.Subtitle>Spring</C.Subtitle>
        </C.Card>
        <C.Card>
          <C.Title>
            <SiCsharp />
          </C.Title>
          <C.Subtitle>C#  </C.Subtitle>
        </C.Card>
        <C.Card>
          <C.Title>
            <FaNodeJs />
          </C.Title>
          <C.Subtitle>NodeJS</C.Subtitle>
        </C.Card>
        <C.Card>
          <C.Title>
            <FaReact />
          </C.Title>
          <C.Subtitle>React</C.Subtitle>
        </C.Card>
      </C.Content>
    </C.Container>
  );
};

export default Skills;
