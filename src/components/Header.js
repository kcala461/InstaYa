function header() {
    return (
        <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center">
        <h1>InstaYa</h1>
      </a>

      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="index.html" class="active">Inicio</a></li>
          <li><a href="about.html">Lo que somos</a></li>
          <li><a href="services.html">Lo que hacemos</a></li>
          <li><a href="contact.html">Contáctenos</a></li>
          <li><a class="get-a-quote" href="get-a-quote.html">Inicia Sesión</a></li>
        </ul>
      </nav>

    </div>
  </header>
    );
  }
  
  export default header;