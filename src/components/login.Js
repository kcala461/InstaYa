function login() {
    return (
        <div class="col-lg-7">
        <form action="forms/quote.php" method="post" class="php-email-form">
          <h3>Registro</h3>
          <p></p>
          <div class="row gy-4">

            

            <div class="col-lg-12">
              <h4>Datos personales</h4>
            </div>

            <div class="col-md-12">
              <input type="text" name="name" class="form-control" placeholder="Nombre" required></input>
            </div>

            <div class="col-md-12 ">
              <input type="email" class="form-control" name="email" placeholder="Correo" required></input>
            </div>

            <div class="col-md-12">
              <input type="text" class="form-control" name="phone" placeholder="Télefono" required></input>
            </div>

            <div class="col-md-12">
              <input type="password" class="form-control" name="phone" placeholder="Contraseña" required></input>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

              <button type="submit">Registrarse</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
  
  export default login;