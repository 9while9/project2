/*jslint browser: true*/
/*global $, jQuery*/

$(function()
 {
    $('#vpimg').hover(function()
    {
        $('#vpimg').attr('src', 'images/mypins/vp2.jpg');
    },
    function()
    {
        $('#vpimg').attr('src', 'images/mypins/vp1.jpg');
    });
    /* End of Hover */
    
    /* Unite Gallery */
    jQuery("#gallery").unitegallery();

})