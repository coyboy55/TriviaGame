import { useContext } from 'react';
import SessionContext from '../../session/SessionContext';
import style from './header.module.css'
const Header = () => {
    const {session:{gameInfo}}=useContext(SessionContext);
    let {question,ammount,points,timer}=gameInfo;
    return ( 
 <header className={style.header}>
     <div className={style.container}>
         <div>
    Questions :{question}/{ammount}
</div>
<div>
Points :{points}/{ammount*1000}
</div>
<div>
Remaining time :{timer}
</div>
     </div>

 </header>
     );
}
 
export default Header;