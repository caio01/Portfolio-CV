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
        about="Sobre mim"
        projects="Projetos"
        contact="Contato"
        lang="EN-US"
        logoLink="/pt-br"
        aboutLink="/pt-br#about"
        projectsLink="#"
        contactLink="/pt-br#contact"
        langLink="/en-us/projects"
        langImg="/assets/images/usa-flag.png"
        href1="/pt-br#about"
        htext1="Sobre mim"
        href2="/pt-br/projetos"
        htext2="Projetos"
        href3="/pt-br#contact"
        htext3="Contato"
        href4="/en-us/projects"
        himg="/assets/images/usa-flag.png"
      />
      <Projects title="Meus Projetos" language="Linguagem predominante" />
      <TopTop />
      <Footer link="/pt-br" rights="Todos os direitos reservados" />
    </>
  );
}
