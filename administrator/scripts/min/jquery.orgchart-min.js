!function($){function e(a,d,t,l,s){var n=$("<table cellpadding='0' cellspacing='0' border='0'/>"),r=$("<tbody/>"),i=$("<tr/>").addClass("nodes"),o=$("<td/>").addClass("node").attr("colspan",2),p=a.children("ul:first").children("li");p.length>1&&o.attr("colspan",2*p.length);var c=a.children("adjunct").eq(0);if(c.length>0){var h=$("<div>").addClass("adjunct node").addClass("level"+t).addClass("node"+l).addClass("level"+t+"-node"+l).append(s.nodeText(c));h.appendTo(o);var v=$("<div>").addClass("adjunct-link");v.appendTo(o),c.remove()}var C=$("<div>").html(s.nodeText(a)),f=$("<div>").addClass("node").addClass("level"+t).addClass("node"+l).addClass("level"+t+"-node"+l).append(C);if(s.copyClasses&&f.addClass(a.attr("class")),s.copyData&&f.data(a.data()),s.copyStyles&&f.attr("style",a.attr("style")),s.copyTitle&&f.attr("title",a.attr("title")),f.data("orgchart-level",t).data("orgchart-node",a),o.append(f),i.append(o),r.append(i),f.click(function(){var e=$(this);if(s.nodeClicked(e.data("orgchart-node"),e),s.interactive){var a=e.closest("tr");a.next("tr").is(":visible")?(s.fade?a.nextAll("tr").fadeOut(s.speed):a.nextAll("tr").hide(),e.removeClass("shownChildren").addClass("hiddenChildren")):(e.removeClass("hiddenChildren").addClass("shownChildren"),s.fade?a.nextAll("tr").fadeIn(s.speed):a.nextAll("tr").show())}}),p.length>0)if(-1==s.depth||t+1<s.depth){var u=$("<tr/>").addClass("lines"),g=$("<td/>").attr("colspan",2*p.length);u.append(g);var y=$("<table cellpadding='0' cellspacing='0' border='0'>");y.append("<tbody>");var m=$("<tr/>").addClass("lines x"),x=$("<td>").addClass("line left"),w=$("<td>").addClass("line right");m.append(x).append(w),y.children("tbody").append(m),g.append(y),r.append(u),p.length>0&&(f.addClass("hasChildren"),f.addClass(-1==s.showLevels||t<s.showLevels-1?"shownChildren":"hiddenChildren"),s.interactive&&f.hover(function(){$(this).addClass(s.hoverClass)},function(){$(this).removeClass(s.hoverClass)}));var b=$("<tr/>").addClass("lines v");p.each(function(){var e=$("<td/>").addClass("line left top"),a=$("<td/>").addClass("line right top");b.append(e).append(a)}),b.find("td:first").removeClass("top"),b.find("td:last").removeClass("top"),r.append(b);var k=$("<tr/>");p.each(function(a){var d=$("<td/>");d.attr("colspan",2),e($(this),d,t+1,a,s),k.append(d)}),r.append(k)}else if(s.stack){var T=p.clone(),A=$("<ul class='stack'>").append(T).addClass("level"+t).addClass("node"+l).addClass("level"+t+"-node"+l),L=$("<div class='stack-container'>").append(A);f.after(L)}s.showLevels>-1&&t>=s.showLevels-1&&i.nextAll("tr").hide(),n.append(r),d.append(n)}$.fn.orgChart=function(a){var d=$.extend({},$.fn.orgChart.defaults,a);return this.each(function(){var a=$(this);$this=a.clone(),d.levels>-1&&$this.find("ul").andSelf().filter(function(){return a.parents("ul").length+1>d.levels}).remove(),$this.data("chart-source",a);var t=$("<div class='"+d.chartClass+"'/>");d.interactive&&t.addClass("interactive");var l;$this.is("ul")?l=$this.find("li:first"):$this.is("li")&&(l=$this),l&&(e(l,t,0,0,d),t.find("div.node a").click(function(e){e.stopImmediatePropagation()}),d.replace&&d.container.empty(),d.container.append(t))})},$.fn.orgChart.defaults={container:$("body"),depth:-1,levels:-1,showLevels:-1,stack:!1,chartClass:"orgChart",hoverClass:"hover",nodeText:function(e){return e.clone().children("ul,li").remove().end().html()},interactive:!1,fade:!1,speed:"slow",nodeClicked:function(e){},copyClasses:!0,copyData:!0,copyStyles:!0,copyTitle:!0,replace:!0}}(jQuery);