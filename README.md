# jay-website-ReactJS
ReactJS code for jaylohokare.com

Install NodeJS (Node+npm)

To initialize the project
```
npm install react-scripts --save
```

Dependencies imports:
```
npm install axios
npm install react-calendar-heatmap
npm install materialize-css
```

To run the website server:
```
npm start
```

Build the app:
```
npm run build
```

The contact form is hosted on AWS using API gateway, AWS Lambda, AWS SES

Hsot the website using AWS S3, AWS 53, AWS CloudFront 
```
1. Create new S3 bucket with domain name as bucket name (jaylohokare.com). Set Static website hosting True
2. Create another bucket with www. prefix (www.jaylohokare.com). Set forwarding to the earlier bucket.
```
Set permissions to make both these buckets publicly readable. S3 will now have an end point that can act as website URL.

To point your domain to this S3 bucket:
```
1. Create a certificate for non-www domain name using AWS Certificate service
2. Setup Route AWS 53
3. Setup AWS CloudFront 
```

Alternatively, use <b>Netlify service</b> (Free hosting based on Github). The services is easy to use, takes code from github and automatically deploys it to the domain with free SSL (HTTPS)

jaylohokare.com API is available at https://e517351b.us-south.apigw.appdomain.cloud/jaylohokare/
Currently, I have deployed the API using IBM cloud functions
