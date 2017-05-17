(function ($, $doc) {
    "use strict";

    var site;

    site = {
        $window: $(window),
        loaded: false,

        enable: function () {
            site.ui = {
                body: $("html, body")
            };

            site.selectors = {
                'foo': '.bar',
                boxTest: {
                    'wrapper': '.box-test',
                    'box': '.box',
                    'button': '.button'
                },
                'box': '.box',
                'testNumberParagraph': '.test',
                'testNumber': 123456
            };

            site.parse();
        },

        parse: function ($root) {
            $root = $root || $doc;

            $root.first().each(function () {
                site.fooBar.apply(this);
                site.animations.apply(this);
                site.numbers.apply(this);
            });
        },

        fooBar: function () {
            var $root = $(this);

            $root.find(site.selectors.foo).each(function () {
                $(this).on("click", function () {
                    console.log("Foobar!");
                });
            });
        },

        animations: function () {
            var $root = $(this);

            $root.find(site.selectors.boxTest.wrapper).each(function () {
                var $this = $(this);
                $(this).find(site.selectors.boxTest.button).on("click", function () {
                    $this.find(site.selectors.boxTest.box).toggleClass("active");
                });
            });
        },

        numbers: function () {
            var $root = $(this);

            $root.find(site.selectors.testNumberParagraph).each(function () {
                $(this).append(site.selectors.testNumber);
            });
        }
    };

    site.enable();

    window.site = site;

})(window.jQuery, window.jQuery(document.body));