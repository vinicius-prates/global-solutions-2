/* eslint-disable jsx-a11y/anchor-is-valid */
export const Navbar = () => {
  const pathname = window.location.pathname

  return (
    <div className="container">
      <h1 className="title">
        <a href="/">Mamo Insight</a>
      </h1>
      <div className="page-links">
        <a href="/mi-reduction" style={pathname === `/mi-reduction` ? activeStyle: notActive}>Redução MI</a>
        <a href="/doencas" style={pathname === `/doencas` ? activeStyle: notActive}>Doenças</a>
        <a href="/prevencoes" style={pathname === `/prevencoes` ? activeStyle: notActive}>Prevenções</a>
        <a href="/melhorias-gerais" style={pathname === `/melhorias-gerais` ? activeStyle: notActive}>Melhoria Geral</a>
      </div>
    </div>
  );
};

const activeStyle = {
  borderBottom: "solid 3px #FF6884"
}

const notActive = {

}