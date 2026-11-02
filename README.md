# Datheon_Python_Internship

Portfolio site for Katamba James — Full-Stack Developer.

## Run locally

```bash
node -e "const http=require('http'),fs=require('fs'),path=require('path');const root=process.cwd();http.createServer((req,res)=>{const f=path.join(root,req.url==='/'?'index.html':req.url.split('?')[0]);fs.readFile(f,(e,d)=>{if(e){res.statusCode=404;res.end('not found');return;}res.end(d);});}).listen(8080,()=>console.log('http://localhost:8080'));"
```

Then open http://localhost:8080 in Chrome.
