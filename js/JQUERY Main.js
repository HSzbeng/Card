    $(document).ready(function () {
        $("#viewMore").click(function () {
            $("#info").animate({
                top: "560px"
            });
            $("#aboutMe").animate({
                top: "0px"
            });
            $("#image").animate({
                left: "400px"
            });
            $("#project").animate({
                left: "400px"
            });
        });

        $("#close").click(function () {
            $("#info").animate({
                top: "380px"
            });
            $("#aboutMe").animate({
                top: "-300px"
            });
            $("#image").animate({
                left: "0px"
            });
            $("#project").animate({
                left: "-250px"
            });
        });
    });
