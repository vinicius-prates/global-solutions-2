/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  return (
    <div className="container">
      <h1 className="title">
        <a href="/">Mamo Insight</a>
      </h1>
      <div className="page-links">
        <a href="/mi-reduction">Redução MI</a>
        <a href="/doencas">Doenças</a>
        <a href="/prevencoes">Prevenções</a>
        <a href="/melhorias-gerais">Melhoria Geral</a>
      </div>
    </div>
  );
};
