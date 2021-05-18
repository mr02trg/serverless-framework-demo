# Serverless Framework demo

Perform `sls login` to authenticate your serverless app

# Test locally
`sls invoke local -f <function-name> -d <input-event>` \
sls invoke local -f hello -d "{'key': 'value'}"

# Deploy
Deploying all resources \
`sls deploy`
Deploying specific lambda function \
`sls deploy --stage [dev|prod|staging] -f <lambda-function-name>`

# Remove
`sls remove`

# Logging
Diplay lambda function logs in the last 5 min \
`sls logs -f <function-name> --stage [dev|prod|staging] --startTime 5m` \
`sls logs -f <function-name> --stage [dev|prod|staging] --tail`

# Plugins
Emulate lambda and API GW on your local machine \
`npm i --save-dev serverless-offline`
`sls offline`
