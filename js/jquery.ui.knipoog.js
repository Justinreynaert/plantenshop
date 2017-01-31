// JavaScript Document
// KNIPOOOG, widget om het figcaption element van figure element dynamisch te tonen
// maakt gebruik van de widget factory

(function($) {
    $.widget("ui.knipoog", {
        options: {
            location: "top",
            color: "black",
            bgColor: "silver",
            speed: "slow",
            padding: 4
        },

        enable: function() {

            $.widget.prototype.enable.apply( this, arguments );
            this._setMouseHandler();
        },

        disable: function() {
            $.widget.prototype.disable.apply( this, arguments );
            this._removeMouseHandler();
        },

        _create: function(){
            // initialistie van de widget
            //this.element bevat hetfigure element als JQset

            this.element.img = $('img',this.element);
            this.element.cap = $('figcaption', this.element);

            var o  = this.options;


           //test widget geladen
            // console.log(this.element[0].nodeName);

            //vaste eigenschappen

            this.element.css({position:'relative', height: '100px'});

            this.element.cap
                .hide()
                .css({
                    position: 'absolute',
                    left: 0,
                    width : this.element.img.width() - (o.padding * 2),
                    height: '80px',
                    opacity: '0.7',
                    padding: o.padding
                });
            // aanpasbare eigenschappen
            this._CSStoepassen();
            this._setMouseHandler();
        },

        _CSStoepassen:function(){
            // alle aanpasbare eigenschappen hier

            this.element.cap.css({
                color: this.options.color,
                backgroundColor: this.options.bgColor

            });

            // location speciaal
            switch(this.options.location) {
                case "top":
                    this.element.cap.css({top:0});
                    break;
                case "bottom":
                    this.element.cap.css({bottom:0});
                    break;
                default:
                    this.element.cap.css({top:0});
                    break;
            }
        },

        _setMouseHandler: function(){
            //hover event handler
            var self = this;
            var o = self.options;

            self.element.hover(
                function() {
                    self.element.cap.show("slide",{direction:"left"},o.speed,function(){});
                },
                function() {
                    self.element.cap.show("slide",{direction:"right"},o.speed,function(){});
                }
            )},

        _removeMouseHandler: function() {
            this.element.unbind('mouseenter mouseleave')
        }
    }); // einde widget
})(jQuery);