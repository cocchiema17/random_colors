<template>
  <div class="header">
    <h1>Colori Random</h1>
    <p>
      Prova ad indovinare quale colore gener&agrave; l'applicazione
      <strong>randomicamente</strong>.
    </p>
    <h2>Punteggio: {{ score }}</h2>
    <h2>Tentativi: {{ attempts }}</h2>
  </div>

  <div class="form">
    <h2>Inserisci il colore:</h2>
    <label for="color">Colore</label>
    <select name="color" id="color" v-model="color">
      <option></option>
      <option value="nero">Nero</option>
      <option value="bianco">Bianco</option>
      <option value="rosso">Rosso</option>
      <option value="verde">Verde</option>
      <option value="blu">Blu</option>
    </select>
    <span v-if="isError">Devi inserire un colore!</span>
    <button class="btn btn-dark" @click="colorValidation">Invia</button>
  </div>

  <div class="result" v-if="isFinish">
    <h3 v-if="isRight">Corretto</h3>
    <h3 v-else>Sbagliato</h3>
    <p>Il colore che &egrave; stato generato &egrave; {{ randomColor }}</p>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      color: "",
      isError: false,
      colors: ["bianco", "nero", "rosso", "verde", "blu"],
      randomColor: "",
      isRight: false,
      isFinish: false,
      score: 0,
      attempts: 0,
    };
  },
  methods: {
    colorValidation() {
      if (this.color == "") this.isError = true;
      else {
        this.isError = false;
        this.generateColor();
      }
    },
    generateColor() {
      let min = 0;
      let max = this.colors.length - 1;
      let randomNumber = this.getRandomInt(min, max);
      this.randomColor = this.colors[randomNumber];
      this.getResult();
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getResult() {
      if (this.color == this.randomColor) {
        this.isRight = true;
        this.score++;
      } else {
        this.isRight = false;
        this.score--;
      }
      this.isFinish = true;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
