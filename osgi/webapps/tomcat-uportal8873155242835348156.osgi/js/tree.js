/*
 * Compressed by JSA(www.xidea.org)
 */
function treeview($,C,_,A){var E=this,B=null;this.nodes=new node("root","roottag").nodes;this.id=$?$:"";this.icon=true;this.selected=null;this.path=C?C:"";this.selected=null;this.dragTo=null;this.dragFrom=null;this.drag=A?true:false;this.check=_?true:false;this.radio=(_==2);if(this.radio)this.check=false;var D={root:"root.gif",open:"open.gif",close:"close.gif",file:"file.gif",rplus:"rplus.gif",rminus:"rminus.gif",join:"t.gif",joinbottom:"l.gif",jointop:"r.gif",plus:"tplus.gif",plusbottom:"lplus.gif",minus:"tminus.gif",minusbottom:"lminus.gif",blank:"blank.gif",line:"i.gif"};this.Ficons={};for(i in D){this.Ficons[i]=new Image();this.Ficons[i].src=C+"/"+D[i]}this.create=function($){if($){for(var _=0;_<this.nodes.length;_++)$.appendChild(this.nodes.items[_].toString(E));B=$}};this.expandAll=function(){for(var $=0;$<this.nodes.length;$++)this.expandInner(this.nodes.items[$])};this.collapseAll=function(){for(var $=0;$<this.nodes.length;$++)this.collapseInner(this.nodes.items[$])};this.expandInner=function(_){_.expand();for(var A=0;A<_.nodes.length;A++){var $=_.nodes.items[A];$.expand();if($.nodes&&$.nodes.length>0)this.expandInner($)}};this.collapseInner=function(_){_.collapse();for(var A=0;A<_.nodes.length;A++){var $=_.nodes.items[A];$.collapse();if($.nodes&&$.nodes.length>0)this.collapseInner($)}};this.add=function($){this.insert(this.nodes.length,$)};this.insert=function($,_){if($>=0&&$<=this.nodes.length){var A=null;if($<this.nodes.length)A=this.nodes.items[$].baseNode;this.nodes.insert($,_);if(B)if($==this.nodes.length)B.appendChild(_.toString());else if(A)B.insertBefore(_.toString(),A)}}}treeview.prototype.onnodeclick=function($){return false};treeview.prototype.onnodeexpand=function($){};treeview.prototype.onnodecollapse=function($){};treeview.prototype.onnodedblclick=function($){$.toggle();return false};treeview.prototype.onnodeafteredit=function($,_){};treeview.prototype.onnodebeforeedit=function($,A,_){};treeview.prototype.onnodedrag=function(_,$){};treeview.prototype.onnodekeydown=function($,_){var _=_||event;switch(_.keyCode){case 61:case 187:case 107:$.expand();break;case 109:case 189:$.collapse();break;case 38:if($.previous())$.previous().select();else if($.parent&&$.parent.level>=0)$.parent.select();break;case 40:if($.next())$.next().select();break;case 37:if($.parent&&$.parent.level>=0)$.parent.select();break;case 39:if($.firstChild())$.firstChild().select();else if($.next())$.next().select();break}};treeview.prototype.onnodemousedown=function($,_){};treeview.prototype.onnodemouseup=function($,_){};treeview.prototype.oncontextmenu=function($){};treeview.prototype.onnodecheck=function($){};treeview.prototype.onselectchange=function(_,$){};function snode(B,A,$,C,_){return new node(B,"",C,_,null,null,A,$)}function node(A,E,C,G,$,H,_,D){var I=this;this.nodes=new F();this.caption=A;this.title=E?E:A;this.parent=null;this.tag=$?$:"";this.loaded=false;this.level=-1;this.isLast=false;this.action=C;this.target=G?G:"";this.opened=false;this.isRoot=_?_:false;this.showed=false;this.id=D;this.checked=false;this.indent=[];this.callback=H?H:null;this.callbackFlag=0;this.map={};var J=null;this.container=document.createElement("div");this.baseNode=null;this.handleNode=null;this.folderNode=null;this.textNode=null;this.checkNode=null;function B(){var B=Math.random()+"",_=Math.random()+"",A=Math.random()+"",$=Math.random()+"";return B.substr(2,8)+"-"+_.substr(2,8)+"-"+A.substr(2,8)+"-"+$.substr(2,8)}function F(){var $=[];this.length={valueOf:function(){return $.length},toString:function(){return $.length}};this.toString=function(){return $.toString()};this.insert=function(_,B){if(_>=0&&_<=$.length){var D=$.length;B.parent=I;B.level=I.level+1;if(_>=$.length){B.isLast=true;if($.length>0){$[$.length-1].isLast=false;$[$.length-1].setIndent($[$.length-1].level,$[$.length-1].isLast);$[$.length-1].refresh(0)}}else B.isLast=false;B.indent=I.indent.concat();B.indent[B.indent.length]=B.isLast;if(B.nodes.length>0)A(B);function A($){for(var _=0;_<$.nodes.length;_++){$.nodes.items[_].indent=$.indent.concat();$.nodes.items[_].indent[$.nodes.items[_].indent.length]=$.nodes.items[_].isLast;if($.nodes.items[_].nodes.length>0)arguments.callee($.nodes.items[_])}}if(I.loaded)if(_==$.length)I.container.appendChild(B.toString());else{var C=$[_].baseNode;if(C)I.container.insertBefore(B.toString(),C)}$.splice(_,0,B);if(D==0)I.refresh(0)}return I};this.add=function(_){return this.insert($.length,_)};this.remove=function(_){if(_)for(var A=0;A<$.length;A++)if($[A]==_)this.removeAt(A)};this.removeAt=function(_){if(_>=0&&_<$.length){if(_>0&&_==$.length-1){$[_-1].isLast=true;$[_-1].setIndent($[_-1].level,$[_-1].isLast)}$[_].nodes.removeChildren();var A=$[_];if(A.showed){if(control)if(A==control.selected){if(_>0)control.selected=A.previous();else control.selected=A.next();if(!control.selected)if(A.parent.level>=0)control.selected=A.parent;if(control.selected)control.selected.select()}var B=A.baseNode;if(B)B.parentNode.removeChild(B)}$.splice(_,1);if($.length>0){var C=$[$.length-1];C.isLast=true;C.setIndent(C.level,C.isLast);if(C.showed)C.refresh(0)}else{I.loaded=false;I.opened=false;I.container.style.display="none";I.refresh(0)}}};this.removeChildren=function(){for(var B=$.length-1;B>=0;B--){var A=I.nodes.items[B];A.nodes.removeChildren();if(A.showed){if(control)if(A==control.selected)control.selected=this;var _=I.baseNode;if(_)_.parentNode.removeChild(_)}}$.length=0};this.items=$}this.add=function($){return this.nodes.add($)};this.setRoot=function($){this.isRoot=$};this.setMap=function($){this.map=$};this.invokeCall=function(_,$){if(this.callbackFlag==0){this.callback.apply(null,[this,this.toggle]);this.callbackFlag=1;$.onclick=function(){_.toggle()}}else $.onclick=function(){_.toggle()}};this.getRoot=function(){return this.isRoot||this.nodes.length>0};this.setCallback=function($){this.callback=$};this.insert=function($,_){return this.nodes.insert($,_)};this.remove=function(){this.parent.nodes.remove(this)};this.setCaption=function($,A){if(this.showed){var _=this.textNode;if(_){_.firstChild.innerHTML=$;_.title=typeof(A)!="undefined"?A:$}}this.caption=$};this.deepth=function(){var _=-1,$=I;do{$=$.parent;_++}while($!=null);return _};this.root=function(){var $=I;do if($.level>0)$=$.parent;else break;while($!=null);return $};this.toString=function(B){if(B)control=B;var D=document.createElement("div");if(I.id)D.id="tree_div_"+I.id;document.body.appendChild(D);D.className="Node";D.noWrap=true;D.onselectstart=function($){$=$||event;return typeof($.srcElement.type)!="undefined"&&$.srcElement.type=="text"};D.oncontextmenu=function($){return treeview.prototype.oncontextmenu(I)};for(var H=0;H<this.indent.length-1;H++){var F=document.createElement("img");F.align="absmiddle";F.src=this.indent[H]?control.Ficons.blank.src:control.Ficons.line.src;D.appendChild(F)}var A=document.createElement("img");if(I.id)A.id="tree_hIcon_"+I.id;D.appendChild(A);A.align="absmiddle";var C=I.getRoot();A.src=C?(I.opened?(I.level>0?(I.isLast?control.Ficons.minusbottom.src:control.Ficons.minus.src):(I.isLast?control.Ficons.minusbottom.src:control.Ficons.rminus.src)):(I.level>0?(I.isLast?control.Ficons.plusbottom.src:control.Ficons.plus.src):(I.isLast?control.Ficons.plusbottom.src:control.Ficons.rplus.src))):(I.level>0?(I.isLast?control.Ficons.joinbottom.src:control.Ficons.join.src):I.isLast?control.Ficons.joinbottom.src:control.Ficons.join.src);if(I.callback)A.onclick=function(){I.invokeCall(I,A)};else A.onclick=function(){I.toggle()};var E=document.createElement("img");if(I.id)E.id="tree_fIcon_"+I.id;D.appendChild(E);E.align="absmiddle";E.src=I.icon?this.icon:(C?(I.opened?control.Ficons.open.src:control.Ficons.close.src):control.Ficons.file.src);E.onclick=function($){I.select();return treeview.prototype.onnodeclick(I)};E.ondblclick=function($){return treeview.prototype.onnodedblclick(I)};if(control&&(control.check||control.radio)){var _=document.createElement("input");if(control.check)_.type="checkbox";else _.type="radio";_.value=I.id;_.name="tree_checkbox";_.checked=I.checked;_.onclick=function(){I.checked=!I.checked;treeview.prototype.onnodecheck(I)};D.appendChild(_);this.checkNode=_}var G=document.createElement("span");if(I.id)G.id="tree_span_"+I.id;D.appendChild(G);var $=document.createElement("a");if(I.id)$.id="tree_a_"+I.id;G.appendChild($);$.innerHTML=I.caption?I.caption:"";$.target=I.target?I.target:"";$.href=I.action?I.action:"javascript:void(0)";$.onkeydown=function($){return treeview.prototype.onnodekeydown(I,$)};$.ondblclick=function($){return treeview.prototype.onnodedblclick(I)};$.onmousedown=function($){return treeview.prototype.onnodemousedown(I)};$.onmouseup=function($){return treeview.prototype.onnodemouseup(I)};if($.href=="javascript:void(0)")$.onclick=function($){I.select();return treeview.prototype.onnodeclick(I)};$.onfocus=function($){var _=null;if(control){_=control.selected;if(control.selected)control.selected.unselect();control.selected=I}if(_!=I)treeview.prototype.onselectchange(_,I);I.select()};$.ondragstart=function($){if(control.drag){var _=window.event.dataTransfer;_.effectAllowed="move";_.dropEffect="none";control.dragFrom=I;control.dragTo=null}};$.ondragenter=function($){if(control.drag){control.dragTo=I;I.select()}};$.ondragend=function($){if(control.drag)if(control.dragFrom!=control.dragTo&&control.dragTo!=null)treeview.prototype.onnodedrag(control.dragFrom,control.dragTo)};G.className="Node-unselect";G.title=I.title;G.ondragover=function($){if(control.drag){var _=window.event;_.returnValue=false}};I.container.style.display=I.opened?"":"none";D.appendChild(I.container);I.showed=true;this.baseNode=D;this.handleNode=A;this.folderNode=E;this.textNode=G;return D};this.edit=function(){if(control.selected!=this)this.select();this.textNode.style.display="none";this.textNode.style.className="Node-unselected";var _=this.baseNode,A=document.createElement("input");A.type="text";A.style.borderWidth="1px";A.style.width="80px";A.value=this.caption;_.insertBefore(A,this.textNode);A.onblur=function(){if(this.value.length==0){A.focus();return false}var _=I.text,$=this.value;I.setCaption(this.value);this.parentNode.removeChild(this);I.textNode.style.display="";I.textNode.className="Node-selected";treeview.prototype.onnodeafteredit(this,_,$);I.select()};A.onkeypress=function($){var $=$||event;if($.keyCode==13)A.blur()};try{A.scrollIntoView(false)}catch($){}A.select()};this.expand=function(){if(this.nodes.length>0)if(!this.opened){this.opened=true;if(!I.loaded){var $=I.parent;if($&&!$.opened&&$.level>=0)$.expand();this.refresh(1);this.loaded=true}else this.refresh(0);this.container.style.display="";treeview.prototype.onnodeexpand(this)}};this.collapse=function(){this.opened=false;treeview.prototype.onnodecollapse(this);this.container.style.display="none";this.refresh(0)};this.toggle=function(){if(this.nodes.length>0)if(!this.opened)this.expand();else this.collapse()};this.isParent=function($){var _=I.parent;while(_!=null){if(_==$)return true;_=_.parent}return false};this.setIndent=function(_,A){this.indent[_]=A;for(var C=0;C<this.nodes.length;C++){this.nodes.items[C].indent[_]=A;if(this.nodes.items[C].showed){var $=this.nodes.items[C].baseNode.childNodes;for(var B=0;B<this.nodes.items[C].indent.length-1;B++)if($[B].tagName=="IMG")$[B].src=this.nodes.items[C].indent[B]?control.Ficons.blank.src:control.Ficons.line.src}this.nodes.items[C].setIndent(_,A)}};this.select=function(){if(this.parent)this.parent.expand();var A=this.textNode;if(A){A.className="Node-selected";var $=A.firstChild;try{$.focus()}catch(_){}}};this.unselect=function(){if(this.showed){var $=this.textNode;if($){$.className="Node-unselect";$.firstChild.blur()}}};this.refresh=function(_){if(this.showed){if(_)for(var $=0;$<this.nodes.length;$++){this.container.appendChild(this.nodes.items[$].toString());this.container.style.display=this.opened?"":"none"}if(this.handleNode)this.handleNode.src=I.nodes.length>0?(I.opened?(I.level>0?(I.isLast?control.Ficons.minusbottom.src:control.Ficons.minus.src):(I.isLast?control.Ficons.minusbottom.src:control.Ficons.rminus.src)):(I.level>0?(I.isLast?control.Ficons.plusbottom.src:control.Ficons.plus.src):(I.isLast?control.Ficons.plusbottom.src:control.Ficons.rplus.src))):(I.level>0?(I.isLast?control.Ficons.joinbottom.src:control.Ficons.join.src):I.isLast?control.Ficons.joinbottom.src:control.Ficons.join.src);if(this.folderNode)if(!this.icon)this.folderNode.src=this.nodes.length>0?(this.opened?control.Ficons.open.src:control.Ficons.close.src):control.Ficons.file.src}};this.moveToChild=function($){if($)if(this.isParent($)==false){if(this.opened)this.expand();var _=$.clone();$.remove();this.add(_)}};this.clone=function(){var $=new node(this.caption,this.title,this.url,this.target,this.tag);_(this,$);function _(A,_){for(var C=0;C<A.nodes.length;C++){var $=A.nodes.items[C],B=new node($.caption,$.title,$.url,$.target,$.tag);B.loaded=false;_.add(B);if($.nodes.length)arguments.callee($,B)}}return $};this.firstChild=function(){if(this.nodes.length>0)return this.nodes.items[0];else return null};this.lastChild=function(){if(this.nodes.length>0)return this.nodes.items[this.nodes.length-1];else return null};this.next=function(){var $=this.parent;for(var _=0;_<$.nodes.length;_++)if($.nodes.items[_]==this)if(_<$.nodes.length-1)return $.nodes.items[_+1];return null};this.previous=function(){var $=this.parent;for(var _=0;_<$.nodes.length;_++)if($.nodes.items[_]==this)if(_>0)return $.nodes.items[_-1];return null}}