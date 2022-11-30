function forgetpassword() {
    return (
        <div class="col-lg-7">
        <form action="forms/quote.php" method="post" class="php-email-form">
          <h3>Olvidé mi contraseña</h3>
          <p></p>
          <div class="row gy-4">

            

            <div class="col-lg-12">
              <h4>Olvidé mi contraseña</h4>
            </div>

           

            <div class="col-md-12 ">
              <input type="email" class="form-control" name="email" placeholder="Ingresa el correo de recuperación" required></input>
            </div>

           
            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your quote request has been sent successfully. Thank you!</div>

              <button type="submit">Recuperar contraseña</button>
            </div>

          </div>
        </form>
      </div>
    );
  }
  
  export default forgetpassword;