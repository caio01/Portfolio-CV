import Link from "next/link.js";
import { useState } from "react";
import MenuMobile from "../menu_mobileEN/index";
import { GiHamburgerMenu } from "react-icons/gi";
import * as C from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";

function Header(props) {
  const router = useRouter();
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <C.Container>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        href1={props.href1}
        htext1={props.htext1}
        href2={props.href2}
        htext2={props.htext2}
        href3={props.href3}
        htext3={props.htext3}
        href4={props.href4}
        himg={props.himg}
      />
      <Image
        onClick={() => {
          router.push(props.logoLink);
        }}
        src={props.logo}
        alt="logo"
        width="50px"
        height="40px"
        style={{ cursor: "pointer" }}
      />
      <C.Links>
        <Link href={props.aboutLink}>
          <C.Link>{props.about}</C.Link>
        </Link>
        <Link href={props.projectsLink}>
          <C.Link>{props.projects}</C.Link>
        </Link>
        <Link href={props.langLink}>
          <Image src={props.langImg} width="30px" height="30px" style={{ cursor: "pointer" }} />
        </Link>
      </C.Links>
      <GiHamburgerMenu onClick={() => setMenuIsVisible(true)} />
    </C.Container>
  );
}

export default Header;
