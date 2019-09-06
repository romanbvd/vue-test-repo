import DropDownComponent from './components/DropDownComponent/DropDownComponent.vue'

export default {
    name: 'app',
    components: {
        DropDownComponent
    },
    data: function() {
        return {
            itemsFirst: this.getFirstData(),
            itemsSecond: this.getSecondData()
        }
    },
    methods: {
        getFirstData: function () {
            return [
                {
                    id: 1,
                    value: 'First Item'
                },
                {
                    id: 2,
                    value: 'Second Item'
                },
                {
                    id: 3,
                    value: 'Third Item'
                }
            ];
        },
        getSecondData: function () {
            return [
                {
                    id: 4,
                    value: 'Four Item'
                },
                {
                    id: 5,
                    value: 'Five Item'
                },
                {
                    id: 6,
                    value: 'Six Item'
                }
            ];
        }
    }
}
