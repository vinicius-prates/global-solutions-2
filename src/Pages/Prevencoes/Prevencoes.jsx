import { Navbar } from "../../Components/Navbar/Navbar"

 export const Prevencoes = () => {
    return(
        <div className="prevencoes-main-container">
            <Navbar/>
            <div className="prevencoes-container">
                <div className="prevencoes-tipos">
                    <h1>PREVENÇÃO E TRATAMENTO DE DOENÇAS NÃO TRANSMISSÍVEIS</h1>
                    <ul>
                        <h3>Melhoria da Qualidade de Vida:</h3>
                        <li>Prevenção: Adotar hábitos saudáveis reduz o risco de desenvolver doenças não transmissíveis.</li>
                        <li>Tratamento: Intervenções eficazes melhoram a qualidade de vida dos afetados.</li>
                    </ul>
                    <ul>
                        <h3>Redução de Fatores de Risco:</h3>
                        <li>Prevenção: Identificar e reduzir fatores de risco, como tabagismo e dieta inadequada.</li>
                        <li>Tratamento: Controlar fatores de risco ajuda na gestão contínua da doença.</li>
                    </ul>
                    <ul>
                        <h3>Promoção da Conscientização:</h3>
                        <li>Prevenção: Educar a população sobre a importância da prevenção.</li>
                        <li>Tratamento: Conscientizar sobre a gestão e o controle eficaz das doenças.</li>
                    </ul>
                </div>
            </div>
            <div className="grafico-prevencao">
                <img src="/grafico-prevencao.png" alt="blob"/>
            </div>
        </div>
    )
 }