
 //ui code 
$("document").ready(function(){
    $(".press").click(function(){
        $("#design").toggle();
        $("#design-descr").toggle();
    }); 
    $(".press1").click(function(){
        $("#dev").toggle();
        $("#dev-descr").toggle();
    }); 
    $(".press2").click(function(){
        $("#prod").toggle();
        $("#prod-descr").toggle();
    }); 
    $("#kazi4").hover(function(){
        $(".work4-cont").show();
    },function(){
        $(".work4-cont").hide();
    });
    $("#kazi3").hover(function(){
        $(".work3-cont").show();
    },function(){
        $(".work3-cont").hide();
    });
    $("#kazi2").hover(function(){
        $(".work2-cont").show();
    },function(){
        $(".work2-cont").hide();
    });
    $("#kazi1").hover(function(){
        $(".work1-cont").show();
    },function(){
        $(".work1-cont").hide();
    });
    $("#kazi5").hover(function(){
        $(".work5-cont").show();
    },function(){
        $(".work5-cont").hide();
    });
    $("#kazi6").hover(function(){
        $(".work6-cont").show();
    },function(){
        $(".work6-cont").hide();
    });
    $("#kazi7").hover(function(){
        $(".work7-cont").show();
    },function(){
        $(".work7-cont").hide();
    });
    $("#kazi8").hover(function(){
        $(".work8-cont").show();
    },function(){
        $(".work8-cont").hide();
    });
    $("#mc-embedded-subscribe").click(function(){
       return yourName();
    });
});

 //business logic
 function yourName(){
    name = document.getElementById("mce-FNAME").value;
    console.log(name.length);
    let alertName = alert(name +" " +"thankyou for reaching out to us, We've recieved your message");
    console.log(alertName);
    return alertName;
}