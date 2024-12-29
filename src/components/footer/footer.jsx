import "./footer.css"

const fechaHoraActual = () => {

    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"

        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + "-"
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

    return datetime;
}

const Footer = () => {
    return (
        <footer>
            <p>Jhon Roberth Fernandez - Derechos reservados</p>
            <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">LikedIn</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
            <div className="unir-header">
                <b>{fechaHoraActual()}</b>
            </div>
        </footer>
    );
}

Footer.displayName = "Footer";

export default Footer;