<template>
    <select>
        <option v-for="item in items" v-bind:key="item.id" v-on:click="$emit('select-option', item.value)" v-bind:value="item.value">{{ item.value }} </option>
    </select>
</template>
<script src="./DropDownComponent.js"></script>
<style src="./DropDownComponent.css"></style>
