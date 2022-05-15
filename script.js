  let selectedFilter;

$(".apply-filter").click(function() {
    let filter = $("input").val(); 

    if (filter === "Harlem") {   
 $("img").css("filter", "contrast(115%) brightness(120%)");
    }
  
    else if (filter === "Bushwick") {
  $("img").css("filter", "contrast(50%) brightness(180%)"); }
    
		else if (filter === "SOMA") {
$("img").css("filter", "grayscale(50%) hue-rotate(10deg)");}

    else if (filter === "Sunset") {
$("img").css("filter", "contrast(115%) hue-rotate(-10deg) saturate(180%)"); }
    
    else if (filter === "Gray") {
        $("img").css("filter", "contrast(50%) hue-rotate(50deg) saturate(5%)"); }

});
   
    
    
   

$(".reset").click(function() {
    $("img").css("filter", "");
});
