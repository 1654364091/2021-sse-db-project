////let sh = new Vue({
////    el: '#list',    //ĳ��������ǩ
////    data: {
////        objectList: [],
////        draw: false,
////    }
////})

function displayshops(sellerID) {
    $.ajax({
        type: "post",
        url: "/SellerBackground/DisplayShopsForm",
        async: false,
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({ "SellerID": sellerID }),
        success: function (result) {

            //console.log(result);

            if (result == null) {
                //alert("No Shops!");
                //console.log("null");
            }
            else {
                sh.objectList = result;//��ֵ��ָ��ʵ��������
            }
        }
    });
}