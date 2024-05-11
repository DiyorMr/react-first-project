import './App.css'
import { Art, Car, Demo, Design, Footer, Hero, Local, Main, Manage, Navbar, Tesla } from './exportPages'
const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Main />
            <Manage />
            <Art />
            <Local />
            <Design />
            <Tesla />
            <Car />
            <Demo />
            <Footer />
        </>
    )
}
export default App