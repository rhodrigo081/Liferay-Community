import styles from './Header.module.css'


export function Header(){
 return (
    <>
    <header className={styles.Header}>
        <img className = {styles.Logo}src="./src/logo_liferay.png" />
        <a href="">Perfil</a>
    </header>
    </>
 )

}