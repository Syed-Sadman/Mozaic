import Nav from './common/nav/Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <div className="page-content">
                {children}
            </div>
            <div className="bg-img"></div>
        </>
    );
}

export default Layout;