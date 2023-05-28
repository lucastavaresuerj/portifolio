npm run build

cd dist/new-portifolio

aws cloudfront create-invalidation --distribution-id EL7H1233HUTMI --paths "/*" | cat

aws s3 sync . s3://portifolio-main-stack-frontstorag-s3bucketwebsite-1indg4swphr2