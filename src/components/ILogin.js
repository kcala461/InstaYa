function ILogin() {
    return (
        <div class="col-lg-7">
        <form action="forms/quote.php" method="post" class="php-email-form">
          <h3>Inicia Sesión</h3>
          <p></p>
          <div class="row gy-4">

            

           

           

            <div class="col-md-12 ">
              <input type="email" class="form-control" name="email" placeholder="Correo" required></input>
            </div>

           
            <div class="col-md-12">
              <input type="password" class="form-control" name="phone" placeholder="Contraseña" required></input>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

              <button type="submit">Ingresar</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
  
  export default ILogin;