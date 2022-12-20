import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../loading";
import * as C from "./styles";
import * as json from "../../public/assets/projects.json";

const jsImg = "/assets/images/js.png";
const htmlImg = "/assets/images/html.png";
const cssImg = "/assets/images/css.png";
const javaImg = "/assets/images/java.png";
const typeScriptImg = "/assets/images/typescript.png";
const springImg = "/assets/images/spring.png";
const sqlImg = "/assets/images/sql.png";
const reactImg = "/assets/images/react.png";
const nodeImg = "/assets/images/node.png";
const csharpImg = "/assets/images/csharp.png";
const pythonImg = "/assets/images/python.png";
const mdImg = "/assets/images/md.png";
const nextImg = "/assets/images/next.png";
const errorImg = "/assets/images/error.png";

const Projects = (props) => {
  const [repositories, setRepositories] = useState([]);
  console.log(json.projects.find(data => data.projectname == "Beecrowd-SQL").logo);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/caio01/repos")
      .then((response) => setRepositories(response.data));
  }, []);
  if (repositories.length > 0) {
    return (
      <>
        <C.Main>
          <C.Title>{props.title}</C.Title>
          <C.Content>
            <C.UL>
              {repositories.map((repository, key) => {
                return (
                  <li key={key}>
                    <C.Card>
                      <p>{props.language}</p>
                      <C.Image
                        className="img"
                        src={`${
                            json.projects.find(data => data.projectname == repository.name).logo == "javascript"
                            ? `${jsImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "html"
                            ? `${htmlImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "css"
                            ? `${cssImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "java"
                            ? `${javaImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "typescript"
                            ? `${typeScriptImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "spring"
                            ? `${springImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "sql"
                            ? `${sqlImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "react"
                            ? `${reactImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "node"
                            ? `${nodeImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "csharp"
                            ? `${csharpImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "python"
                            ? `${pythonImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "md"
                            ? `${mdImg}`
                            : json.projects.find(data => data.projectname == repository.name).logo === "next"
                            ? `${nextImg}`
                            : `${errorImg}`
                        }`}
                        layout="responsive"
                      />
                      <p>{repository.name}</p>
                      <C.Buttons>
                        <C.Button1
                          href={`${repository.html_url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github
                        </C.Button1>{" "}
                        <C.Button2
                          href={`${
                            repository.homepage
                              ? `https://${repository.homepage}`
                              : repository.html_url
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Preview
                        </C.Button2>
                      </C.Buttons>
                    </C.Card>
                  </li>
                );
              })}
            </C.UL>
          </C.Content>
        </C.Main>
      </>
    );
  }
  return (
    <C.Main>
      <C.Title>{props.title}</C.Title>
      <Loading />
    </C.Main>
  );
};

export default Projects;
