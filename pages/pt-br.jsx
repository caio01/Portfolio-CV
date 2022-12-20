import Header from "../components/header";
import Main from "../components/main";
import About from "../components/about";
import Circles from "../components/about/circles";
import Ido from "../components/i-do";
import Skills from "../components/skilss";
import TopTop from "../components/toTop";
import Footer from "../components/footer";

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <>
      <title>Caio Oliveira</title>
      <Header
        logo="/assets/images/logo.png"
        about="Sobre mim"
        projects="Projetos"
        lang="EN-US"
        logoLink="#"
        aboutLink="#about"
        projectsLink="/pt-br/projetos"
        langLink="/"
        langImg="/assets/images/usa-flag.png"
        href1="#about"
        htext1="Sobre mim"
        href2="/pt-br/projetos"
        htext2="Projetos"
        href3="#contact"
        htext3="Contato"
        href4="/"
        himg="/assets/images/usa-flag.png"
      />
      <Main hi="Olá, me chamo" subtitle="Desenvolvedor de Software" />
      <About
        title="Sobre mim"
        aboutme="Desde pequeno sempre gostei de tecnologia e sempre tentei me manter atualizado. Sou aquele tipo de pessoa que gosta de explorar ao máximo a tecnologia que tenho nas minhas mãos e sempre me perguntei como as coisas funcionam."
      />
      <Circles cName="Nome Completo" cGithub="Github" cPhone="Celular" cEmail="Endereço de email" />
      <Ido title="O que eu faço" />
      <Skills title="Minhas habilidades" />
      <TopTop />
      <Footer link="#" rights="Todos os direitos reservados" />
    </>
  );
}
