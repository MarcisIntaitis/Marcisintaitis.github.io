import '../styles/navbar.css'

export const Navbar = () => {
    return (
        <div className="nav-container">
            <a href="#main" className='nav-link'>Main</a>
            <a href="#projects" className='nav-link'>Projects</a>
            <a href="#contacts" className='nav-link'>Contacts</a>
        </div>
    );
};
