define(["myApp/hello"], function(hello){
	
	describe("hello", function(){
		it("should say some words", function(){
			expect(hello()).toEqual("Hello World !");
		})
	})

})
