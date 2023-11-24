/* eslint-disable jsx-a11y/anchor-is-valid */

import { Card } from "../Card/Card"

/* eslint-disable jsx-a11y/alt-text */
export const Landing = () => {
  
      return(
        <div>

        <div className="landing-container">
            <div className="infos">
                <h1>Transformando diagnósticos mamários com precisão e inovação</h1>
                <a href="https://www.google.com.br">Saiba Mais</a>
            </div>
            <div className="image">
                <img src="/woman1.png" alt="woman1"/>
            </div>
        </div>
        <div className="woman-infos-one">
            <div className="woman-infos-one-ft">
            <p><b>1 em cada 8 mulheres</b> serão diagnosticadas com câncer de mama durante sua vida</p>
            <p><b>95%</b> dos casos tem cura caso <b>diagnosticado cedo</b></p>
            </div>
            <img className="woman2" src="woman2.png"/>
            <div className="woman-infos-one-st">
                <p><b>600 mil</b> mulheres morrem <b>por ano</b> no mundo pela doença</p>
                <a href="" className="">Saiba Mais</a>
            </div>

        </div>
        <div className="problems">
            <h1><b>OS PROBLEMAS QUE A FALTA DE PRECISÃO EM TECIDOS DENSOS PODEM CAUSAR</b></h1>
            <div className="cards">
                <Card title='DIAGNÓSTICOS TARDIOS' paragraph='Tecidos densos são mais difíceis de visualizar padrões diferentes. Resultando em diagnósticos tardios.'/>
                <Card title='FALSOS POSITIVOS' paragraph='Pela dificuldade de visualização, é muito comum ocorrer falso positivo. Resultando em procedimentos invasivos.'/>
                <Card title='AUMENTO DE CUSTOS' paragraph='Resultado de falsos positivos, pois aumentam o custos de exames desnecessários para ambos os lados.'/>
                                

            </div>
        </div>
        <div className="solucao">
            <h1><b>NOSSA SOLUÇÃO</b></h1>
        </div>
        </div>
    )
}