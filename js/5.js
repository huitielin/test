/**
 * Created by ºØ¿¡´ï on 2017/4/1 0001.
 */
$(function(){
    $(".main li").hover(
        function(){
            $(this).stop().find(".none").show();
        },
        function(){
            $(this).stop().find(".none").hide();
        }
    )
})