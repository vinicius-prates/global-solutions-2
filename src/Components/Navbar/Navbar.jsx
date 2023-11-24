/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  return (
    <div className="title">
      <h1><a href="/">Mamo Insight</a></h1>
      <div className="pages">
        <ul>
            <li><a href="/mi-reduction">Redução MI</a></li>
            <li><a href="/doencas">Doenças</a></li>
            <li><a href="/prevencoes">Prevenções</a></li>
            <li><a href="/melhorias-gerais">Melhoria Geral</a></li>
        </ul>
      </div>
    </div>
  );
};
