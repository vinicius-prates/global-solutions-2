/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */

import { Navbar } from "../../Components/Navbar/Navbar";

export const ReductMI = () => {
  return (
    <div className="reduct-container">
      <Navbar />
      <div className="landing-reductMI">
        <div className="typing-container">
          <p>
            Redução da Mortalidade Infantil<span class="typed-text"></span>
            <span class="cursor">&nbsp;</span>
          </p>
        </div>
        <div className="ods4">
          <img src="ods4.png" />
          <p>
            De 1990 a 2017, houve uma significativa redução histórica na
            mortalidade de crianças menores de um ano, conforme dados da Unicef,
            diminuindo de 47,1 para 13,4. Nesse período, mais de 827 mil vidas
            foram salvas, sendo o acesso às vacinas um fator crucial para esse
            avanço. Apesar da redução global, a mortalidade infantil persiste
            como um desafio, com crianças enfrentando riscos devido à falta de
            cuidados pré-natais, escassez de profissionais de saúde e condições
            socioeconômicas precárias. O acesso limitado a vacinas,
            especialmente em áreas sem saneamento básico, contribui para mortes
            evitáveis.
          </p>
        </div>
      </div>
      <div className="container-grafico">
        <img src="/grafico-ods4.png" alt="grafico" />
        <p>
          Mesmo com essa redução, de acordo com a Unicef, entre 1990 e 2007, o
          índice de violência mais do que dobrou.
          <br />
          "De 1996 a 2017, 191 mil crianças e adolescentes de 10 a 19 anos foram
          vítimas de homicídio", o estudo ainda apresenta que, a cada dia, em
          média, 32 meninas e meninos nessa faixa de idade são assassinados.
          <br />
          Em resumo, embora tenhamos testemunhado uma notável redução na
          mortalidade infantil ao longo das últimas décadas, a necessidade de
          acesso a cuidados essenciais e vacinação persiste. Devemos permanecer
          comprometidos em enfrentar esses desafios, assegurando que cada
          criança, em qualquer lugar do mundo, tenha a oportunidade de alcançar
          um futuro saudável e promissor.
        </p>
      </div>
    </div>
  );
};
