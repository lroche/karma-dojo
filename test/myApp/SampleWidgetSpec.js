define([
"dojo/_base/window",
"dojo/dom", 
"dojo/dom-construct",
"dojo/dom-style",
"dojo/topic",
"dojo/parser",
"dijit/registry",
"myApp/SampleWidget"
],function(win, dom, domConstruct, style, topic, parser, registry, SampleWidget){
	
	describe("SampleWidget ", function(){
		it("should be here", function(){
			expect(SampleWidget).not.toBeUndefined();
		});
		it("should be instanciable", function(){
			var sampleWidget = new SampleWidget();
			expect(sampleWidget).not.toBeNull();
		});
		describe("should be done if it created ", function(){
			it("declaratively", function(){
				var node = domConstruct.create("div", {
						"id": "container",
						"innerHTML":"<div " +
						"data-dojo-type='myApp/SampleWidget' " +
						"data-dojo-props=\"id:'SampleWidget1'\">"+
						"</div>"
					}, win.body());
				
				
				parser.parse({rootNode:node});
				//Widget must be available
				var widget = registry.byId("SampleWidget1");
				expect(widget).not.toBeUndefined();
				//and should be initialized
				expect(widget.get("welcome")).toBe("Hello World !");

				//Clean-up
				widget.destroy();
				expect(registry.byId("SampleWidget1")).toBeUndefined();
				//Clean DOM 
				domConstruct.destroy(node);
				expect(dom.byId("container")).toBeNull();
				

			});
			it(" programmatically", function(){
				var widget = new SampleWidget({id:'sampleWidget2'});
			
				expect(widget.get("welcome")).toBe("Hello World !");

				var widget = registry.byId("sampleWidget2");
				expect(widget).not.toBeUndefined();
				
				var erratum = registry.byId("XXX");
				expect(erratum).toBeUndefined();
				
				expect(widget.domNode.innerHTML).toEqual("Hello World !");
				//topic 
				topic.publish("message", "bye");

				expect(style.get(widget.domNode,"display")).toBe("none");

				widget.destroy();
				expect(registry.byId("sampleWidget2")).toBeUndefined();
			});

		})
		
		
	})


})