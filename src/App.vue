<template>
  <div class="header">
    <img src="./assets/title.png" />
    <!-- font: good dog -->
    <p>
      Prova ad indovinare quale colore gener&agrave; l'applicazione
      <strong>randomicamente</strong>.
      <br>
      Vinci in caso il tuo punteggio sia almeno 2.
    </p>
    <h2>Punteggio: {{ score }}</h2>
    <h2>Tentativi rimanenti: {{ attempts }}</h2>
  </div>

  <div class="form">
    <h2>Inserisci il colore:</h2>
    <label for="color">Colore</label>
    <select
      name="color"
      id="color"
      class="w-25"
      v-model="color"
      @change="onChangeColor"
      style="margin-right: 5px"
    >
      <option></option>
      <option value="nero">Nero</option>
      <option value="bianco">Bianco</option>
      <option value="rosso">Rosso</option>
      <option value="verde">Verde</option>
      <option value="blu">Blu</option>
      <option value="azzurro">Azzurro</option>
      <option value="giallo">Giallo</option>
      <option value="grigio">Grigio</option>
    </select>
    <button
      :class="['btn-'] + colorButton"
      class="btn"
      @click="colorValidation"
    >
      Invia
    </button>
    <br />
    <span v-if="isError" class="text-danger">Devi inserire un colore!</span>
  </div>

  <div class="result" v-if="isFinishGenerate">
    <h3 v-if="isRight" class="text-success">Corretto</h3>
    <h3 v-else class="text-danger">Sbagliato</h3>
    <p>
      Il colore che &egrave; stato generato &egrave;
      <strong>{{ randomColor }} </strong>.
    </p>
    <div class="rect" :class="['bg-'] + colorRect"></div>
  </div>
  <EndGameModal
    :showModal="showModal"
    :score="score"
    :goal="goal"
    @restart="resetData"
    @close="showModal = false"
  />
</template>

<script>
import EndGameModal from "./components/EndGameModal";

export default {
  name: "App",
  components: { EndGameModal },
  data() {
    return {
      color: "",
      colorButton: "dark",
      colorRect: "dark",
      isError: false,
      colors: [
        "bianco",
        "nero",
        "rosso",
        "verde",
        "blu",
        "azzurro",
        "giallo",
        "grigio",
      ],
      randomColor: "",
      isRight: false,
      isFinishGenerate: false,
      score: 0,
      attempts: 10,
      propability: 0,
      goal: 2,
      showModal: false,
    };
  },
  methods: {
    onChangeColor() {
      switch (this.color) {
        case "bianco":
          this.colorButton = "light";
          break;
        case "nero":
          this.colorButton = "dark";
          break;
        case "rosso":
          this.colorButton = "danger";
          break;
        case "verde":
          this.colorButton = "success";
          break;
        case "blu":
          this.colorButton = "primary";
          break;
        case "azzurro":
          this.colorButton = "info";
          break;
        case "giallo":
          this.colorButton = "warning";
          break;
        case "grigio":
          this.colorButton = "secondary";
          break;
        default:
          this.colorButton = "dark";
      }
    },
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
      this.getColorRect();
      if (this.attempts == 0) this.showModal = true;
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getResult() {
      this.attempts--;
      if (this.color == this.randomColor) {
        this.isRight = true;
        this.score++;
      } else {
        this.isRight = false;
      }
      this.isFinishGenerate = true;
    },
    getColorRect() {
      switch (this.randomColor) {
        case "bianco":
          this.colorRect = "light";
          break;
        case "nero":
          this.colorRect = "dark";
          break;
        case "rosso":
          this.colorRect = "danger";
          break;
        case "verde":
          this.colorRect = "success";
          break;
        case "blu":
          this.colorRect = "primary";
          break;
        case "azzurro":
          this.colorRect = "info";
          break;
        case "giallo":
          this.colorRect = "warning";
          break;
        case "grigio":
          this.colorRect = "secondary";
          break;
        default:
          this.colorRect = "dark";
      }
    },
    resetData() {
      this.color = "";
      this.colorButton = "dark";
      this.colorRect = "dark";
      this.isError = false;
      this.randomColor = "";
      this.isRight = false;
      this.isFinishGenerate = false;
      this.score = 0;
      this.attempts = 10;
      this.showModal = false;
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
}

img {
  height: 200px;
  width: 400px;
}

label {
  padding-right: 5px;
}

.result {
  display: inline-block;
}

.btn {
  border: outset !important;
}

.rect {
  height: 50px;
  width: 300px;
  border-style: outset;
}

@media screen and (max-width: 400px) {
  img {
    height: 200px;
    width: 300px;
  }
}
</style>
