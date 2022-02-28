## Install Serverless lib
sudo npm install -g serverless

## Run/debug Local
npm install serverless-offline --save-dev

## Create Projects
mkdir aws_doc_classfier_extract_lambda
serverless create --template aws-nodejs --path docs_layer
serverless create --template aws-nodejs --path docs_classifier
serverless create --template aws-nodejs --path docs_text_extract

## Set Credentials
serverless config credentials \
  --provider aws \
  --key AKIAIOSFODNN7EXAMPLE \
  --secret wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

## Deploy
cd docs_classifier/ && sls deploy --stage staging && cd ../docs_text_extract && sls deploy --stage staging && cd ..