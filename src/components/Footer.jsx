let status = true;
const Footer = () => {
    return (
        <div className="footer">
            {
                status?
                <button>LogOut</button>
                :
                <button>LogIn</button>
            }
        </div>
    );
};

export default Footer;