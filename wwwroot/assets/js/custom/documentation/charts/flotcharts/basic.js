"use strict";var KTFlotDemoBasic={init:function(){!function(){for(var a=[],i=0;i<2*Math.PI;i+=.25)a.push([i,Math.sin(i)]);var t=[];for(i=0;i<2*Math.PI;i+=.25)t.push([i,Math.cos(i)]);var s=[];for(i=0;i<2*Math.PI;i+=.1)s.push([i,Math.tan(i)]);$.plot($("#kt_docs_flot_basic"),[{label:"sin(x)",data:a,lines:{lineWidth:1},shadowSize:0},{label:"cos(x)",data:t,lines:{lineWidth:1},shadowSize:0},{label:"tan(x)",data:s,lines:{lineWidth:1},shadowSize:0}],{colors:[KTUtil.getCssVariableValue("--bs-active-success"),KTUtil.getCssVariableValue("--bs-active-primary"),KTUtil.getCssVariableValue("--bs-active-danger")],series:{lines:{show:!0},points:{show:!0,fill:!0,radius:3,lineWidth:1}},xaxis:{tickColor:KTUtil.getCssVariableValue("--bs-light-dark"),ticks:[0,[Math.PI/2,"Ï€/2"],[Math.PI,"Ï€"],[3*Math.PI/2,"3Ï€/2"],[2*Math.PI,"2Ï€"]]},yaxis:{tickColor:KTUtil.getCssVariableValue("--bs-light-dark"),ticks:10,min:-2,max:2},grid:{borderColor:KTUtil.getCssVariableValue("--bs-light-dark"),borderWidth:1}})}()}};KTUtil.onDOMContentLoaded((function(){KTFlotDemoBasic.init()}));