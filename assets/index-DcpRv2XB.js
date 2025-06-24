(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(i){if(i.ep)return;i.ep=!0;const n=o(i);fetch(i.href,n)}})();var z,g,Z,A,q,ee,te,oe,G,M,U,T={},re=[],pe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,H=Array.isArray;function S(t,e){for(var o in e)t[o]=e[o];return t}function $(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function _e(t,e,o){var l,i,n,s={};for(n in e)n=="key"?l=e[n]:n=="ref"?i=e[n]:s[n]=e[n];if(arguments.length>2&&(s.children=arguments.length>3?z.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)s[n]===void 0&&(s[n]=t.defaultProps[n]);return P(t,s,l,i,null)}function P(t,e,o,l,i){var n={type:t,props:e,key:o,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Z,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(n),n}function W(t){return t.children}function R(t,e){this.props=t,this.context=e}function k(t,e){if(e==null)return t.__?k(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?k(t):null}function ne(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ne(t)}}function J(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!L.__r++||q!=g.debounceRendering)&&((q=g.debounceRendering)||ee)(L)}function L(){for(var t,e,o,l,i,n,s,c=1;A.length;)A.length>c&&A.sort(te),t=A.shift(),c=A.length,t.__d&&(o=void 0,i=(l=(e=t).__v).__e,n=[],s=[],e.__P&&((o=S({},l)).__v=l.__v+1,g.vnode&&g.vnode(o),j(e.__P,o,l,e.__n,e.__P.namespaceURI,32&l.__u?[i]:null,n,i??k(l),!!(32&l.__u),s),o.__v=l.__v,o.__.__k[o.__i]=o,se(n,o,s),o.__e!=i&&ne(o)));L.__r=0}function ie(t,e,o,l,i,n,s,c,_,p,h){var r,m,d,y,v,x,f=l&&l.__k||re,u=e.length;for(_=de(o,e,f,_,u),r=0;r<u;r++)(d=o.__k[r])!=null&&(m=d.__i==-1?T:f[d.__i]||T,d.__i=r,x=j(t,d,m,i,n,s,c,_,p,h),y=d.__e,d.ref&&m.ref!=d.ref&&(m.ref&&Y(m.ref,null,d),h.push(d.ref,d.__c||y,d)),v==null&&y!=null&&(v=y),4&d.__u||m.__k===d.__k?_=le(d,_,t):typeof d.type=="function"&&x!==void 0?_=x:y&&(_=y.nextSibling),d.__u&=-7);return o.__e=v,_}function de(t,e,o,l,i){var n,s,c,_,p,h=o.length,r=h,m=0;for(t.__k=new Array(i),n=0;n<i;n++)(s=e[n])!=null&&typeof s!="boolean"&&typeof s!="function"?(_=n+m,(s=t.__k[n]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?P(null,s,null,null,null):H(s)?P(W,{children:s},null,null,null):s.constructor==null&&s.__b>0?P(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,c=null,(p=s.__i=he(s,o,_,r))!=-1&&(r--,(c=o[p])&&(c.__u|=2)),c==null||c.__v==null?(p==-1&&(i>h?m--:i<h&&m++),typeof s.type!="function"&&(s.__u|=4)):p!=_&&(p==_-1?m--:p==_+1?m++:(p>_?m--:m++,s.__u|=4))):t.__k[n]=null;if(r)for(n=0;n<h;n++)(c=o[n])!=null&&(2&c.__u)==0&&(c.__e==l&&(l=k(c)),ce(c,c));return l}function le(t,e,o){var l,i;if(typeof t.type=="function"){for(l=t.__k,i=0;l&&i<l.length;i++)l[i]&&(l[i].__=t,e=le(l[i],e,o));return e}t.__e!=e&&(e&&t.type&&!o.contains(e)&&(e=k(t)),o.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function he(t,e,o,l){var i,n,s=t.key,c=t.type,_=e[o];if(_===null&&t.key==null||_&&s==_.key&&c==_.type&&(2&_.__u)==0)return o;if(l>(_!=null&&(2&_.__u)==0?1:0))for(i=o-1,n=o+1;i>=0||n<e.length;){if(i>=0){if((_=e[i])&&(2&_.__u)==0&&s==_.key&&c==_.type)return i;i--}if(n<e.length){if((_=e[n])&&(2&_.__u)==0&&s==_.key&&c==_.type)return n;n++}}return-1}function K(t,e,o){e[0]=="-"?t.setProperty(e,o??""):t[e]=o==null?"":typeof o!="number"||pe.test(e)?o:o+"px"}function D(t,e,o,l,i){var n,s;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof l=="string"&&(t.style.cssText=l=""),l)for(e in l)o&&e in o||K(t.style,e,"");if(o)for(e in o)l&&o[e]==l[e]||K(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(oe,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=o,o?l?o.u=l.u:(o.u=G,t.addEventListener(e,n?U:M,n)):t.removeEventListener(e,n?U:M,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o??"";break e}catch{}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function Q(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=G++;else if(e.t<o.u)return;return o(g.event?g.event(e):e)}}}function j(t,e,o,l,i,n,s,c,_,p){var h,r,m,d,y,v,x,f,u,F,w,O,I,V,N,C,B,b=e.type;if(e.constructor!=null)return null;128&o.__u&&(_=!!(32&o.__u),n=[c=e.__e=o.__e]),(h=g.__b)&&h(e);e:if(typeof b=="function")try{if(f=e.props,u="prototype"in b&&b.prototype.render,F=(h=b.contextType)&&l[h.__c],w=h?F?F.props.value:h.__:l,o.__c?x=(r=e.__c=o.__c).__=r.__E:(u?e.__c=r=new b(f,w):(e.__c=r=new R(f,w),r.constructor=b,r.render=ue),F&&F.sub(r),r.props=f,r.state||(r.state={}),r.context=w,r.__n=l,m=r.__d=!0,r.__h=[],r._sb=[]),u&&r.__s==null&&(r.__s=r.state),u&&b.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,b.getDerivedStateFromProps(f,r.__s))),d=r.props,y=r.state,r.__v=e,m)u&&b.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),u&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(u&&b.getDerivedStateFromProps==null&&f!==d&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(f,w),!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(f,r.__s,w)===!1||e.__v==o.__v){for(e.__v!=o.__v&&(r.props=f,r.state=r.__s,r.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(E){E&&(E.__=e)}),O=0;O<r._sb.length;O++)r.__h.push(r._sb[O]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(f,r.__s,w),u&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(d,y,v)})}if(r.context=w,r.props=f,r.__P=t,r.__e=!1,I=g.__r,V=0,u){for(r.state=r.__s,r.__d=!1,I&&I(e),h=r.render(r.props,r.state,r.context),N=0;N<r._sb.length;N++)r.__h.push(r._sb[N]);r._sb=[]}else do r.__d=!1,I&&I(e),h=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++V<25);r.state=r.__s,r.getChildContext!=null&&(l=S(S({},l),r.getChildContext())),u&&!m&&r.getSnapshotBeforeUpdate!=null&&(v=r.getSnapshotBeforeUpdate(d,y)),C=h,h!=null&&h.type===W&&h.key==null&&(C=ae(h.props.children)),c=ie(t,H(C)?C:[C],e,o,l,i,n,s,c,_,p),r.base=e.__e,e.__u&=-161,r.__h.length&&s.push(r),x&&(r.__E=r.__=null)}catch(E){if(e.__v=null,_||n!=null)if(E.then){for(e.__u|=_?160:128;c&&c.nodeType==8&&c.nextSibling;)c=c.nextSibling;n[n.indexOf(c)]=null,e.__e=c}else for(B=n.length;B--;)$(n[B]);else e.__e=o.__e,e.__k=o.__k;g.__e(E,e,o)}else n==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):c=e.__e=fe(o.__e,e,o,l,i,n,s,_,p);return(h=g.diffed)&&h(e),128&e.__u?void 0:c}function se(t,e,o){for(var l=0;l<o.length;l++)Y(o[l],o[++l],o[++l]);g.__c&&g.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){g.__e(n,i.__v)}})}function ae(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:H(t)?t.map(ae):S({},t)}function fe(t,e,o,l,i,n,s,c,_){var p,h,r,m,d,y,v,x=o.props,f=e.props,u=e.type;if(u=="svg"?i="http://www.w3.org/2000/svg":u=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(p=0;p<n.length;p++)if((d=n[p])&&"setAttribute"in d==!!u&&(u?d.localName==u:d.nodeType==3)){t=d,n[p]=null;break}}if(t==null){if(u==null)return document.createTextNode(f);t=document.createElementNS(i,u,f.is&&f),c&&(g.__m&&g.__m(e,n),c=!1),n=null}if(u==null)x===f||c&&t.data==f||(t.data=f);else{if(n=n&&z.call(t.childNodes),x=o.props||T,!c&&n!=null)for(x={},p=0;p<t.attributes.length;p++)x[(d=t.attributes[p]).name]=d.value;for(p in x)if(d=x[p],p!="children"){if(p=="dangerouslySetInnerHTML")r=d;else if(!(p in f)){if(p=="value"&&"defaultValue"in f||p=="checked"&&"defaultChecked"in f)continue;D(t,p,null,d,i)}}for(p in f)d=f[p],p=="children"?m=d:p=="dangerouslySetInnerHTML"?h=d:p=="value"?y=d:p=="checked"?v=d:c&&typeof d!="function"||x[p]===d||D(t,p,d,x[p],i);if(h)c||r&&(h.__html==r.__html||h.__html==t.innerHTML)||(t.innerHTML=h.__html),e.__k=[];else if(r&&(t.innerHTML=""),ie(e.type=="template"?t.content:t,H(m)?m:[m],e,o,l,u=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,s,n?n[0]:o.__k&&k(o,0),c,_),n!=null)for(p=n.length;p--;)$(n[p]);c||(p="value",u=="progress"&&y==null?t.removeAttribute("value"):y!=null&&(y!==t[p]||u=="progress"&&!y||u=="option"&&y!=x[p])&&D(t,p,y,x[p],i),p="checked",v!=null&&v!=t[p]&&D(t,p,v,x[p],i))}return t}function Y(t,e,o){try{if(typeof t=="function"){var l=typeof t.__u=="function";l&&t.__u(),l&&e==null||(t.__u=t(e))}else t.current=e}catch(i){g.__e(i,o)}}function ce(t,e,o){var l,i;if(g.unmount&&g.unmount(t),(l=t.ref)&&(l.current&&l.current!=t.__e||Y(l,null,e)),(l=t.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){g.__e(n,e)}l.base=l.__P=null}if(l=t.__k)for(i=0;i<l.length;i++)l[i]&&ce(l[i],e,o||typeof t.type!="function");o||$(t.__e),t.__c=t.__=t.__e=void 0}function ue(t,e,o){return this.constructor(t,o)}function ge(t,e,o){var l,i,n,s;e==document&&(e=document.documentElement),g.__&&g.__(t,e),i=(l=!1)?null:e.__k,n=[],s=[],j(e,t=e.__k=_e(W,null,[t]),i||T,T,e.namespaceURI,i?null:e.firstChild?z.call(e.childNodes):null,n,i?i.__e:e.firstChild,l,s),se(n,t,s)}z=re.slice,g={__e:function(t,e,o,l){for(var i,n,s;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,l||{}),s=i.__d),s)return i.__E=i}catch(c){t=c}throw t}},Z=0,R.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S({},this.state),typeof t=="function"&&(t=t(S({},o),this.props)),t&&S(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),J(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),J(this))},R.prototype.render=W,A=[],ee=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,te=function(t,e){return t.__v.__b-e.__v.__b},L.__r=0,oe=/(PointerCapture)$|Capture$/i,G=0,M=Q(!1),U=Q(!0);var me=0;function a(t,e,o,l,i,n){e||(e={});var s,c,_=e;if("ref"in _)for(c in _={},e)c=="ref"?s=e[c]:_[c]=e[c];var p={type:t,props:_,key:o,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--me,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(s=t.defaultProps))for(c in s)_[c]===void 0&&(_[c]=s[c]);return g.vnode&&g.vnode(p),p}const ye=()=>a("style",{children:`
    /* Import Google Fonts */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Lato:wght@400;700&display=swap');

    body, html {
      margin: 0;
      padding: 0;
      /* Use Lato for body text, with fallbacks */
      font-family: 'Lato', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background-color: #FFFDF5; /* Warm Off-white */
      color: #333; /* Softer than pure black, easier on eyes */
      line-height: 1.7; /* Increased for better readability */
      scroll-behavior: smooth;
    }
    * {
      box-sizing: border-box;
    }
    .container {
      max-width: 900px; /* Slightly reduced for better focus */
      margin: 0 auto;
      padding: 0 20px;
    }
    section {
      padding: 80px 0; /* Increased for more white space */
    }
    h1, h2, h3 {
      /* Use Poppins for all headings */
      font-family: 'Poppins', sans-serif;
      color: #1a1a1a; /* Professional dark color */
      margin-top: 0;
      margin-bottom: 20px;
    }
    p {
      margin-top: 0;
      margin-bottom: 15px;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #6C9DFF; /* Friendly Blue */
      color: white;
      text-decoration: none;
      border-radius: 8px; /* Softer corners */
      font-weight: bold;
      transition: background-color 0.3s ease, border-color 0.3s ease;
      border: 2px solid #6C9DFF;
    }
    .button:hover {
      background-color: #5687E0; /* Darker Friendly Blue */
      border-color: #5687E0;
    }
    .text-center {
      text-align: center;
    }
    .section-highlight {
      background-color: #f7fafc; /* Updated to match hero background */
    }
    /* Hero Section Styles */
    .hero {
      text-align: center;
      padding: 80px 20px; /* Increased padding for more breathing room */
      background-color: #f7fafc; /* Light grey background for hero */
    }
    .hero h1 {
      font-size: 2.5em;
      margin-bottom: 15px;
    }
    .hero p {
      font-size: 1.2em;
      color: #555;
    }

    /* General Section Styling */
    .section {
      padding: 80px 20px; /* Increased padding */
      text-align: center;
    }
    
    /* "Simple Steps" Cards with enhanced styling */
    .steps-grid {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      margin-top: 50px; /* Increased margin */
    }
    .step-card {
      background-color: white;
      padding: 30px;
      border-radius: 10px; /* Slightly more rounded */
      /* Subtle shadow for depth - key improvement */
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      width: 250px; /* Slightly wider */
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effects */
    }
    .step-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }

    /* AI Feature Cards with hover effects */
    .ai-feature-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08) !important;
    }

    /* Footer Styles */
    footer {
      text-align: center;
      margin-top: 80px; /* Increased margin */
      padding: 50px 20px; /* Increased padding */
      border-top: 1px solid #eee;
      font-size: 0.9em;
      color: #777;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      h1 { font-size: 32px !important; }
      h2 { font-size: 28px !important; }
      .hero-section h1 { font-size: 36px !important; }
      .hero-section p { font-size: 18px !important; }
      section { padding: 50px 0; } /* Increased mobile padding */
      .step-card, .ai-feature-card { margin-bottom: 20px; }
      .ai-features-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}),xe=()=>a("header",{style:{backgroundColor:"#FFFFFF",padding:"15px 0",borderBottom:"1px solid #E0DACC"},children:a("div",{class:"container",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:a("h1",{style:{fontSize:"28px",margin:0,color:"#6C9DFF",fontWeight:"bold"},children:"HugsyAlert"})})}),ve=()=>a("section",{class:"hero",style:{backgroundColor:"#E6F0FF",minHeight:"calc(40vh - 70px)",display:"flex",alignItems:"center"},children:a("div",{class:"container",children:[a("h1",{style:{fontSize:"44px",color:"#2C5282",marginBottom:"20px",lineHeight:"1.2"},children:"Peace of Mind for Pet Owners Who Live Alone."}),a("p",{style:{fontSize:"20px",color:"#3B66A3",marginBottom:"20px",maxWidth:"700px",margin:"0 auto"},children:"For the 18 million pet owners living alone, HugsyAlert is the smart, simple way to ensure your pet is always cared for, no matter what life throws your way."})]})}),be=()=>a("section",{id:"learn-more",class:"section-highlight",children:a("div",{class:"container text-center",children:[a("h2",{style:{fontSize:"36px"},children:'The Core Anxiety: "What happens to my pet if something happens to me?"'}),a("p",{style:{fontSize:"18px",maxWidth:"800px",margin:"0 auto 20px auto"},children:"For single pet owners, this is the question that keeps us up at night. HugsyAlert was created from this very real fear for a real pet, Hugsy."}),a("p",{style:{fontSize:"18px",maxWidth:"800px",margin:"0 auto"},children:"Our mission is to provide an intelligent, automated safety net that ensures your pet is cared for in any emergency, giving you true peace of mind."})]})}),Se=()=>a("section",{class:"section",children:a("div",{class:"container",children:[a("h2",{class:"text-center",style:{fontSize:"36px",marginBottom:"50px"},children:"Simple Steps to Peace of Mind"}),a("div",{class:"steps-grid",children:[a("div",{class:"step-card",children:[a("div",{style:{fontSize:"40px",color:"#6C9DFF",marginBottom:"15px"},children:"👤"}),a("h3",{style:{fontSize:"22px"},children:"1. Create Your Account"}),a("p",{style:{color:"#6B7280"},children:"Securely sign up in just a few moments."})]}),a("div",{class:"step-card",children:[a("div",{style:{fontSize:"40px",color:"#6C9DFF",marginBottom:"15px"},children:"📄"}),a("h3",{style:{fontSize:"22px"},children:"2. Upload a Document"}),a("p",{style:{color:"#6B7280"},children:"Let our AI build your pet's profile instantly from a vet bill or photo."})]}),a("div",{class:"step-card",children:[a("div",{style:{fontSize:"40px",color:"#6C9DFF",marginBottom:"15px"},children:"🤝"}),a("h3",{style:{fontSize:"22px"},children:"3. Add Your Helpers"}),a("p",{style:{color:"#6B7280"},children:"List the trusted contacts you want notified in an emergency."})]}),a("div",{class:"step-card",children:[a("div",{style:{fontSize:"40px",color:"#6C9DFF",marginBottom:"15px"},children:"🛡️"}),a("h3",{style:{fontSize:"22px"},children:"4. Activate Safety Net"}),a("p",{style:{color:"#6B7280"},children:"Set your check-in schedule. You're now protected by HugsyAlert."})]})]})]})}),we=()=>a("section",{class:"section-highlight",children:a("div",{class:"container text-center",children:[a("h2",{style:{fontSize:"36px"},children:"Our Vision: The Indispensable AI Safety Partner"}),a("p",{style:{fontSize:"18px",maxWidth:"800px",margin:"0 auto 20px auto"},children:"We aim to be the indispensable AI-powered safety partner for pet owners. Starting with critical emergency alerts, we're evolving into a proactive, intelligent platform that coordinates care, provides peace of mind, and becomes a foundational layer of the pet care ecosystem."})]})}),Ae=()=>a("section",{class:"section",children:a("div",{class:"container text-center",children:[a("h2",{style:{fontSize:"32px",color:"#1a1a1a"},children:"An Intelligent Partner, Not Just Another App."}),a("p",{style:{fontSize:"18px",maxWidth:"700px",margin:"0 auto 40px auto"},children:"HugsyAlert uses cutting-edge AI to make pet safety effortless and truly intelligent."}),a("div",{class:"ai-features-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"30px",justifyContent:"center"},children:[a("div",{class:"ai-feature-card",style:{backgroundColor:"#FFF2E6",padding:"30px",borderRadius:"12px",border:"1px solid #FFDAB9",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.05)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[a("h3",{style:{fontSize:"22px",color:"#D95F20"},children:"✨ Magic Dossier Onboarding"}),a("p",{style:{color:"#A0522D",fontSize:"16px"},children:"Hate filling out long forms? We do too. Skip the tedious setup with Magic Dossier. Just upload a photo of your vet bill, medication, or pet food bag. Our AI will instantly read the document and build a comprehensive profile for your pet. It's the fastest, smartest way to get protected."})]}),a("div",{class:"ai-feature-card",style:{backgroundColor:"#E6F0FF",padding:"30px",borderRadius:"12px",border:"1px solid #BEE3F8",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.05)",transition:"transform 0.2s ease, box-shadow 0.2s ease"},children:[a("h3",{style:{fontSize:"22px",color:"#2C5282"},children:"⌚ Smartdevice Integration"}),a("p",{style:{color:"#3B66A3",fontSize:"16px"},children:"Effortless Safety, Right on Your Wrist. Check in with a single tap on your watch face, or let passive fall detection automatically alert your helpers when you can't. It's a layer of safety that's always with you."})]})]})]})}),ke=()=>a("footer",{style:{backgroundColor:"#3A3A3A",color:"#C0C0C0",padding:"40px 0",textAlign:"center"},children:a("div",{class:"container",children:[a("p",{children:"© 2025 HugsyAlert. All rights reserved."}),a("p",{style:{fontSize:"14px",marginTop:"5px"},children:"Providing peace of mind for pet owners everywhere."}),a("pre",{style:{fontSize:"10px",color:"#A0A0A0",marginTop:"20px",padding:"10px",borderTop:"1px solid #5D5D5D",whiteSpace:"pre-wrap",wordBreak:"break-word",textAlign:"left",maxWidth:"800px",margin:"20px auto 0 auto"},children:`Copyright (c) 2025 Abhirup Choudhury

All Rights Reserved.

Permission to use, copy, modify, and distribute this software and its
documentation for any purpose and without fee is hereby granted,
provided that the above copyright notice appear in all copies and that
both that copyright notice and this permission notice appear in
supporting documentation, and that the name of Abhirup Choudhury not be used
in advertising or publicity pertaining to distribution of the software
without specific, written prior permission.

Abhirup Choudhury DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE, INCLUDING
ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, IN NO EVENT SHALL
Abhirup Choudhury BE LIABLE FOR ANY SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES OR
ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS,
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION,
ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS
SOFTWARE.`})]})}),Fe=()=>a("div",{children:[a(ye,{}),a(xe,{}),a("main",{children:[a(ve,{}),a(be,{}),a(Se,{}),a(Ae,{}),a(we,{})]}),a(ke,{})]}),X=document.getElementById("app");X&&ge(a(Fe,{}),X);
