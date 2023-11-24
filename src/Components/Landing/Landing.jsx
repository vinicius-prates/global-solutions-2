/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from "react";
import { Card } from "../Card/Card";

/* eslint-disable jsx-a11y/alt-text */
export const Landing = () => {
    
    const [formData, setFormData] = useState({
        name:"", email: "", text:""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData)
      };

      const sendEmail = () => {
        window.open(`mailto:viniprates2211@gmail.com?subject=FeedBack&body=nome:${formData.name}Email:${formData.email}Feedback:${formData.text}`)
      }
      
      const gotoVideodiv = () => {
        window.location.href="#video"
      } 
  return (
    <div>
      <div className="landing-container">
        <div className="infos">
          <h1>Transformando diagnósticos mamários com precisão e inovação</h1>
          <button onClick={gotoVideodiv} target="_blank">Saiba Mais</button>
        </div>
        <div className="image">
          <img src="/woman1.png" alt="woman1" />
        </div>
      </div>
      <div className="woman-infos-one">
        <div className="woman-infos-one-ft">
          <p>
            <b>1 em cada 8 mulheres</b> serão diagnosticadas com câncer de mama
            durante sua vida
          </p>
          <p>
            <b>95%</b> dos casos tem cura caso <b>diagnosticado cedo</b>
          </p>
        </div>
        <img className="woman2" src="woman2.png" />
        <div className="woman-infos-one-st">
          <p>
            <b>600 mil</b> mulheres morrem <b>por ano</b> no mundo pela doença
          </p>
          <a href="https://www.inca.gov.br/publicacoes/relatorios/dados-e-numeros-sobre-cancer-de-mama-relatorio-anual-2023" className="">
            Saiba Mais
          </a>
        </div>
      </div>
      <div className="problems">
        <h1>
          <b>
            OS PROBLEMAS QUE A FALTA DE PRECISÃO EM TECIDOS DENSOS PODEM CAUSAR
          </b>
        </h1>
        <div className="cards">
          <Card
            title="DIAGNÓSTICOS TARDIOS"
            paragraph="Tecidos densos são mais difíceis de visualizar padrões diferentes. Resultando em diagnósticos tardios."
          />
          <Card
            title="FALSOS POSITIVOS"
            paragraph="Pela dificuldade de visualização, é muito comum ocorrer falso positivo. Resultando em procedimentos invasivos."
          />
          <Card
            title="AUMENTO DE CUSTOS"
            paragraph="Resultado de falsos positivos, pois aumentam o custos de exames desnecessários para ambos os lados."
          />
        </div>
      </div>
      <div id="video" className="solucao">
        <h1>
          <b>NOSSA SOLUÇÃO</b>
        </h1>
        <iframe
        
          width="710"
          height="398"
          src="https://www.youtube.com/embed/uIMpSmRi44A?si=MZg8b6akHwgQEm1y"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="about-group">
        <h1><b>SOBRE O GRUPO</b></h1>
        <Card
          title="INTEGRANTES - FIAP 2023"
          paragraph="Allan Marcelino   -   RM99860
          Marciliano   -   RM98693
          Vinícius Prates   -   RM550285
          Yohana Bispo Menezes   -   RM551430"
        />
      </div>
      <div className="talk-to-us">
        <h1><b>FALE CONOSCO</b></h1>
        <div className="talk-to-us-info">
            <img src="/people.png"/>
            <div className="talk-to-us-form">
                <input placeholder="nome" name="name" value={formData.name} onChange={handleInputChange}/>
                <input placeholder="email" name="email" value={formData.email} onChange={handleInputChange}/>
                <textarea placeholder="Escreva aqui!" name="text" value={formData.text} onChange={handleInputChange} />
                <button onClick={sendEmail}>Enviar</button>
            </div>
        </div>
      </div>
    
    </div>
  );
};
