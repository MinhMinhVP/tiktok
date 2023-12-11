import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
function Paragraph(){
    const context=useContext(ThemeContext)

    return(
        <p className={context.theme}>Bùi Văn Minh</p>
    )
}

export default Paragraph