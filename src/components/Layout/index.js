import './layout.css';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <div className='layout'>
        <div className="title">Famous Dishes</div>
        <button className='logout'>Logout</button>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Layout;
