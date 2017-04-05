/**
 * Created by ºØ¿¡´ï on 2017/4/1 0001.
 */
$(function(){
    $(".box li").hover(
        function(){
            $(this).children(".txt").show().stop().animate({"opacity":"1","right":"35px"},300)
        },
        function(){
            $(this).children(".txt").stop().animate({"opacity":"0","right":"70px"},300)
        }
    )
})