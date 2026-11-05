/* Turns the activity list back into activities.js text. Used by the teacher editor. */
(function(root){
const HEAD=`/* =====================================================================
   KHÁM PHÁ ĐỘNG VẬT — activity content
   Edit with the teacher editor (admin/) or by hand. See EDITING.md.
   ===================================================================== */
const ST=[];
const STAGES=ST;
`;
const ID=/^[A-Za-z_$][\w$]*$/;
const keyOf=k=>ID.test(k)?k:JSON.stringify(k);
function fn(k,f){const s=f.toString();if(s.startsWith(k+'(')||s.startsWith('async '+k+'('))return s;return keyOf(k)+':'+s;}
function lit(v){
  if(typeof v==='function')return v.toString();
  if(Array.isArray(v))return '['+v.map(lit).join(',')+']';
  if(v&&typeof v==='object')return '{'+Object.keys(v).filter(k=>v[k]!==undefined).map(k=>typeof v[k]==='function'?fn(k,v[k]):keyOf(k)+':'+lit(v[k])).join(',')+'}';
  return JSON.stringify(v);
}
function stage(s){
  const top=Object.keys(s).filter(k=>k!=='tasks'&&s[k]!==undefined).map(k=>' '+keyOf(k)+':'+lit(s[k]));
  const tasks=(s.tasks||[]).map(t=>'  '+lit(t));
  return 'ST.push({\n'+top.join(',\n')+',\n tasks:[\n'+tasks.join(',\n')+'\n ]});\n';
}
function serialize(ST){return HEAD+'\n'+ST.map(stage).join('\n');}
function parse(src){const ST=new Function(src+'\n;return ST;')();if(!Array.isArray(ST))throw new Error('No activities found');return ST;}
root.ActSer={serialize,parse};
if(typeof module!=='undefined')module.exports=root.ActSer;
})(typeof window!=='undefined'?window:globalThis);
