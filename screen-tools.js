'use strict';
// Projective image mapping shared by the screen editor preview and saved copy.
globalThis.KomaScreenTools=(()=>{
 const defaults=()=>[[.25,.25],[.75,.25],[.75,.75],[.25,.75]];
 function valid(points){if(!Array.isArray(points)||points.length!==4||points.some(p=>!Array.isArray(p)||p.length!==2||p.some(v=>!Number.isFinite(v)||v<0||v>1)))return false;return points.every((p,i)=>{const a=points[(i+1)%4],b=points[(i+2)%4];return (a[0]-p[0])*(b[1]-a[1])-(a[1]-p[1])*(b[0]-a[0])>.00001})}
 function matrix(q){if(!valid(q))throw Error('Keep four corners in order around the screen.');const [[x0,y0],[x1,y1],[x2,y2],[x3,y3]]=q,dx1=x1-x2,dx2=x3-x2,dx3=x0-x1+x2-x3,dy1=y1-y2,dy2=y3-y2,dy3=y0-y1+y2-y3,den=dx1*dy2-dx2*dy1,g=(dx3*dy2-dx2*dy3)/den,h=(dx1*dy3-dx3*dy1)/den;return [x1-x0+g*x1,x3-x0+h*x3,x0,y1-y0+g*y1,y3-y0+h*y3,y0,g,h,1]}
 function inverse(m){const [a,b,c,d,e,f,g,h,i]=m,A=e*i-f*h,B=c*h-b*i,C=b*f-c*e,D=f*g-d*i,E=a*i-c*g,F=c*d-a*f,G=d*h-e*g,H=b*g-a*h,I=a*e-b*d,det=a*A+b*D+c*G;if(Math.abs(det)<1e-12)throw Error('Make the screen area larger.');return [A,B,C,D,E,F,G,H,I].map(v=>v/det)}
 function point(m,x,y){const w=m[6]*x+m[7]*y+m[8];return [(m[0]*x+m[1]*y+m[2])/w,(m[3]*x+m[4]*y+m[5])/w]}
 function warp(source,width,height,points,opacity=100){
  if(!Number.isInteger(width)||width<1||width>2000||!Number.isInteger(height)||height<1||height>2000||!source||!Number.isInteger(source.width)||!Number.isInteger(source.height)||source.width<1||source.height<1||source.data.length!==source.width*source.height*4||!Number.isFinite(opacity)||opacity<0||opacity>100)throw Error('Invalid screen picture dimensions.');
  const inv=inverse(matrix(points)),x=Math.max(0,Math.floor(Math.min(...points.map(p=>p[0]))*width)),y=Math.max(0,Math.floor(Math.min(...points.map(p=>p[1]))*height)),w=Math.min(width-x,Math.ceil(Math.max(...points.map(p=>p[0]))*width)-x),h=Math.min(height-y,Math.ceil(Math.max(...points.map(p=>p[1]))*height)-y),data=new Uint8ClampedArray(w*h*4),pixels=source.data,sw=source.width,sh=source.height;
  for(let row=0;row<h;row++)for(let col=0;col<w;col++){
   const [u,v]=point(inv,(col+x+.5)/width,(row+y+.5)/height);if(u<0||u>1||v<0||v>1)continue;
   const sx=Math.max(0,Math.min(sw-1,u*sw-.5)),sy=Math.max(0,Math.min(sh-1,v*sh-.5)),ix=Math.floor(sx),iy=Math.floor(sy),fx=sx-ix,fy=sy-iy;
   const offsets=[(iy*sw+ix)*4,(iy*sw+Math.min(ix+1,sw-1))*4,(Math.min(iy+1,sh-1)*sw+ix)*4,(Math.min(iy+1,sh-1)*sw+Math.min(ix+1,sw-1))*4],weights=[(1-fx)*(1-fy),fx*(1-fy),(1-fx)*fy,fx*fy];
   let alpha=0,r=0,g=0,b=0;for(let i=0;i<4;i++){const at=offsets[i],weight=weights[i]*pixels[at+3];alpha+=weight;r+=pixels[at]*weight;g+=pixels[at+1]*weight;b+=pixels[at+2]*weight}const out=(row*w+col)*4;if(alpha){data[out]=r/alpha;data[out+1]=g/alpha;data[out+2]=b/alpha;data[out+3]=alpha*opacity/100}
  }
  return {x,y,width:w,height:h,data};
 }
 return {defaults,valid,matrix,inverse,point,warp};
})();
