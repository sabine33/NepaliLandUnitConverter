new Vue({
    el: "#app",
    data: {
        from: "Bigha",
        to: "Ropani",
        area: 0,
        base: "Bigha",
        conversion_rates: [],
        isLoaded: false
    },
    computed: {
        //return conversion result
        result() {
            if (!this.isLoaded || this.from == undefined || this.to == undefined || this.area < 0 || this.area == undefined) return "NaN";
            var rate = (this.conversion_rates[this.base][this.to] / this.conversion_rates[this.base][this.from]);
            console.log(rate);
            return (rate * Number(this.area)).toFixed(2);
        }
    },
    mounted() {
        this.conversion_rates = {
            "Bigha": {
                "Bigha": 1,
                "Kattha": 20,
                "Meter Squared": 6772.63,
                "Square Feet": 72900,
                "Ropani": 13.31,
                "Aana": 13.31 * 16,
                "Paisa": 13.31 * 64,
                "Daam": 256 * 13.31,
                "MatoMuri": 4 * 13.31,
                "Dhur": 20 * 20,
            },
            "Kattha": {
                "Dhur": 20,
                "Meter Squared": 338.63,
                "Square Feet": 3645,
            },
            "Dhur": {

                "Meter Squared": 16.93,
                "Square Feet": 182.25
            },
            "Ropani": {
                "Aana": 16,
                "Paisa": 64,
                "Meter Squared": 508.72,
                "Square Feet": 5476,
                "Daam": 256,
                "MatoMuri": 4
            },
            "Khetmuri": {
                "Ropani": 25,

            },
            "Aana": {
                "Paisa": 4,
                "Meter Squared": 31.80,
                "Square Feet": 342.25,
                "Daam": 16

            },
            "Paisa": {
                "Daam": 4,
                "Meter Squared": 7.95,
                "Square Feet": 85.56
            },
            "Daam": {

                "Meter Squared": 1.99,
                "Square Feet": 21.39
            },
            "Haath": {
                "Feet": 1.5,

            },


        };
        console.log(this.conversion_rates["Bigha"]);
        this.isLoaded = true;
        this.applyAddons();

    },
    methods: {

        //add custom conversion rates
        applyAddons() {

        }
    }
});