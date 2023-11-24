import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Card } from "../../Components/Card/Card";
export const MelhoriasGerais = () => {
  return (
    <div>
      <Navbar />
      <div className="melhorias-gerais">
        <div className="melhorias-text">
          <h1>MELHORIA GERAL DA SAÚDE </h1>
          <Card
            paragraph='A meta da ODS 3 é "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades". Essa meta tem como objetivo principal melhorar a saúde global, abordando uma variedade de questões, desde a redução da mortalidade infantil e materna até o combate a doenças transmissíveis e não transmissíveis. Além disso, busca garantir acesso universal aos serviços de saúde, promover a saúde mental e prevenir surtos de doenças. A ODS 3 visa alcançar um nível elevado de saúde para todas as pessoas, contribuindo assim para o desenvolvimento sustentável.

Prevenção do abuso de substâncias: Estratégias para evitar o uso indevido de drogas e álcool, promovendo comportamentos saudáveis.
Redução de acidentes de trânsito: Medidas para diminuir acidentes rodoviários, incluindo regulamentação, educação e segurança no trânsito.

Acesso universal a serviços de saúde sexual e reprodutiva: Garantir que todos tenham acesso a cuidados de saúde relacionados à sexualidade e reprodução, como planejamento familiar e prevenção de doenças.

Redução de mortes por produtos químicos perigosos: Minimizar impactos negativos na saúde causados por produtos químicos tóxicos, através de regulamentações e práticas mais seguras na indústria.'
          />
        </div>
      </div>
    </div>
  );
};
