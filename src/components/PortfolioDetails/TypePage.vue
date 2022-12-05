<script>
export default {
    props: {
      type: Object,
    },
}
</script>

<template>
    <p class="text-justify paragraph">
        <ul class="collection with-header">
            <li class="collection-header black-text"><h5>Tipo de Página Web</h5></li>
            <li class="collection-item black-text" v-for="(item, i) in type" :key="i">
                <div>
                    {{item}}
                </div>
            </li>
        </ul>
    </p>
</template>