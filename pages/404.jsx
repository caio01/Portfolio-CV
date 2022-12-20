import NotFound from "/components/404";

export const getStaticProps = () => {
  return {
    props: {},
  };
};

export default function Home() {
  return (
    <>
      <title>404 - Not Found</title>
      <NotFound />
    </>
  );
}
