<script>
export default {
    props: {
        data: Object,
    },
    data() {
        return {
            show: false,
            image: '',
        }
    },
    mounted() {
        this.image = new URL(`/src/assets/img/projects/${this.data.thumb}`, import.meta.url);
    },
    methods: {
        loaded() {
            this.show = true;
        },
        encrypt(id) {
            let data = id, key = '-belarus';
            data = this.hardEncrypt(data+key);
            return data;
        },
        hardEncrypt(data) {
            let characters = [
                ['a', 'yiOYZErZcq'],
                ['b', 'SUicyqdNif'],
                ['c', '3CWlCzoFfO'],
                ['d', 'hhn1i'],
                ['e', 'eNC'],
                ['f', 'SJCQO2jQN'],
                ['g', 'UzGR6'],
                ['h', 'tKFl178GT'],
                ['i', 'HShtT'],
                ['j', 'EIkTtHK9'],
                ['k', 'a2hjG'],
                ['l', 'H4iQw9AdBqM'],
                ['m', '6ZFPeeCStznryVu'],
                ['n', 'JPvg6zWGD'],
                ['ñ', 'H7BbGDOAovN'],
                ['o', 'HMuDN'],
                ['p', 'LU5wr'],
                ['q', '3Ir5j'],
                ['r', '9hI'],
                ['s', '3rmXzscul2z'],
                ['t', 'Xt4LT46tKDwTx6C'],
                ['u', 'xnkhS'],
                ['v', 'v2FXmyRQBqL'],
                ['w', 'VHspuNHqwFsBxiH'],
                ['x', 'NIJyfqqmu'],
                ['y', 'k198s7gT4O8Leb6'],
                ['z', 'ivwFQSqv'],
                ['A', 'h8TEN'],
                ['B', 'KkQY0cDG0'],
                ['C', 'qLzLbdq4BURbSx0'],
                ['D', 'DydlQsGAn'],
                ['E', 'MPxD0JKMqpY'],
                ['F', '8WsYo4wo'],
                ['G', 'MPzhB9ukMl4vEgu'],
                ['H', '9ktdH'],
                ['I', 'pJthXMQlM'],
                ['J', 'rloECtVnxhJSY2R'],
                ['K', 'kGk'],
                ['L', 'Trc7I'],
                ['M', 'lLuex92v'],
                ['N', 'h6G0hnYM1UV'],
                ['Ñ', 'CNgfr89En'],
                ['O', 'l2OkTQ0kRD3C2X4'],
                ['P', 'JMwQV'],
                ['Q', '42RNQpLbZhX'],
                ['R', 'IjCDdwnjO'],
                ['S', 'UjnTz'],
                ['T', 'vPZ'],
                ['U', 'dhVVU'],
                ['V', 'jxluQXUKP'],
                ['W', 'ID9ts'],
                ['X', 'Knr'],
                ['Y', '2xs1xHuYqfY'],
                ['Z', 'rTZc1o01'],
                ['0', 'LM7KJTbLKIW3qxs'],
                ['1', 'WZ3dEW1L4SlJFoD'],
                ['2', '7mrYoNFa'],
                ['3', 'TOzM'],
                ['4', 'xbxeuOHf'],
                ['5', 'Gisb'],
                ['6', 'ULJButIr'],
                ['7', '7GQ9jblN'],
                ['8', 'hgMr'],
                ['9', 'JxIsbFoQ'],
                ['-', 'kp5J'],
                [' ', 'rxm3'],
            ];
            
            let newArray = [];

            for (let i = 0; i < characters.length; i++) {
                const element = characters[i];
                if(data.search(element[0]) >= 0 ) {
                    const char = data.search(element[0]);
                    newArray.push([char,element[1]])
                }
            }
            
            newArray.sort((a,b)=>{
                return a[0]-b[0];
            });

            let finalArr = [];

            for (let i = 0; i < newArray.length; i++) {
                let element = newArray[i];
                finalArr.push(element.pop());    
            }

            let finalString = finalArr.join('');

            return btoa(btoa(finalString));

        },
    },
}
</script>
<template>
    <div class="col s12 m4">
        <div class="card">
            <div class="card-image center-align s12">
                <div class="loader" v-show="!show">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img :src="image" @load="loaded()" v-show="show">
                <span class="card-title" :class="!show ? 'black' : data.color_title ? data.color_title : 'white black-text'">{{data.title}}</span>
                <RouterLink class="btn-floating halfway-fab waves-effect waves-light purple btn-large" :to="'/project-details/'+encrypt(data.id)">
                    <i class="material-icons">add</i>
                </RouterLink>
            </div>
            <div class="card-content black-text">
                <p>{{data.info}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loader {
    min-height: 300px; top: 100px;
}
span.card-title {
    border-top-right-radius: 10px;
}
</style>