$(document).ready(function () {
    // Table content except header
    $('td').not("td:first-child")
        .click(function () {

            var content = $(this).text();
            var cliffs = ['West Cliff', 'North Cliff', 'East Cliff', 'South Cliff']
            var index = $(this).index() - 1;

            if (content != "Not Available") {
                $(this).toggleClass("tdhighlight");

                if ($(this).hasClass("tdhighlight")) {
                    // Highlight selected cell
                    $(this).css("background-color", "#9ed034");
                    $(this).css("color", "white");

                    // Add activity to the modal and show modal
                    $("#selected-activity").append("<p>" + content + " at " + cliffs[index] + " </p>");
                    $('#activity-modal').modal('toggle');

                } else {
                    // Remove cell highlight
                    $(this).css("background-color", "rgba(0, 0, 0, 0)");
                    $(this).css("color", "black");

                    // Remove current cell from the modal
                    $('#selected-activity p:contains(' + content + ')').remove(); // Find and remvove
                    $('#activity-modal').modal('toggle');   // Show modal
                }
            }
        }
        )
        .mouseenter(function () {
            if ($(this).text() != "Not Available") {
                $(this).css({ "cursor": "pointer" });
            }
        })
        
});