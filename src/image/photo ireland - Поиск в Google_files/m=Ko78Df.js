loaded_h_0(function(_){var window=this;
_.t("Ko78Df");
var jLC=class{constructor(a){this.state=a}getId(){return this.state.id}getPushId(){return this.state.pushId}getUrl(){return this.state.url}getUserData(){return this.state.userData}};
_.Oe(_.J1a,class extends _.co{static Sa(){return{service:{history:_.ydb}}}constructor(a){super();this.history=a.service.history;this.Pw=document.body;this.oa=new Map;this.history.addListener((b,c,d)=>{if(d.Mga)for(const e of d.Mga)if(this.oa.has(e.id)){const f=this.oa.get(e.id);f&&_.gn(()=>{f(e.DOa)});this.oa.delete(e.id)}d.userInitiated&&this.Pw.dispatchEvent(new CustomEvent("FWkcec"))})}pushAsync(a,b,c,d){a=d?this.history.oa(a,b):this.history.pushAsync(a,b);return Promise.resolve(a.then(e=>{c&&
this.oa.set(e.id,c);return e.id}))}pop(a,b){a=b?this.history.Ca(a):this.history.pop(a);return Promise.resolve(a.then(c=>c?new jLC(c):null))}getState(){const a=this.history.getState();return a?new jLC(a):null}getCurrentUrl(){return this.history.getCurrentUrl()}getEventTarget(){return this.Pw}navigate(a,b){a=this.history.navigate(a,b).committed;return Promise.resolve(a.then(c=>new jLC(c)))}});
_.v();
});
// Google Inc.
