import style from './header.module.css'
const Header = () => {
    return ( 
 <header className={style.header}>
     <div className={style.container}>
         <div>
    Questions :
</div>
<div>
Points :
</div>
<div>
Remaining time :
</div>
     </div>

 </header>
     );
}
 
export default Header;