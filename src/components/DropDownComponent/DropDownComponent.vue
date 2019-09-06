<template>
    <select>
        <option v-for="item in items" v-bind:key="item.id">{{ item.value }} </option>
    </select>
</template>
<script src="./DropDownComponent.js"></script>
<style src="./DropDownComponent.css"></style>
