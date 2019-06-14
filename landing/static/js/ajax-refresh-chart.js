$("#run-experiment-form").on('submit', function(event) {
    event.preventDefault();
    $.ajax({
        url : "/landing/chart-data/",
        type : "POST",
        data : $(this).serialize(),
        dataType: 'text',
        success : function(csv) {plot_cumulative_reward("cumulative-reward-over-sent-mails-plot", csv)},
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
});