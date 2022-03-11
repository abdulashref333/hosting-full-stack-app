# Hosting Full Stack Project

The Deployment failed because the AWS services stopped...
Deploy the project to aws [RDS for database, EB for server, S3 for hosting front-end] using circleci to automate the process.

### Content

1. Get Start
2. How it works

   - Infrastructure description
   - App dependencies
   - Pipeline process

3. Resources
4. Dependencies
5. Author

## Get Started

1. Click on this [link](http://udagram-frontend22.s3-website-us-east-1.amazonaws.com/) for running the project.
2. Sign up if you have an account or Register.
3. Create a post and have fun.
4. To connect to the api click [here](http://udgram-dev.eba-pmfwfrkh.us-east-1.elasticbeanstalk.com/api/v0)
5. [GitHub Repo](https://github.com/MarwanAhmed25/Deploy)

## How it works

> The s3 buket connect to the EB Application api server to fetch data and api server connect to RDS database to fetch the data fron it.

![digram](./images/digram.png)

### Infrastructure description

```
We use the aws services to host our project S3 that uses to host front end files and build for customers,
use RDS for creating the postgres database to store data and retrive it to the api and creating 2 tables feedit and users,
for web server we use EB for host our back end server all this services in us-east-1 AZ.

```

### App dependencies

```
we use node and ionic for front and back end for creating server and ui for users.
```

### Pipeline process

```
using Circleci for CI/CD that automate our deployment by connecting with github repo , every commit done the pipeline automaticlly fire and test our code and build to sure that the code is safty 100% after that deploy the code to be provide to customers.

* Acess user
Access id: AKIA3ZAEOW36KT2MMKGK
SECRET Key : noI8WVYbmubSH3a9cJkqJ+IZ1GzJc4tYL/6ffjI
Region : us-east-1

```

## Resources

- Tutors
- Udacity lessons
- Circleci Documentation
- Anglar Documentation
- Node Documentation
- Google chrome

## Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

## Author

> Abdulrahman Ashraf
