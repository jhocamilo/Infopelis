import React , {Fragment}from 'react'
import Login from './Login'
import ReactDOM from 'react-dom'
import List from './containers/List'
import 'bootswatch/dist/darkly/bootstrap.min.css';
 
  

const App = ()=> {

    
    return(
        <Fragment>
            <nav className = "navbar navbar-dark bg-dark border-bottom border-black" >
                <h1 href ="/" className="navbar=brand">
                Infopelis
                </h1>
            <Login/>
            </nav>


        <main className="bg-dark">
            <div className="container">
                <List/>
            </div>
        </main>
        </Fragment>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))