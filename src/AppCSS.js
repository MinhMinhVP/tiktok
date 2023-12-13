import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyles from './components/GlobalStyle'
function App(){
    return (
        <GlobalStyles>
            <div style={{padding:'50px'}}>
                <Heading/>
                <Paragraph/>
            </div>
            <div className='d-flex'>
                <div>item 1</div>
                <div>item 2</div>
            </div>
        </GlobalStyles>
        
    )
}

export default App