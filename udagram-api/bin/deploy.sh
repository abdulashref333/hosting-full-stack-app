eb init udgram-api --platform node.js --region us-east-1
eb create --sample udgram-dev
eb setenv POSTGRES_USERNAME="postgres" POSTGRES_PASSWORD="postgres" POSTGRES_DB="postgres" PORT_DB="5432" POSTGRES_HOST="database-2.cgmysk7pochc.us-east-1.rds.amazonaws.com" AWS_REGION="us-east-1" AWS_PROFILE="testuser" AWS_BUCKET="udagram-frontend22" URL="localhost:8080" JWT_SECRET="22"
eb deploy
