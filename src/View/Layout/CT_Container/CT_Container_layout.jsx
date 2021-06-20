import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// pages
import CT_Layouts_page from 'View/Pages/CT_Layouts/CT_Layouts_page'
import CT_Dash_page from 'View/Pages/CT_Dash/CT_Dash_page'
const CT_Container_layout = ()=>{
    const CT_Container_layout_Temp = ()=>{
        return(
            <Router>
                <main>
                    <Switch>
                        <Route path="/layouts">
                            <CT_Layouts_page/>
                        </Route>
                        <Route path="/dash">
                            <CT_Dash_page/>
                        </Route>
                    </Switch>
                </main>
            </Router>
        )
    }
    return CT_Container_layout_Temp()
}
// {EXPORT}
export default CT_Container_layout