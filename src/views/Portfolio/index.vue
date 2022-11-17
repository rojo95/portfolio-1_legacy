<template>
    <div class="section bg-dark">
      <div class="container">
        <div class="row">
          <div class="col s12">
            
            <div class="slider">

                <ul class="slides">
                    <li>
                        <img src="https://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg" alt="slide1">
                        <div class="caption center">
                            <h3>Titulo que frao</h3>
                            <h5 class="light">Información adicional</h5>

                        </div>
                    </li>
                </ul>

            </div>
            
          </div>
        </div>
      </div>
    </div>
</template>


<script setup>
document.addEventListener('DOMContentLoaded', function() {
   // Always add stuff to the page BEFORE running the init
   // Anything hardcoded to the page will be fine if wrapped in a document ready.
   M.AutoInit();
   // Anything added after the init will NOT be initialised. It's a one time thing. Run the init at the end of any dynamic additions.
});
</script>