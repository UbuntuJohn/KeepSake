$(document).ready(function() {

    $('li a').on("mouseenter", function() {
        $(this).css("color","#bbb");
    });

    $('li a').on("mouseleave", function() {
        $(this).css("color","black");
    });

    $('.active').on("mouseenter", function() {
        $(this).css("color","#2bb89r");
    });

    $('.active').on("mouseleave", function() {
        $(this).css("color","#2bb89f");
    });

    $('.homeReg').on("click", function() {
        url = "register.html";
        window.location = url;
    });


    $('.panel').on("mouseenter", function() {
        $('#content-panels').sortable();

        $(this).on('mousedown', function() {
            $(this).attr('class','panel2');
            console.log("Mouse is currently being held down!");
        });
        
    });


    $('.panel').on("mouseup", function() {
        
        if($(this).attr('class','panel2')) {
            $(this).attr('class','panel');
            console.log("Mouse has been released!");
        } else {
            $(this).attr('class','panel');
            console.log("Mouse has been released!");
        };
    });

    //Project Deletion
    $('.panel').on("click", function() {
         $( "#dialog-confirm" ).dialog({
                resizable: false,
                height:140,
                modal: true,
                buttons: {
                "Delete Project": function() {
                //my custom plugin
                $('.panel').fadeAway();
                $(this).dialog("close");


                $.ajax({
                    url: "xhr/delete_project.php",
                    type: "post",
                    dataType: "json",
                    data: {
                        user: 1,
                        projectID: 1
                    },
                    success: function(response) {
                        console.log("Deletion was a success!");

                        if(response.error) {
                            alert(response.error);
                        } else {
                            window.location.assign("projects.html");
                        };
                    }

                });




                console.log('Project has been deleted!')
                },
                Cancel: function() {
                $( this ).dialog( "close" );
                }
                }
        });
    });
        

    $('#projDue').on("mouseenter", function() {
        $(this).datepicker();
    });

    $('#projName').on("mouseenter", function() {
        $(this).tooltip();
    });

    $('#projDesc').on("mouseenter", function() {
        $(this).tooltip();
    });

    $('#username').on("mouseenter", function() {
        $(this).tooltip();
    });

    $('#password').on("mouseenter", function() {
        $(this).tooltip();
    });




});
