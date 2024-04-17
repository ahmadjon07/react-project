import './Header.css'

function Header() {
    return(
        <section className='header'>
            <style>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&display=swap')
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap')
</style>
            <div className="container">
                <div className="wrapper">
                    <div className="logo">
                        <h2>Bean Scence</h2>
                    </div>
                    <nav className="nav">
                        <ul className="header__list">
                            <li className='list__item'>
                                <a href="#">
                                   Home 
                                </a>
                            </li>
                            <li className='list__item'>
                                <a href="#">
                                    Menu
                                </a>
                            </li>
                            <li className='list__item'>
                                <a href="#">
                                    About us
                                </a>
                            </li>
                            <li className='list__item'>
                                <a href="#">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="login__buttons">
                        <a href="#" className='sign_in'>Sign in</a>
                        <button className='login__btn'>Sign up</button>
                    </div>
                </div>
                <h2 className='header__title'>We’ve got your morning covered with</h2>
                <h1 className='header__title2'>Coffe</h1>
                <p className='header__text'>It is best to start your day with a cup of coffee. Discover the <br />
best flavours coffee you will ever have. We provide the best <br />
for our customers.</p>
                <button className='order__btn'>Order now</button>
            </div>
        </section>
    )
}

export default Header