loaded_h_0(function(_){var window=this;
_.CGb=class{constructor(a){this.Ll=a}};
_.t("aLUfP");
var EGb;_.DGb=!1;EGb=function(){return _.ra()&&_.Qd.mH()&&!navigator.userAgent.includes("GSA")};
_.Oe(_.XYa,class extends _.co{static Sa(){return{service:{window:_.eo}}}constructor(a){super();this.window=a.service.window.get();this.Ba=this.Ll();this.Aa=window.orientation;this.oa=()=>{const b=this.Ll();var c=this.r_b()&&Math.abs(window.orientation)===90&&this.Aa===-1*window.orientation;this.Aa=window.orientation;if(b!==this.Ba||c){this.Ba=b;for(const d of this.listeners){c=new _.CGb(b);try{d(c)}catch(e){_.da(e)}}}};this.listeners=new Set;this.window.addEventListener("resize",this.oa);this.r_b()&&
this.window.addEventListener("orientationchange",this.oa)}addListener(a){this.listeners.add(a)}removeListener(a){this.listeners.delete(a)}Ll(){if(EGb()){var a=_.Tl(this.window);a=new _.Gl(a.width,Math.round(a.width*this.window.innerHeight/this.window.innerWidth))}else a=this.Mc()||(_.ra()?EGb():this.window.visualViewport)?_.Tl(this.window):new _.Gl(this.window.innerWidth,this.window.innerHeight);return a.height<a.width}destroy(){this.window.removeEventListener("resize",this.oa);this.window.removeEventListener("orientationchange",
this.oa)}Mc(){return _.DGb}r_b(){return"orientation"in window}});
_.DGb=!0;
_.v();
});
// Google Inc.
