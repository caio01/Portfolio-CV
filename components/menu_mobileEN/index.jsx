import { IoClose } from "react-icons/io5";
import * as C from "./styles";
import { useLayoutEffect } from "react";
import Link from "next/link";

export default function MenuMobile({
  menuIsVisible,
  setMenuIsVisible,
  href1,
  htext1,
  href2,
  htext2,
  href3,
  htext3,
  href4,
  himg,
}) {
  useLayoutEffect(
    () => {
      document.body.style.overflow = menuIsVisible ? "hidden" : "auto";
    },
    { menuIsVisible }
  );
  return (
    <C.Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
      <nav>
        <Link href={href1}>
          <C.Link>{htext1}</C.Link>
        </Link>
        <Link href={href2}>
          <C.Link>{htext2}</C.Link>
        </Link>
        <Link href={href3}>
          <C.Link>{htext3}</C.Link>
        </Link>
        <Link href={href4}>
          <img src={himg} width="50px" height="50px" />
        </Link>
      </nav>
    </C.Container>
  );
}
