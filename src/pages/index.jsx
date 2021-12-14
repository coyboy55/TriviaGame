
import { Fragment } from 'react';
import Header from '../components/header/header'
import style from './index.module.css'
import Logo from '../media/logo.jpg'
import { useHistory } from 'react-router';
const Welcome = () => {
    let history=useHistory()
    const GetStarted=()=>{
history.push({pathname:'/question'})
    }
    return ( 
        <Fragment>
            <Header/>
          
        <div className={style.container}>
            <center>
                <img src={Logo} className={style.img} alt='logo'/>
                <h3>
                    A Trivia Game
                </h3>
                <input type='button' value='GET STARTED' className={style.button} onClick={GetStarted}/>
            </center>

        </div>
           
        </Fragment>
     );
}
 
export default Welcome;