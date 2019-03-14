$(".ty").hide();
$(".leave").hide();
$(".Paidfor").hide();
$(".Reset").hide();
$(".pay").click(function(){
    $(".ty").show();
    $(".Beginning").hide();
    $(".Paidfor").show();
});

$(".neigh").click(function(){
    $(".leave").show();
    $(".Beginning").hide();
    $(".Reset").show();
});

$(".Reset").click(function(){
    $(".Beginning").show();
    $(".leave").hide();
    $(".Reset").hide();
});




$(".one").hide();
$(".first").hide();
$(".two").hide();
$(".three").hide();
$(".second").hide();
$(".ten").hide();
$(".four").hide();
$(".five").hide();
$(".six").hide();
$(".seven").hide();
$(".eight").hide();
$(".nine").hide();

$(".submit").click(function(){
    var yourN = $(".Name").val();
    $(".namePlace").text(yourN);
    
    var CrntAge = $(".Age").val();
    var DeathAge = 85 - CrntAge;
    var DeathYear = 2019 + DeathAge;
    $(".futurePlace").text(DeathYear);
    
    var death = $(".health").val();
    var hdeath = "healthy";
    var undeath = "not";
    if( death === hdeath ) {
        $(".first").show();
    } else if ( death === undeath ) {
        $(".one").show();
    }
    
    var spName = $(".Spouse").val();
    var NoSpouse = "";
    if( spName === NoSpouse ) {
        $(".second").show();
        $(".two").hide();
    } else if ( spName !== NoSpouse) {
        $(".spousePlace").text(spName);
        $(".two").show();
        $(".second").hide();
    }
    
    var NumberChild = $(".NumOfCh").val();
    $(".chPlace").text(NumberChild);
    $(".three").show();
    
    var NoChildHere = "";
    
    var FirstChild = $(".childOne").val();
    if( FirstChild === NoChildHere ) {
        $(".four").hide();
    } else if ( FirstChild !== NoChildHere ) {
        $(".chOplace").text(FirstChild);
        $(".four").show();
    }
    
    var SecondChild = $(".childTwo").val();
    if( SecondChild === NoChildHere ) {
        $(".five").hide();
    } else if ( SecondChild !== NoChildHere ) {
        $(".chTplace").text(SecondChild);
        $(".five").show();
    }
    
    var ThirdChild = $(".childThree").val();
    if( ThirdChild === NoChildHere ) {
        $(".six").hide();
    } else if ( ThirdChild !== NoChildHere ) {
        $(".chThPlace").text(ThirdChild);
        $(".six").show();
    }
        
    var FourthChild = $(".childFour").val();
    if( FourthChild === NoChildHere ) {
        $(".seven").hide();
    } else if ( FourthChild !== NoChildHere ) {
        $(".chFplace").text(FourthChild);
        $(".seven").show();
    }    
        
    var FifthChild = $(".childFive").val();
    if( FifthChild === NoChildHere ) {
        $(".eight").hide();
    } else if ( FifthChild !== NoChildHere ) {
        $(".chFiPlace").text(FifthChild);
        $(".eight").show();
    }
    
    var CarBrand = $(".Car").val();
    var NoCar = "";
    if( FifthChild === NoCar ) {
        $(".nine").hide();
    } else {
        $(".carPlace").text(CarBrand);
        $(".nine").show();
    }
});