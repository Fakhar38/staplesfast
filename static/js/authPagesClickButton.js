window.onload = function() {
    console.log("clickButton.js is working");
    let clickBuyButton = function(){
        let iframe = document.getElementsByName("frame-product-5277462560926")[0]
        let shopify_buy_btn = iframe.contentWindow.document.getElementsByClassName("shopify-buy__btn  ")[0]
        console.log(shopify_buy_btn);
        shopify_buy_btn.click();
    }
    // let my_site_buy_btn = document.getElementById("js-my-buy-btn");
    // my_site_buy_btn.onclick = function (e) {
    //     console.log("my site buy btn clicked");
    //     clickBuyButton();
    // }
    document.querySelectorAll("#js-header-buy-btn").forEach(item => {
        item.addEventListener('click', event => {
            //handling click
            console.log("header buy btn clicked");
            clickBuyButton();
        })
    })
}

