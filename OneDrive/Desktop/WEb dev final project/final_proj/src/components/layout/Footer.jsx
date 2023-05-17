

function Footer() {
    const footerYear = new Date().getFullYear()
    return (

    <div>
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <p>Copyright &copy; {footerYear}</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer;