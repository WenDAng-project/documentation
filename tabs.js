// resource tabs

$(function () {
    $('.tabs-buttons').on('click', '.tab-button', function () {
        var target = $(this).data('tab');

        // Switch active button
        $('.tab-button').removeClass('active');
        $(this).addClass('active');

        // Switch active tab content
        $('.tab-pane').removeClass('active');
        $('#' + target).addClass('active');
    });
});

//accordion list


