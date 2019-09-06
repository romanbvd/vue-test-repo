<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <span>Monitor</span><br>
    <DropDownComponent v-bind:items="itemsFirst"></DropDownComponent>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <DropDownComponent v-bind:items="itemsSecond"></DropDownComponent>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
