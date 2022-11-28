<script src="./footer.js"></script>

<template>
    <footer class="page-footer green">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Johan Román</h5>
                    <a class="grey-text text-lighten-4 waves-effect waves-light" href="https://github.com/rojo95" target="_blank">
                        Github: <b>rojo95</b>
                    </a>
                    <br>
                    <a class="grey-text text-lighten-4 waves-effect waves-light" href="https://www.linkedin.com/in/johan-román-510b21162/" target="_blank">
                        Linkedin: <b>Johan Román</b>
                    </a>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Menú</h5>
                    <ul>
                        <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/">Sobre mí</RouterLink></li>
                        <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/projects">Portafolio</RouterLink></li>
                        <li><RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/work-experience">Experiencia Laboral</RouterLink></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <div class="container">
            © {{d}} Copyright - Hecho con <i class="material-icons tiny purple-text">favorite</i> por Johan Román
            <!-- <a class="grey-text text-lighten-4 right" href="#!">More Links</a> -->
            </div>
        </div>
    </footer>
</template>

<style scoped src="./footer.css"></style>