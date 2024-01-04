#### 单页module
```bash
npx ng g module pages/certificate -m=pages
npx ng g component pages/certificate -m=pages/certificate
```

#### 多子节点module
```bash
npx ng g module pages/certificates -m=pages --routing=true
npx ng g component pages/certificates/certificate -m=pages/certificates
```