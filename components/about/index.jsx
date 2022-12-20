import * as C from "./styles";

const About = (props) => {
  return (
    <C.Container>
      <C.Content id="about">
        <C.Title>{props.title}</C.Title>
        <C.Text>{props.aboutme}</C.Text>
      </C.Content>
    </C.Container>
  );
};

export default About;
