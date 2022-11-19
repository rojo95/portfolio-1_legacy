<template>
    <div>
        <nav>
            <div class="nav-wrapper green">
                <a href="#" class="brand-logo">&nbsp;<b>Johan Román</b></a>
                <ul id="slide-out" class="sidenav bg">
                    <li class="sidenav-close" ><RouterLink class="grey-text text-lighten-3 waves-effect" to="/">Sobre Mí</RouterLink></li>
                    <!-- <li class="sidenav-close" ><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/projects">Portafolio</RouterLink></li> -->
                    <li class="sidenav-close" ><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/work-experience">Experiencia Laboral</RouterLink></li>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/">Sobre Mí</RouterLink></li>
                    <!-- <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/projects">Portafolio</RouterLink></li> -->
                    <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/work-experience">Experiencia Laboral</RouterLink></li>
                </ul>
                <a href="#" data-target="slide-out" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
            </div>
        </nav>
            
    </div>
</template>

<style scoped src="./nav.css"></style>