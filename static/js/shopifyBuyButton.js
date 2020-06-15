/*<![CDATA[*/
    (function () {
      var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }
      function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }
      function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
          domain: 'staplesfast-com.myshopify.com',
          storefrontAccessToken: '05a201f049f862081b15cbd6d7af5fda',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
          ui.createComponent('product', {
            id: '5277462560926',
            node: document.getElementById('product-component-1591813487900'),
            moneyFormat: '%24%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
            "max-width": "calc(25% - 20px)",
              "margin-left": "20px",
              "margin-bottom": "50px"
            }
          },
          "button": {
              "margin": "0",
            "font-size": "18px",
            "padding-top": "12px",
            "padding-bottom": "12px",
              "font-weight": "bold",
              "width": "500px",
            ":hover": {
              "background-color": "#070a05"
            },
            "background-color": "#040603",
            ":focus": {
              "background-color": "#070a05"
            },
            "border-radius": "9px",
            "padding-left": "20px",
            "padding-right": "20px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "buttonDestination": "checkout",
        "contents": {
          "img": false,
          "title": false,
          "price": false
        },
        "text": {
          "button": "Add to Cart and Pay Now"
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-20px"
            }
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "button": false,
          "buttonWithQuantity": true
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#070a05"
            },
            "background-color": "#040603",
            ":focus": {
              "background-color": "#070a05"
            },
            "border-radius": "9px",
            "padding-left": "37px",
            "padding-right": "37px"
          },
          "quantityInput": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px"
          }
        },
        "text": {
          "button": "Add to cart"
        }
      },
      "cart": {
          "popup": false,
        "styles": {
          "button": {
            "font-size": "16px",
            "padding-top": "16px",
            "padding-bottom": "16px",
            ":hover": {
              "background-color": "#070a05"
            },
            "background-color": "#040603",
            ":focus": {
              "background-color": "#070a05"
            },
            "border-radius": "9px"
          }
        },
        "text": {
          "total": "Subtotal",
          "button": "Checkout"
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#040603",
            ":hover": {
              "background-color": "#070a05"
            },
            ":focus": {
              "background-color": "#070a05"
            }
          },
          "count": {
            "font-size": "16px"
          }
        }
      }
    },
          });
        });
      }
    })();
    /*]]>*/