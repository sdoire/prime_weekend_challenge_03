/**
 * Created by sarahdoire on 7/31/15.
 */
$(document).ready(function(){
    $.ajax({
        url: "/data",
        success: function (data) {
            console.log(data);
            $('#people').append("<div class='active well'>" + "<h3>Name: " + data.classmates[0].name + "</h3>" + "<h4>Description: " + data.classmates[0].description + "</h4>" + "<h4>Shoutout: " + data.classmates[0].shoutout + "</h4>" + "</div>");
            for (var i = 1; i < data.classmates.length; i++) {
                $('#people').append("<div class='inactive well'>" + "<h3>Name: " + data.classmates[i].name + "</h3>" + "<h4>Description: " + data.classmates[i].description + "</h4>" + "<h4>Shoutout: " + data.classmates[i].shoutout + "</h4>" + "</div>");
            }
        }
    });
    $('body').on('click', '.btn-primary', function() {
        var currentPerson = $('.active');
        var nextPerson = currentPerson.next();

        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if(nextPerson.length === 0) {
            nextPerson = $('#people').children().first();
            nextDot = $('.dot').first();
        }

        currentPerson.slideUp(500).removeClass('active');
        nextPerson.slideDown(500).addClass('active');

        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    $('body').on('click', '.btn-success', function() {
        var currentPerson = $('.active');
        var prevPerson = currentPerson.prev();

        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if(prevPerson.length === 0) {
            prevPerson = $('#people').children().last();
            prevDot = $('.dot').last();
        }

        currentPerson.slideUp(500).removeClass('active');
        prevPerson.slideDown(500).addClass('active');

        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });


});

