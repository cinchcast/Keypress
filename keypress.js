(function(){var u,v,w,o,s,x,y,z,g,k,t,p,l,q,r,m,n,i,A,j=[].indexOf||function(a){for(var c=0,b=this.length;c<b;c++)if(c in this&&this[c]===a)return c;return-1};m=[];g=[];i=[];q=p=!1;t="ctrl";w={keys:[],count:0,is_ordered:!1,is_repeating:!1,on_down:null,on_release:function(){}};n=function(a,c){var b;if(!(a&&null!=c))return!1;if(-1<(b=a.indexOf(c)))[].splice.apply(a,[b,b-b+1].concat(b=[])),b;return a};v=function(){var a,c,b,d,e,f,g;c=[];d=0;for(f=arguments.length;d<f;d++){a=arguments[d];e=0;for(g=a.length;e<
g;e++)b=a[e],c.push(b)}return c};o=function(a,c){var b,d,e;if(a.length!==c.length)return!1;d=0;for(e=a.length;d<e;d++)if(b=a[d],!(0<=j.call(c,b)))return!1;d=0;for(e=c.length;d<e;d++)if(b=c[d],!(0<=j.call(a,b)))return!1;return!0};k=function(a,c,b){var d,e,f;null==a&&(a=g);null==c&&(c=m);null==b&&(b=!1);e=0;for(f=c.length;e<f;e++)if(d=c[e],d.is_ordered){if(a.join("")===d.keys.join("")||b&&a.join("")===d.keys.slice(0,a.length).join(""))return d}else if(o(a,d.keys)||b&&o(a,d.keys.slice(0,a.length)))return d;
return!1};l=function(a){q=!0;return a.preventDefault()};y=function(a,c){var b,d,e,f,h;f=!0;h=0;for(b=g.length;h<b;h++)e=g[h],e===a&&(f=!1);if(f){q=!1;g.push(a);if(e=k(g,i))e.is_activated=!1,l(c);else{f=null;d=h=1;for(b=g.length;1<=b?h<=b:h>=b;d=1<=b?++h:--h)d=g.slice(-d),f=k(d)||f;h=0;for(b=i.length;h<b;h++)d=i[h],d.is_activated||(d=v(d.keys,[a]),f=k(d)||f);if(f)e=$.extend(!0,{},f),i.push(e),l(c);else{f=0;for(h=m.length;f<h;f++)if(b=m[f],b=b.keys.slice(0,g.length),o(g,b)){l(c);return}}}if(e){if(e.is_repeating)e.count+=
1,e.on_down(e.count);else if("function"===typeof e.on_down)e.on_down();1<e.keys.length&&(f=n($.extend(!0,[],e.keys),a),f=k(f,i,!0),f!==e&&f&&n(i,f))}}else q&&l(c)};z=function(a){var c,b,d,e,f;if(!(0>j.call(g,a))){g=n(g,a);d=0;for(e=i.length;d<e;d++)if(c=i[d],0<=j.call(c.keys,a)){b=c;break}if(b){c=!1;f=b.keys;d=0;for(e=f.length;d<e;d++)if(a=f[d],0<=j.call(g,a)){c=!0;break}if(!b.is_activated)if(b.is_repeating){if(!c)b.on_release()}else b.on_release(),b.is_activated=!0;c||(i=n(i,b))}}};r=function(a,
c){var b;if(p)g.length&&(g=[]);else if(c||g.length)if(b=s(a.keyCode))return c?y(b,a):z(b)};A=function(a){var c,b,d,e;c=d=0;for(e=a.keys.length;0<=e?d<e:d>e;c=0<=e?++d:--d)b=a.keys[c],"meta"===b&&a.keys.splice(c,1,t);return!0};x=function(){-1!==navigator.userAgent.indexOf("Mac OS X")&&(t="cmd")};u=function(a){var c;if(0<=j.call(g,"cmd")&&"cmd"!==(c=s(a.keyCode))&&"shift"!==c&&"alt"!==c)return r(a,!1)};window.keypress={};keypress.wire=function(){x();$("body").bind("keydown.keypress_events",function(a){r(a,
!0);return u(a)}).bind("keyup.keypress_events",function(a){return r(a,!1)});return $(window).bind("blur.keypress_events",function(){g=[];return i=[]})};keypress.combo=function(a,c){return keypress.register_combo({keys:a,on_release:c})};keypress.register_many_combos=function(a){var c,b,d;b=0;for(d=a.length;b<d;b++)c=a[b],keypress.register_combo(c);return!0};keypress.register_combo=function(a){$.extend(!0,{},w,a);if(A(a))return m.push(a),!0};keypress.listen=function(){return p=!1};keypress.stop_listening=
function(){return p=!0};s=function(a){switch(a){case 9:return"tab";case 13:return"enter";case 16:return"shift";case 17:return"ctrl";case 18:return"alt";case 27:return"escape";case 32:return"space";case 37:return"left";case 38:return"up";case 39:return"right";case 40:return"down";case 49:return"1";case 50:return"2";case 51:return"3";case 52:return"4";case 53:return"5";case 65:return"a";case 67:return"c";case 68:return"d";case 69:return"e";case 70:return"f";case 81:return"q";case 82:return"r";case 83:return"s";
case 84:return"t";case 87:return"w";case 88:return"x";case 90:return"z";case 91:return"cmd";case 224:return"cmd"}return!1}}).call(this);