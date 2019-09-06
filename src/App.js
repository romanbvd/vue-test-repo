import DropDownComponent from './components/DropDownComponent/DropDownComponent.vue'

export default {
    name: 'app',
    components: {
        DropDownComponent
    },
    data: function() {
        return {
            currentMonitorText: "",
            itemsFirst: this.getFirstData(),
            itemsSecond: this.getSecondData()
        }
    },
    methods: {
        setMonitorValue: function(text){
            alert(text);
            this.currentMonitorText = text;
        },
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
