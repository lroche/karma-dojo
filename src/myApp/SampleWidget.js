/**
	A sample widget
	just for example.
*/
define([
"dojo/_base/declare",
"dojo/_base/lang",
"dojo/on",
"dojo/dom-style",
"dojo/topic",
"dijit/_WidgetBase",
"dijit/_TemplatedMixin",
"dojo/text!./templates/SampleWidgetTemplate.html"
],function(declare, lang, on, style, topic, _WidgetBase, _TemplatedMixin, template){
	return declare([ _WidgetBase, _TemplatedMixin],{
			templateString:template,

			welcome:"Hello World !",
			postCreate:function(){
				this.own(topic.subscribe("message", lang.hitch(this,this.bye)));
			},
			bye:function(){
				style.set(this.domNode,
					"display","none"
				)
			},
			hello:function(){
				style.set(this.domNode,
					"display",""
				)
			}
	});
});