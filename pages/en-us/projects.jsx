import Header from "../../components/header";
import Projects from "../../components/projects";
import Footer from "../../components/footer";
import TopTop from "../../components/toTop";

export default function Home() {
  return (
    <>
      <title>Projetos - Caio Oliveira</title>
      <Header
        logo="/assets/images/logo.png"
        about="About me"
        projects="Projects"
        contact="Contact me"
        lang="PT-BR"
        logoLink="/"
        aboutLink="/#about"
        projectsLink="#"
        contactLink="/#contact"
        langLink="/pt-br/projetos"
        langImg="/assets/images/brazil-flag.png"
        href1="/#about"
        htext1="About me"
        href2="/en-us/projects"
        htext2="Projects"
        href3="/#contact"
        htext3="Contact"
        href4="/pt-br/projetos"
        himg="/assets/images/brazil-flag.png"
      />
      <Projects title="My Projects" language="Predominant language" />
      <TopTop />
      <Footer link="/" rights="All rights reserved" />
    </>
  );
}
