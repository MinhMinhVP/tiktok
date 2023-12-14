import { Routes,Route,Link } from 'react-router-dom'
import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContantPage from './pages/Contant'

function App(){
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contant">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/news' element={<NewsPage/>}/>
                <Route path='/contant' element={<ContantPage/>}/>
            </Routes>
        </div>
    )
}

export default App