function Counter() {
    return (
    <section id="stats-counter" class="stats-counter pt-0" >
      <div class="container" data-aos="fade-up"  >

        <div class="row gy-4"   >

          <div class="col-lg-3 col-6" style="margin: 0 auto;">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
              <p>Clientes</p>
            </div>
          </div>

          <div class="col-lg-3 col-6" style="margin: 0 auto;">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
              <p>Entregas</p>
            </div>
          </div>

          <div class="col-lg-3 col-6" style="margin: 0 auto;">
            <div class="stats-item text-center w-100 h-100">
              <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
              <p>Trabajadores</p>
            </div>
        </div>
        </div>
     </div>
    </section>
    );
  }
  
  export default Counter;