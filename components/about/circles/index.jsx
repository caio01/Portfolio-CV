import * as C from "./styles";

const Circles = (props) => {
  return (
    <C.Container>
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cName}</C.Title>
          <C.Subtitle>Caio Oliveira</C.Subtitle>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          {" "}
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cEmail}</C.Title>
          <C.Link href="mailto:caioinacio00@gmail.com" target="_blank">
          caioinacio00@gmail.com
          </C.Link>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cGithub}</C.Title>
          <C.Link href="https://github.com/caio01" target="_blank">
            @caio01
          </C.Link>
        </C.Texts>
      </C.Circle>{" "}
      <C.Circle>
        <C.CircleLarge>
          <C.Circlemini>
            <C.Circlemini1 />
          </C.Circlemini>
        </C.CircleLarge>
        <C.Texts>
          <C.Title>{props.cPhone}</C.Title>
          <C.Link href="https://api.whatsapp.com/send?phone=5585999693314" target="_blank">
            (85) 99969-3314
          </C.Link>
        </C.Texts>
      </C.Circle>
    </C.Container>
  );
};

export default Circles;
