/**
 * Created by sarahdoire on 7/31/15.
 */
$(document).ready(function(){
    $.ajax({
        url: "/data",
        success: function (data) {
            console.log(data);
            //$('#people').append("<div class='active well'>" + "<h3>Name: " + data.classmates[0].name + "</h3>" + "<h4>Description: " + data.classmates[0].description + "</h4>" + "<h4>Shoutout: " + data.classmates[0].shoutout + "</h4>" + "</div>");
            //for (var i = 1; i < data.classmates.length; i++) {
            //    $('#people').append("<div class='inactive well'>" + "<h3>Name: " + data.classmates[i].name + "</h3>" + "<h4>Description: " + data.classmates[i].description + "</h4>" + "<h4>Shoutout: " + data.classmates[i].shoutout + "</h4>" + "</div>");
            //}
            $.each(data, function() {
                $('.carousel-inner').append("<div class='item'></div>");
                var el = $('.carousel-inner').children().last();
                el.append("<h3><span id='labels'>Name: </span>" + this.name + "</h3>");
                el.append("<h4><span id='labels'>Description: </span>" + this.description + "</h4>");
                el.append("<h4><span id='labels'>Shoutout: </span>"+ this.shoutout + "</h4>");
            });
            //$('.carousel-inner').children().first().removeClass('inactive');
            $('.carousel-inner').children().first().addClass('active');
        }
    });


    // Activate Carousel
    $("#myCarousel").carousel();


    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

//First version below -- wasn't happy with animation effects
//    $('body').on('click', '.btn-primary', function() {
//        var currentPerson = $('.active');
//        var nextPerson = currentPerson.next();
//
//        var currentDot = $('.active-dot');
//        var nextDot = currentDot.next();
//
//        if(nextPerson.length === 0) {
//            nextPerson = $('#people').children().first();
//            nextDot = $('.dot').first();
//        }
//
//        currentPerson.slideUp().addClass('inactive');
//        nextPerson.slideDown().addClass('active');
//
//        currentDot.removeClass('active-dot');
//        nextDot.addClass('active-dot');
//    });
//    $('body').on('click', '.btn-success', function() {
//        var currentPerson = $('.active');
//        var prevPerson = currentPerson.prev();
//
//        var currentDot = $('.active-dot');
//        var prevDot = currentDot.prev();
//
//        if(prevPerson.length === 0) {
//            prevPerson = $('#people').children().last();
//            prevDot = $('.dot').last();
//        }
//
//        currentPerson.slideUp().addClass('inactive');
//        prevPerson.slideDown().addClass('active');
//
//        currentDot.removeClass('active-dot');
//        prevDot.addClass('active-dot');
//    });


// yet another attempt at better animation -- settled on Bootstrap carousel
//$.fn.fadeSlideRight = function(speed,fn) {
//    return $(this).animate({
//        'opacity' : 1,
//        'width' : '750px'
//    },speed || 400, function() {
//        $.isFunction(fn) && fn.call(this);
//    });
//}
//
//$.fn.fadeSlideLeft = function(speed,fn) {
//    return $(this).animate({
//        'opacity' : 0,
//        'width' : '0px'
//    },speed || 400,function() {
//        $.isFunction(fn) && fn.call(this);
//    });
//}




