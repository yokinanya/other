var iframe = window.top.document.getElementById('iframeautoheight');
var ifdocument = iframe.contentWindow.document;	
var subLength = ifdocument.getElementById("pjkc").length - 1;
ifdocument.getElementById("TextBox1").value = - 1; //去掉等待时间

function execution(){
var iframe = window.top.document.getElementById('iframeautoheight');
var ifdocument = iframe.contentWindow.document;	

var reg = /^DataGrid1__ctl\d+_JS1$/;   
var selections = ifdocument.getElementsByTagName("select");
for(var i = 0 ; i< selections.length; i++){
 	if(reg.test(selections[i].getAttribute("id"))){
 		selections[i].value = "优秀";
 		if(i == 2 || i == 5 || i == 1 || i == 3)
 			selections[i].value = "良好";
 	}
 }

 var veg = /^DataGrid1__ctl\d+_JS2$/;   
var selectionvs = ifdocument.getElementsByTagName("select");
for(var i = 0 ; i< selectionvs.length; i++){
 	if(veg.test(selectionvs[i].getAttribute("id"))){
 		selectionvs[i].value = "优秀";
 		if(i == 2 || i == 5)
 			selections[i].value = "良好";
 	}
 }

 var elemenntss=document.getElementById("DataGrid1__ctl2+_js3");
	if (typeof(elemenntss)!= "undefined" || element != null){
		for (var i = 2; i < 21; i++) {
			selectionvs[i].value = "优秀";
			if(i == 4 || i == 6)
				selections[i].value = "良好";
		}
	}
 var elemennt=document.getElementById("dgPjc__ctl2_jc1");
 if (typeof(elemennt)!= "undefined" || element != null){
ifdocument.getElementById('dgPjc__ctl2_jc1').value = "优秀";}

var elemennttt=document.getElementById("pjxx");
 if (typeof(elemennttt)!= "undefined" || element != null){
ifdocument.getElementById('pjxx').value = "";
}
ifdocument.getElementById("Button1").click();
}

execution();
iframe.onload = function(){
	if(subLength -- > 0){
		execution();
	}
	
}
//haoz
