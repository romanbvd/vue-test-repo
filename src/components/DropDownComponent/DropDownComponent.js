export default {
    name: 'DropDownComponent',
    props: ['items'],
    created: function () {
        // `this` указывает на экземпляр vm
        console.log(this.items)
    }
}
