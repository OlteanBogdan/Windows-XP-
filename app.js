$(document).ready(function () {


    displayHour = function () {
        var date = new Date()
        var hour = date.getHours()
        var minutes = date.getMinutes()
        var fullHour = hour + ":" + minutes

        $('.clock').text(fullHour)

        if (minutes < 10) {
            fullHour = hour + ":" + '0' + minutes
        }
        console.log(fullHour)
    }

    displayHour()


});