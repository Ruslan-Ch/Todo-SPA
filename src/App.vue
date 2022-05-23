<template>
  <div id="app">
    <nav>
      <router-link class="router-link" to="/" exact>Список заметок</router-link>
      <router-link class="router-link" to="/note" exact>Создать заметку</router-link>
    </nav>
    <hr/>
    <router-view/>
    <dialogs-wrapper transition-name="fade"></dialogs-wrapper>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
body {
  background-color: #DAD0E5;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
  box-sizing: border-box;
}
ul{
  padding-inline-start: 0px;
  list-style-type: none;
}
#app{
  box-shadow: 0px 0px 5px 5px rgb(150 142 142 / 27%);
  background-color: rgb(247, 247, 247);
  border-radius: 10px;
  padding: 20px 30px;
  width: 100%;
  max-width: 700px;
  margin: 10vh auto;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.router-link{
  text-decoration: none;
  color: #ff9800;
  font-size: 25px;
}
.router-link-active{
  color: #169d16;
}
hr {
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
}

.green{
  color: green
}
.red{
  color: red;
}
.orange{
  color: orange;
}
.grey{
  color: grey;
}
.black{
  color: black;
}
.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }
@media screen and (max-width: 375px) {
  #app{
    padding: 15px 15px;
  }
}
</style>
