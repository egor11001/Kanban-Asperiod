import Header from "../Header"
import SideBar from "../SideBar"
import styled from '@emotion/styled'

const SideStyle = styled('div')`
    display: flex;
`


const Layout = ({children}) => (
    <>
        <div>
            <Header/>
        </div>
        <SideStyle>
            <SideBar/>
            {children}
        </SideStyle>
    </>
);

export default Layout;