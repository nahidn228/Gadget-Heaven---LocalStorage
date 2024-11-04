
const Footer = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-16 p-10 w-full ">
        <div className="text-center space-y-4">
          <h3 className="text-4xl font-bold">Gadget Heaven</h3>
          <p className="text-lg text-gray-700">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="divider"></div>
       
        <footer className="footer p-10 w-full lg:w-3/4 mx-auto lg:pl-20">
    <nav>
      <h6 className="footer-title">Services</h6>
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav>
    <nav>
      <h6 className="footer-title">Company</h6>
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav>
    <nav>
      <h6 className="footer-title">Legal</h6>
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer>
       
      </div>
    );
  };
  
  export default Footer;
  