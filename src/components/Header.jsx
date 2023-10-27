const navElements = ['MongoDB', 'Express', 'React', 'Node'];

import '../App.css';

const Header = () => {
    return (
        <nav>
            <ul>
                {
                  navElements.map((element,i)=>{
                     return <li key={i.toString()}><p>{element}</p></li>
                  })
                }
            </ul>
        </nav>
    );
};

export default Header;