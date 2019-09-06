<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"><br>
    <span>Monitor <input type="text" v-bind:value="currentMonitorText"/></span><br><br>
    <DropDownComponent v-bind:items="itemsFirst" v-on:select-option="setMonitorValue"></DropDownComponent>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <DropDownComponent v-bind:items="itemsSecond" v-on:select-option="setMonitorValue"></DropDownComponent>
  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>
