import React from 'react';

function Footer () {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="primary-button">
              <a href="#home">Back To Top</a>
            </div>
            <ul>
              <li><a href="https://www.facebook.com/ahmed.alsabbahy"><i className="fa fa-facebook"></i></a></li>
              <li><a href="https://twitter.com/AhmedAlSabbahy"><i className="fa fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/in/ahmedmostafaalsabbahy"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://www.github.com/alsabbahy"><i className="fa fa-github"></i></a></li>
              <li><a href="https://www.instagram.com/sabbahy.dev"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <p>Copyright &copy; { year } Sabbahy.Dev</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
