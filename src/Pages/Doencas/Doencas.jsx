import { Navbar } from "../../Components/Navbar/Navbar"

export const Doencas = () => {
    
    return(
        <div>
       <Navbar/>
       <div className="doencas-container">
        <div>

        <h1>DOENÇAS TRANSMISSÍVEIS (BRASIL)</h1>
       
        <div className="doencas">
            <div>
                <p>Combater doenças é crucial para a saúde pública. Investir em prevenção, tratamento e conscientização é essencial.
                 A página destaca  as principais doenças transmissíveis e sua taxa de mortalidade, afim de,  conscientizar buscando uma nação mais saudável.  
                 </p>

            </div>
            <div className="doencas-infos">
                <h4 className="principais-doencas">PRINCIPAIS DOENÇAS TRANSMISSÍVEIS</h4>
                <ul>
                    <li>COVID-19: A COVID-19, pelo SARS-CoV-2, impactou globalmente, com taxas de mortalidade variáveis.</li>
                    <li>DENGUE: Transmitida pelo Aedes aegypti, a dengue tem baixa mortalidade, mas morbidade significativa, especialmente em casos graves.</li>
                    <li>ZIKA E CHIKUNGUNYA: Zika e Chikungunya, pelo Aedes aegypti, têm baixa mortalidade, mas complicações, especialmente em gestantes, podem ser sérias.</li>
                    <li>FEBRE AMARELA: Transmitida por mosquitos, a febre amarela tem alta mortalidade em casos graves, destacando a importância da vacinação.</li>
                    <li>HIV/AIDS: Causado pelo HIV, a mortalidade varia conforme o acesso ao tratamento e fatores individuais.</li>
                    <li>TUBERCULOSE: A tuberculose, pelo Mycobacterium tuberculosis, tem mortalidade relacionada à detecção precoce e tratamento eficaz</li>
                </ul>
            </div>
        </div>
        </div>
       <img className="grafico-doencas" src="/grafico-doencas.png" alt="blob"/>
       </div>
        </div>
    )
}
