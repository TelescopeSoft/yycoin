/*
 * Compressed by JSA(www.xidea.org)
 */
var gobal_guid;(function($){$.addFlex=function(t,p){if(t.grid)return false;p=$.extend({height:"auto",width:"auto",striped:true,novstripe:false,minwidth:30,minheight:80,resizable:true,url:false,method:"GET",dataType:"json",usepager:false,nowrap:true,page:1,total:1,useRp:true,rp:15,rpOptions:[1,10,15,20,25,40],queryMode:0,oprAction:0,queryCondition:null,thisObj:null,connect:null,auth:null,def:null,title:false,callBack:null,cache:1,cacheEle:null,cacheFlag:null,cacheData:null,query:"",qtype:"",minColToggle:1,showToggleBtn:true,hideOnSubmit:true,autoload:true,blockOpacity:0.5,onToggleCol:false,onChangeSort:false,onSuccess:false,rwidth:0,errormsg:Res._Guid["ERRORMSG"],nomsg:Res._Guid["NOMSG"],pagestat:Res._Guid["PAGESTAT"],procmsg:Res._Guid["PROCMSG"],bname:{add:Res._Public["ADD"],del:Res._Public["DEL"],update:Res._Public["UPDATE"],search:Res._Public["SEARCH"]},resource:{refurbish:Res._Guid["REFURBISH"],oprColumns:"",page:Res._Guid["PAGE"],of:Res._Guid["OF"],oprTable:Res._Guid["OPRTABLE"]},onSubmit:false},p);if(p.cache==0){if(p.cacheEle==null)p.cacheEle=document.getElementById("cacheEle");if(p.cacheFlag==null)p.cacheFlag=document.getElementById("cacheFlag")}$(t).show().attr({cellPadding:0,cellSpacing:0,border:0}).removeAttr("width");var g={hset:{},rePosDrag:function(){var _=0-this.hDiv.scrollLeft;if(this.hDiv.scrollLeft>0)_-=Math.floor(p.cgwidth/2);$(g.cDrag).css({top:g.hDiv.offsetTop+1});var A=this.cdpad;$("div",g.cDrag).hide();$("thead tr:first th:visible",this.hDiv).each(function(){var C=$("thead tr:first th:visible",g.hDiv).index(this),B=parseInt($("div",this).width()),D=B;if(_==0)_-=Math.floor(p.cgwidth/2);B=B+_+A;$("div:eq("+C+")",g.cDrag).css({"left":B+"px"}).show();_=B})},fixHeight:function(A){A=false;if(!A)A=$(g.bDiv).height();var _=$(this.hDiv).height();$("div",this.cDrag).each(function(){$(this).height(A+_)});var C=parseInt($(g.nDiv).height());$(g.nDiv).height("auto").width("auto");$(g.block).css({height:A,marginBottom:(A*-1)});var B=g.bDiv.offsetTop+A;if(p.height!="auto"&&p.resizable)B=g.vDiv.offsetTop;$(g.rDiv).css({height:B})},dragStart:function(dragtype,e,obj){if(dragtype=="colresize"){$(g.nDiv).hide();$(g.nBtn).hide();var n=$("div",this.cDrag).index(obj),ow=$("th:visible div:eq("+n+")",this.hDiv).width();$(obj).addClass("dragging").siblings().hide();$(obj).prev().addClass("dragging").show();this.colresize={startX:e.pageX,ol:parseInt(obj.style.left),ow:ow,n:n};$("body").css("cursor","col-resize")}else if(dragtype=="vresize"){var hgo=false;$("body").css("cursor","row-resize");if(obj){hgo=true;$("body").css("cursor","col-resize")}this.vresize={h:p.height,sy:e.pageY,w:p.width,sx:e.pageX,hgo:hgo}}else if(dragtype=="colMove"){$(g.nDiv).hide();$(g.nBtn).hide();this.hset=$(this.hDiv).offset();this.hset.right=this.hset.left+$("table",this.hDiv).width();this.hset.bottom=this.hset.top+$("table",this.hDiv).height();this.dcol=obj;this.dcoln=$("th",this.hDiv).index(obj);this.colCopy=document.createElement("div");this.colCopy.className="colCopy";this.colCopy.innerHTML=obj.innerHTML;if($.browser.msie)this.colCopy.className="colCopy ie";eval("$(this.colCopy).css({position:'absolute',float:'left',display:'none', textAlign: obj.align});");$("body").append(this.colCopy);$(this.cDrag).hide()}$("body").noSelect()},dragMove:function(J){if(this.colresize){var E=this.colresize.n,F=J.pageX-this.colresize.startX,C=this.colresize.ol+F,B=this.colresize.ow+F;if(B>p.minwidth){$("div:eq("+E+")",this.cDrag).css("left",C);this.colresize.nw=B}}else if(this.vresize){var I=this.vresize,D=J.pageY,F=D-I.sy;if(!p.defwidth)p.defwidth=p.width;if(p.width!="auto"&&!p.nohresize&&I.hgo){var H=J.pageX,G=H-I.sx,_=I.w+G;if(_>p.defwidth){this.gDiv.style.width=_+"px";p.width=_}}var A=I.h+F;if((A>p.minheight||p.height<p.minheight)&&!I.hgo){this.bDiv.style.height=A+"px";p.height=A;this.fixHeight(A)}I=null}else if(this.colCopy){$(this.dcol).addClass("thMove").removeClass("thOver");if(J.pageX>this.hset.right||J.pageX<this.hset.left||J.pageY>this.hset.bottom||J.pageY<this.hset.top)$("body").css("cursor","move");else $("body").css("cursor","pointer");$(this.colCopy).css({top:J.pageY+10,left:J.pageX+20,display:"block"})}},dragEnd:function(){if(this.colresize){var A=this.colresize.n,_=this.colresize.nw;$("th:visible div:eq("+A+")",this.hDiv).css("width",_);$("tr",this.bDiv).each(function(){$("td:visible div:eq("+A+")",this).css("width",_)});this.hDiv.scrollLeft=this.bDiv.scrollLeft;$("div:eq("+A+")",this.cDrag).siblings().show();$(".dragging",this.cDrag).removeClass("dragging");this.rePosDrag();this.fixHeight();this.colresize=false}else if(this.vresize)this.vresize=false;else if(this.colCopy){$(this.colCopy).remove();if(this.dcolt!=null){if(this.dcoln>this.dcolt)$("th:eq("+this.dcolt+")",this.hDiv).before(this.dcol);else $("th:eq("+this.dcolt+")",this.hDiv).after(this.dcol);this.switchCol(this.dcoln,this.dcolt);$(this.cdropleft).remove();$(this.cdropright).remove();this.rePosDrag()}this.dcol=null;this.hset=null;this.dcoln=null;this.dcolt=null;this.colCopy=null;$(".thMove",this.hDiv).removeClass("thMove");$(this.cDrag).show()}$("body").css("cursor","default");$("body").noSelect(false)},toggleCol:function(B,_){var D=$("th[axis='col"+B+"']",this.hDiv)[0],A=$("thead th",g.hDiv).index(D),C=$("input[value="+B+"]",g.nDiv)[0];if(_==null)_=D.hide;if($("input:checked",g.nDiv).length<p.minColToggle&&!_)return false;if(_){D.hide=false;$(D).show();C.checked=true}else{D.hide=true;$(D).hide();C.checked=false}$("tbody tr",t).each(function(){if(_)$("td:eq("+A+")",this).show();else $("td:eq("+A+")",this).hide()});this.rePosDrag();if(p.onToggleCol)p.onToggleCol(B,_);return _},switchCol:function(A,_){$("tbody tr",t).each(function(){if(A>_)$("td:eq("+_+")",this).before($("td:eq("+A+")",this));else $("td:eq("+_+")",this).after($("td:eq("+A+")",this))});if(A>_)$("tr:eq("+_+")",this.nDiv).before($("tr:eq("+A+")",this.nDiv));else $("tr:eq("+_+")",this.nDiv).after($("tr:eq("+A+")",this.nDiv));if($.browser.msie&&$.browser.version<7)$("tr:eq("+_+") input",this.nDiv)[0].checked=true;this.hDiv.scrollLeft=this.bDiv.scrollLeft},scroll:function(){this.hDiv.scrollLeft=this.bDiv.scrollLeft;this.rePosDrag()},addData:function(_){if(p.preProcess)_=p.preProcess(_);if(p.cache==0&&window.JSON){p.cacheFlag.value=1;p.cacheEle.value=JSON.stringify(_)}$(".pReload",this.pDiv).removeClass("loading");this.loading=false;if(!_){$(".pPageStat",this.pDiv).html(p.errormsg);return false}if(p.dataType=="xml")p.total=+$("rows total",_).text();else p.total=_.total;if(p.total==0){$("tr, a, td, div",t).unbind();$(t).empty();p.pages=1;p.page=1;this.buildpager();$(".pPageStat",this.pDiv).html(p.nomsg);return false}p.rp=_.pageSize;p.pages=Math.ceil(p.total/p.rp);setSelect(document.getElementById("rp"),p.rp);p.oprAction=0;if(p.dataType=="xml")p.page=+$("rows page",_).text();else p.page=_.nowPage;this.buildpager();var A=document.createElement("tbody");if(p.dataType=="json")$.each(_.rows,function(B,C){var D=document.createElement("tr");if(B%2&&p.striped)D.className="erow";if(C.id)D.id="row"+C.id;$("thead tr:first th",g.hDiv).each(function(){var A=document.createElement("td"),H=$(this).attr("axis").substr(3),_=$(this).attr("gid"),L="",G="";if(p.extAtt){var E=p.extAtt[_];if(E){L=parserString(E["begin"],C.cell);G=parserString(E["end"],C.cell)}}A.align=this.align;if($(this).attr("content")){var J=$(this).attr("content");J=parserString(J,C.cell);A.innerHTML=L+J+G}else{var J=C.cell[_],K=$(this).attr("cc");if(K&&p.def){var F=p.def[K];if(F)for(var B=0;B<F.length;B++){var I=F[B];if(I.key==J){J=I.value;break}}}A.innerHTML=L+J+G}$(D).append(A);A=null});if($("thead",this.gDiv).length<1)for(idx=0;idx<cell.length;idx++){var _=document.createElement("td");_.innerHTML=C.cell[idx];$(D).append(_);_=null}$(A).append(D);D=null});else if(p.dataType=="xml"){i=1;$("rows row",_).each(function(){i++;var B=document.createElement("tr");if(i%2&&p.striped)B.className="erow";var _=$(this).attr("id");if(_)B.id="row"+_;_=null;var C=this;$("thead tr:first th",g.hDiv).each(function(){var _=document.createElement("td"),A=$(this).attr("axis").substr(3);_.align=this.align;_.content=this.content;_.innerHTML=$("cell:eq("+A+")",C).text();$(B).append(_);_=null});if($("thead",this.gDiv).length<1)$("cell",this).each(function(){var _=document.createElement("td");_.innerHTML=$(this).text();$(B).append(_);_=null});$(A).append(B);B=null;C=null})}$("tr",t).unbind();$(t).empty();$(t).append(A);this.addCellProp();this.addRowProp();this.fixHeight($(this.bDiv).height());this.rePosDrag();A=null;_=null;i=null;if(p.onSuccess)p.onSuccess();if(p.hideOnSubmit)$(g.block).remove();this.hDiv.scrollLeft=this.bDiv.scrollLeft;if($.browser.opera)$(t).css("visibility","visible");if(p.callBack)p.callBack.apply(null)},changeSort:function(_){if(this.loading)return true;$(g.nDiv).hide();$(g.nBtn).hide();if(p.sortname==$(_).attr("abbr")){if(p.sortorder=="asc")p.sortorder="desc";else p.sortorder="asc"}else p.sortorder="desc";p.oprAction=4;$(_).addClass("sorted").siblings().removeClass("sorted");$(".sdesc",this.hDiv).removeClass("sdesc");$(".sasc",this.hDiv).removeClass("sasc");$("div",_).addClass("s"+p.sortorder);p.sortname=$(_).attr("abbr");if(p.onChangeSort)p.onChangeSort(p.sortname,p.sortorder);else this.populate()},buildpager:function(){$(".pcontrol input",this.pDiv).val(p.page);$(".pcontrol span",this.pDiv).html(p.pages);var B=(p.page-1)*p.rp+1,A=B+p.rp-1;if(p.total<A)A=p.total;var _=p.pagestat;_=_.replace(/{from}/,B);_=_.replace(/{to}/,A);_=_.replace(/{total}/,p.total);$(".pPageStat",this.pDiv).html(_)},populate:function(C){if(this.loading)return true;if(p.onSubmit){var A=p.onSubmit();if(!A)return false}this.loading=true;if(!p.url)return false;$(".pPageStat",this.pDiv).html(p.procmsg);$(".pReload",this.pDiv).addClass("loading");$(g.block).css({top:g.bDiv.offsetTop});if(p.hideOnSubmit)$(this.gDiv).prepend(g.block);if($.browser.opera)$(t).css("visibility","hidden");if(!p.newp)p.newp=1;if(p.page>p.pages)p.page=p.pages;var D=[{name:"nowPage",value:p.newp},{name:"pageSize",value:p.rp},{name:"JSON",value:"JSON"},{name:"sortname",value:p.sortname},{name:"sortorder",value:p.sortorder},{name:"query",value:p.query},{name:"queryMode",value:p.queryMode},{name:"oprAction",value:p.oprAction},{name:"qtype",value:p.qtype}];if(p.queryCondition)for(var E in p.queryCondition){var _={};_["name"]=E;_["value"]=p.queryCondition[E];D.push(_)}if(p.params)for(var F=0;F<p.params.length;F++)D[D.length]=p.params[F];if(!C&&window.JSON&&p.cache==0&&p.cacheEle&&p.cacheEle.value&&p.cacheFlag&&p.cacheFlag.value==1&&p.oprAction==0){var B=JSON.parse(p.cacheEle.value);g.addData(B)}else{$.ajax({type:p.method,url:p.url,data:D,dataType:p.dataType,success:function($){g.addData($)},error:function($){try{if(p.onError)p.onError($)}catch(_){}}});p.queryCondition=null}},doSearch:function(){p.query=$("input[name=q]",g.sDiv).val();p.qtype=$("select[name=qtype]",g.sDiv).val();p.newp=1;this.populate()},changePage:function(A){if(this.loading)return true;switch(A){case"first":p.newp=1;break;case"prev":if(p.page>1)p.newp=parseInt(p.page)-1;break;case"next":if(p.page<p.pages)p.newp=parseInt(p.page)+1;break;case"last":p.newp=p.pages;break;case"input":var _=parseInt($(".pcontrol input",this.pDiv).val());if(isNaN(_))_=1;if(_<1)_=1;else if(_>p.pages)_=p.pages;$(".pcontrol input",this.pDiv).val(_);p.newp=_;break}p.oprAction=2;if(p.newp==p.page)return false;if(p.onChangePage)p.onChangePage(p.newp);else this.populate()},addCellProp:function(){$("tbody tr td",g.bDiv).each(function(){var _=document.createElement("div"),C=$("td",$(this).parent()).index(this),B=$("th:eq("+C+")",g.hDiv).get(0);if(B!=null){if(p.sortname==$(B).attr("abbr")&&p.sortname)this.className="sorted";$(_).css({textAlign:B.align,width:$("div:first",B)[0].style.width});if(B.hide)$(this).css("display","none")}if(p.nowrap==false)$(_).css("white-space","normal");if(this.innerHTML=="")this.innerHTML="&nbsp;";_.innerHTML=this.innerHTML;var A=$(this).parent()[0],D=false;if(A.id)D=A.id.substr(3);if(B!=null)if(B.process)B.process(_,D);$(this).empty().append(_).removeAttr("width")})},getCellDim:function(D){var H=parseInt($(D).height()),_=parseInt($(D).parent().height()),B=parseInt(D.style.width),G=parseInt($(D).parent().width()),C=D.offsetParent.offsetTop,F=D.offsetParent.offsetLeft,A=parseInt($(D).css("paddingLeft")),E=parseInt($(D).css("paddingTop"));return{ht:H,wt:B,top:C,left:F,pdl:A,pdt:E,pht:_,pwt:G}},addRowProp:function(){$("tbody tr",g.bDiv).each(function(){$(this).click(function(A){var _=(A.target||A.srcElement);if(_.href||_.type)return true;$(this).toggleClass("trSelected");if(p.singleSelect)$(this).siblings().removeClass("trSelected")}).mousedown(function(_){if(_.shiftKey){$(this).toggleClass("trSelected");g.multisel=true;this.focus();$(g.gDiv).noSelect()}}).mouseup(function(){if(g.multisel){g.multisel=false;$(g.gDiv).noSelect(false)}}).hover(function(_){if(g.multisel)$(this).toggleClass("trSelected")},function(){});if($.browser.msie&&$.browser.version<7)$(this).hover(function(){$(this).addClass("trOver")},function(){$(this).removeClass("trOver")})})},pager:0};if(p.colModel){thead=document.createElement("thead");tr=document.createElement("tr");var widthArray=[],pageWidth=0;if(p.width=="auto")pageWidth=document.body.offsetWidth-(p.colModel.length-2)*13+(p.colModel.length-3)*1-p.rwidth-25;else pageWidth=p.width-(p.colModel.length-2)*13+(p.colModel.length-3)*1-25;var autoIndex=-1,totalWidth=0;for(i=0;i<p.colModel.length;i++){var cm=p.colModel[i];widthArray[i]=0;if(cm.width)if((cm.width+"").indexOf("%")!=-1){var wh=parseInt(cm.width.substring(0,cm.width.length-1));widthArray[i]=Math.ceil(pageWidth*wh/100)-1}else if(cm.width=="auto")autoIndex=i;else widthArray[i]=cm.width;totalWidth+=widthArray[i]}if(autoIndex!=-1){var autoWidth=pageWidth-totalWidth;if(autoWidth<=0)autoWidth=100;widthArray[autoIndex]=autoWidth}for(i=0;i<p.colModel.length;i++){var cm=p.colModel[i],th=document.createElement("th");th.innerHTML=cm.display;if(cm.name&&cm.sortable)$(th).attr("abbr",cm.name);$(th).attr("gid",cm.name);$(th).attr("axis","col"+i);$(th).attr("content",cm.content);if(cm.cc)$(th).attr("cc",cm.cc);if(cm.align)th.align=cm.align;if(cm.width)$(th).attr("width",widthArray[i]);if(cm.hide)th.hide=true;if(cm.process)th.process=cm.process;$(tr).append(th)}$(thead).append(tr);$(t).prepend(thead)}g.gDiv=document.createElement("div");g.mDiv=document.createElement("div");g.hDiv=document.createElement("div");g.bDiv=document.createElement("div");g.vDiv=document.createElement("div");g.rDiv=document.createElement("div");g.cDrag=document.createElement("div");g.block=document.createElement("div");g.nDiv=document.createElement("div");g.nBtn=document.createElement("div");g.iDiv=document.createElement("div");g.tDiv=document.createElement("div");g.sDiv=document.createElement("div");if(p.usepager)g.pDiv=document.createElement("div");g.hTable=document.createElement("table");g.gDiv.className="flexigrid";if(p.width!="auto")g.gDiv.style.width=p.width+"px";else g.gDiv.style.width=(document.body.offsetWidth-p.rwidth)+"px";if($.browser.msie)$(g.gDiv).addClass("ie");if(p.novstripe)$(g.gDiv).addClass("novstripe");$(t).before(g.gDiv);$(g.gDiv).append(t);if(p.buttons){g.tDiv.className="tDiv";var tDiv2=document.createElement("div");tDiv2.className="tDiv2";for(i=0;i<p.buttons.length;i++){var btn=p.buttons[i],dis=true;if(btn.auth&&p.auth){var hasAuth=false;for(var m=0;m<p.auth.length;m++)if(btn.auth==p.auth[m]){hasAuth=true;break}dis=hasAuth}if(!btn.separator){if(dis){var btnDiv=document.createElement("div");btnDiv.className="fbutton";if(btn.caption)btnDiv.innerHTML="<div><span>"+btn.caption+"</span></div>";else btnDiv.innerHTML="<div><span>"+p.bname[btn.id.toLowerCase()]+"</span></div>";if(btn.bclass)$("span",btnDiv).addClass(btn.bclass).css({paddingLeft:20});btnDiv.onpress=btn.onpress;btnDiv.id=btn.id;if(btn.onpress)$(btnDiv).click(function(){this.onpress(this.id,g.gDiv)});$(tDiv2).append(btnDiv);if($.browser.msie&&$.browser.version<7)$(btnDiv).hover(function(){$(this).addClass("fbOver")},function(){$(this).removeClass("fbOver")});$(tDiv2).append("<div class='btnseparator'></div>")}}else $(tDiv2).append("<div class='btnseparator'></div>")}$(g.tDiv).append(tDiv2);$(g.tDiv).append("<div style='clear:both'></div>");$(g.gDiv).prepend(g.tDiv)}g.hDiv.className="hDiv";$(t).before(g.hDiv);g.hTable.cellPadding=0;g.hTable.cellSpacing=0;$(g.hDiv).append("<div class=\"hDivBox\"></div>");$("div",g.hDiv).append(g.hTable);var thead=$("thead:first",t).get(0);if(thead)$(g.hTable).append(thead);thead=null;if(!p.colmodel)var ci=0;$("thead tr:first th",g.hDiv).each(function(){var _=document.createElement("div");if($(this).attr("abbr")){$(this).click(function(A){if(!$(this).hasClass("thOver"))return false;var _=(A.target||A.srcElement);if(_.href||_.type)return true;g.changeSort(this)});if($(this).attr("abbr")==p.sortname){this.className="sorted";_.className="s"+p.sortorder}}if(this.hide)$(this).hide();if(!p.colmodel)$(this).attr("axis","col"+ci++);$(_).css({textAlign:this.align,width:this.width+"px"});_.innerHTML=this.innerHTML;$(this).empty().append(_).removeAttr("width").mousedown(function($){g.dragStart("colMove",$,this)}).hover(function(){if(!g.colresize&&!$(this).hasClass("thMove")&&!g.colCopy)$(this).addClass("thOver");if($(this).attr("abbr")!=p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr"))$("div",this).addClass("s"+p.sortorder);else if($(this).attr("abbr")==p.sortname&&!g.colCopy&&!g.colresize&&$(this).attr("abbr")){var A="";if(p.sortorder=="asc")A="desc";else A="asc";$("div",this).removeClass("s"+p.sortorder).addClass("s"+A)}if(g.colCopy){var D=$("th",g.hDiv).index(this);if(D==g.dcoln)return false;if(D<g.dcoln)$(this).append(g.cdropleft);else $(this).append(g.cdropright);g.dcolt=D}else if(!g.colresize){var _=$("th:visible",g.hDiv).index(this),C=parseInt($("div:eq("+_+")",g.cDrag).css("left")),B=parseInt($(g.nBtn).width())+parseInt($(g.nBtn).css("borderLeftWidth"));nl=C-B+Math.floor(p.cgwidth/2);$(g.nDiv).hide();$(g.nBtn).hide();$(g.nBtn).css({"left":nl,top:g.hDiv.offsetTop}).show();var E=parseInt($(g.nDiv).width());$(g.nDiv).css({top:g.bDiv.offsetTop});if((nl+E)>$(g.gDiv).width())$(g.nDiv).css("left",C-E+1);else $(g.nDiv).css("left",nl);if($(this).hasClass("sorted"))$(g.nBtn).addClass("srtd");else $(g.nBtn).removeClass("srtd")}},function(){$(this).removeClass("thOver");if($(this).attr("abbr")!=p.sortname)$("div",this).removeClass("s"+p.sortorder);else if($(this).attr("abbr")==p.sortname){var _="";if(p.sortorder=="asc")_="desc";else _="asc";$("div",this).addClass("s"+p.sortorder).removeClass("s"+_)}if(g.colCopy){$(g.cdropleft).remove();$(g.cdropright).remove();g.dcolt=null}})});g.bDiv.className="bDiv";$(t).before(g.bDiv);$(g.bDiv).css({height:(p.height=="auto")?"auto":p.height+"px"}).scroll(function($){g.scroll()}).append(t);if(p.height=="auto")$("table",g.bDiv).addClass("autoht");g.addCellProp();g.addRowProp();var cdcol=$("thead tr:first th:first",g.hDiv).get(0);if(cdcol!=null){g.cDrag.className="cDrag";g.cdpad=0;g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderLeftWidth")))?0:parseInt($("div",cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("borderRightWidth")))?0:parseInt($("div",cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingLeft")))?0:parseInt($("div",cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($("div",cdcol).css("paddingRight")))?0:parseInt($("div",cdcol).css("paddingRight")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderLeftWidth")))?0:parseInt($(cdcol).css("borderLeftWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("borderRightWidth")))?0:parseInt($(cdcol).css("borderRightWidth")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingLeft")))?0:parseInt($(cdcol).css("paddingLeft")));g.cdpad+=(isNaN(parseInt($(cdcol).css("paddingRight")))?0:parseInt($(cdcol).css("paddingRight")));$(g.bDiv).before(g.cDrag);var cdheight=$(g.bDiv).height(),hdheight=$(g.hDiv).height();$(g.cDrag).css({top:-hdheight+"px"});$("thead tr:first th",g.hDiv).each(function(){var _=document.createElement("div");$(g.cDrag).append(_);if(!p.cgwidth)p.cgwidth=$(_).width();$(_).css({height:cdheight+hdheight}).mousedown(function($){g.dragStart("colresize",$,this)});if($.browser.msie&&$.browser.version<7){g.fixHeight($(g.gDiv).height());$(_).hover(function(){g.fixHeight();$(this).addClass("dragging")},function(){if(!g.colresize)$(this).removeClass("dragging")})}})}if(p.striped)$("tbody tr:odd",g.bDiv).addClass("erow");if(p.resizable&&p.height!="auto"){g.vDiv.className="vGrip";$(g.vDiv).mousedown(function($){g.dragStart("vresize",$)}).html("<span></span>");$(g.bDiv).after(g.vDiv)}if(p.resizable&&p.width!="auto"&&!p.nohresize){g.rDiv.className="hGrip";$(g.rDiv).mousedown(function($){g.dragStart("vresize",$,true)}).html("<span></span>").css("height",$(g.gDiv).height());if($.browser.msie&&$.browser.version<7)$(g.rDiv).hover(function(){$(this).addClass("hgOver")},function(){$(this).removeClass("hgOver")});$(g.gDiv).append(g.rDiv)}if(p.usepager){g.pDiv.className="pDiv";g.pDiv.innerHTML="<div class=\"pDiv2\"></div>";$(g.bDiv).after(g.pDiv);var html=" <div class=\"pGroup\"> <div class=\"pFirst pButton\"><span></span></div><div class=\"pPrev pButton\"><span></span></div> </div> <div class=\"btnseparator\"></div> <div class=\"pGroup\"><span class=\"pcontrol\">"+p.resource["page"]+" <input type=\"text\" size=\"4\" value=\"1\" /> "+p.resource["of"]+" <span> 1 </span></span></div> <div class=\"btnseparator\"></div> <div class=\"pGroup\"> <div class=\"pNext pButton\"><span></span></div><div class=\"pLast pButton\"><span></span></div> </div> <div class=\"btnseparator\"></div> <div class=\"pGroup\"> <div class=\"pReload pButton\" title=\""+p.resource["refurbish"]+"\"><span></span></div> </div> <div class=\"btnseparator\"></div> <div class=\"pGroup\"><span class=\"pPageStat\"></span></div>";$("div",g.pDiv).html(html);$(".pReload",g.pDiv).click(function(){p.oprAction=3;g.populate()});$(".pFirst",g.pDiv).click(function(){g.changePage("first")});$(".pPrev",g.pDiv).click(function(){g.changePage("prev")});$(".pNext",g.pDiv).click(function(){g.changePage("next")});$(".pLast",g.pDiv).click(function(){g.changePage("last")});$(".pcontrol input",g.pDiv).keydown(function($){if($.keyCode==13)g.changePage("input")});if($.browser.msie&&$.browser.version<7)$(".pButton",g.pDiv).hover(function(){$(this).addClass("pBtnOver")},function(){$(this).removeClass("pBtnOver")});if(p.useRp){var opt="";for(var nx=0;nx<p.rpOptions.length;nx++){if(p.rp==p.rpOptions[nx])sel="selected=\"selected\"";else sel="";opt+="<option value='"+p.rpOptions[nx]+"' "+sel+" >"+p.rpOptions[nx]+"&nbsp;&nbsp;</option>"}$(".pDiv2",g.pDiv).prepend("<div class='pGroup'><select name='rp' id='rp'>"+opt+"</select></div> <div class='btnseparator'></div>");$("select",g.pDiv).change(function(){p.oprAction=1;if(p.onRpChange)p.onRpChange(+this.value);else{p.newp=1;p.rp=+this.value;g.populate()}})}if(p.searchitems){$(".pDiv2",g.pDiv).prepend("<div class='pGroup'> <div class='pSearch pButton'><span></span></div> </div>  <div class='btnseparator'></div>");$(".pSearch",g.pDiv).click(function(){$(g.sDiv).slideToggle("fast",function(){$(".sDiv:visible input:first",g.gDiv).trigger("focus")})});g.sDiv.className="sDiv";sitems=p.searchitems;var sopt="";for(var s=0;s<sitems.length;s++){if(p.qtype==""&&sitems[s].isdefault==true){p.qtype=sitems[s].name;sel="selected=\"selected\""}else sel="";sopt+="<option value='"+sitems[s].name+"' "+sel+" >"+sitems[s].display+"&nbsp;&nbsp;</option>"}if(p.qtype=="")p.qtype=sitems[0].name;$(g.sDiv).append("<div class='sDiv2'>Quick Search <input type='text' size='30' name='q' class='qsbox' /> <select name='qtype'>"+sopt+"</select> <input type='button' value='Clear' /></div>");$("input[name=q],select[name=qtype]",g.sDiv).keydown(function($){if($.keyCode==13)g.doSearch()});$("input[value=Clear]",g.sDiv).click(function(){$("input[name=q]",g.sDiv).val("");p.query="";g.doSearch()});$(g.bDiv).after(g.sDiv)}}$(g.pDiv,g.sDiv).append("<div style='clear:both'></div>");if(p.title){g.mDiv.className="mDiv";g.mDiv.innerHTML="<div class=\"ftitle\">"+p.title+"</div>";$(g.gDiv).prepend(g.mDiv);if(p.showTableToggleBtn){$(g.mDiv).append("<div class=\"ptogtitle\" title=\""+p.resource["oprTable"]+"\"><span></span></div>");$("div.ptogtitle",g.mDiv).click(function(){$(g.gDiv).toggleClass("hideBody");$(this).toggleClass("vsble")})}}g.cdropleft=document.createElement("span");g.cdropleft.className="cdropleft";g.cdropright=document.createElement("span");g.cdropright.className="cdropright";g.block.className="gBlock";var gh=$(g.bDiv).height(),gtop=g.bDiv.offsetTop;$(g.block).css({width:g.bDiv.style.width,height:gh,background:"white",position:"relative",marginBottom:(gh*-1),zIndex:1,top:gtop,left:"0px"});$(g.block).fadeTo(0,p.blockOpacity);if($("th",g.hDiv).length){g.nDiv.className="nDiv";g.nDiv.innerHTML="<table cellpadding='0' cellspacing='0'><tbody></tbody></table>";$(g.nDiv).css({marginBottom:(gh*-1),display:"none",top:gtop}).noSelect();var cn=0;$("th div",g.hDiv).each(function(){var _=$("th[axis='col"+cn+"']",g.hDiv)[0],A="checked=\"checked\"";if(_.style.display=="none")A="";$("tbody",g.nDiv).append("<tr><td class=\"ndcol1\"><input type=\"checkbox\" "+A+" class=\"togCol\" value=\""+cn+"\" /></td><td class=\"ndcol2\">"+this.innerHTML+"</td></tr>");cn++});if($.browser.msie&&$.browser.version<7)$("tr",g.nDiv).hover(function(){$(this).addClass("ndcolover")},function(){$(this).removeClass("ndcolover")});$("td.ndcol2",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<=p.minColToggle&&$(this).prev().find("input")[0].checked)return false;return g.toggleCol($(this).prev().find("input").val())});$("input.togCol",g.nDiv).click(function(){if($("input:checked",g.nDiv).length<p.minColToggle&&this.checked==false)return false;$(this).parent().next().trigger("click")});$(g.gDiv).prepend(g.nDiv);$(g.nBtn).addClass("nBtn").html("<div></div>").attr("title",p.resource["oprColumns"]).click(function(){$(g.nDiv).toggle();return true});if(p.showToggleBtn)$(g.gDiv).prepend(g.nBtn)}$(g.iDiv).addClass("iDiv").css({display:"none"});$(g.bDiv).append(g.iDiv);$(g.bDiv).hover(function(){$(g.nDiv).hide();$(g.nBtn).hide()},function(){if(g.multisel)g.multisel=false});$(g.gDiv).hover(function(){},function(){$(g.nDiv).hide();$(g.nBtn).hide()});$(document).mousemove(function($){g.dragMove($)}).mouseup(function($){g.dragEnd()}).hover(function(){},function(){g.dragEnd()});if($.browser.msie&&$.browser.version<7){$(".hDiv,.bDiv,.mDiv,.pDiv,.vGrip,.tDiv, .sDiv",g.gDiv).css({width:"100%"});$(g.gDiv).addClass("ie6");if(p.width!="auto")$(g.gDiv).addClass("ie6fullwidthbug")}g.rePosDrag();g.fixHeight();t.p=p;t.grid=g;if(p.url&&p.autoload)g.populate();return t};var docloaded=false;$(document).ready(function(){docloaded=true});$.fn.flexigrid=function(_){return this.each(function(){if(!docloaded){$(this).hide();var A=this;$(document).ready(function(){gobal_guid=$.addFlex(A,_)})}else gobal_guid=$.addFlex(this,_)})};$.fn.flexReload=function($){return this.each(function(){if(this.grid&&this.p.url)this.grid.populate()})};$.fn.flexOptions=function(_){return this.each(function(){if(this.grid)$.extend(this.p,_)})};$.fn.flexToggleCol=function(_,$){return this.each(function(){if(this.grid)this.grid.toggleCol(_,$)})};$.fn.flexAddData=function($){return this.each(function(){if(this.grid)this.grid.addData($)})};$.fn.noSelect=function(_){if(_==null)prevent=true;else prevent=_;if(prevent)return this.each(function(){if($.browser.msie||$.browser.safari)$(this).bind("selectstart",function(){return false});else if($.browser.mozilla){$(this).css("MozUserSelect","none");$("body").trigger("focus")}else if($.browser.opera)$(this).bind("mousedown",function(){return false});else $(this).attr("unselectable","on")});else return this.each(function(){if($.browser.msie||$.browser.safari)$(this).unbind("selectstart");else if($.browser.mozilla)$(this).css("MozUserSelect","inherit");else if($.browser.opera)$(this).unbind("mousedown");else $(this).removeAttr("unselectable","on")})}})(jQuery);function parserString($,A){var _=$;while(true){_=getSplit($,A);if(_==$)return _;$=_}}function getSplit(_,D){var B=_.indexOf("{");if(B==-1)return _;var E=_.indexOf("}");if(E==-1)return _;if(E<_.length-1)var C=_.substring(E+1);var $=_.substring(B+1,E),A=D[$];if(A!=null&&A!=undefined)_=_.replace("{"+$+"}",A.toString());return _}function setSelect($,A){if(!$)return;var _=A;if(!isNoneInCommon(_)){var B=$.options;for(var C=0;C<B.length;C++)if(B[C].value==_){B[C].selected=true;return true}}return false}function isNoneInCommon($){if(typeof $=="string")if($=="")return true;return false}function $ajax(A,B,_){$.ajax({type:"POST",url:A,data:[],dataType:"json",success:B,error:_?_:function($){alert("system error")}})}