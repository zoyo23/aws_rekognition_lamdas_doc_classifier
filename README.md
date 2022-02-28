## Install Serverless lib
sudo npm install -g serverless


## Create Projects
mkdir aws_doc_classfier_extract_lambda
serverless create --template aws-nodejs --path docs_layer
serverless create --template aws-nodejs --path docs_classifier
serverless create --template aws-nodejs --path docs_text_extract