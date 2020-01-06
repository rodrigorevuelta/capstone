# summary
This project is the iac (infrastructure as code) to deploy services in a kubernetes cluster on aws. It uses eks to manage the cluster and the image infrastructure shows the deployment (01-infrastructure.png). It includes a bastion host to manage the cluster. The services are deployed in ecr. As an example, a service of machine learning has been developed in github.com/rodrigorevuelta/capstone-ml.
# files
-deploy-iam.yml deploy the iam role
-deploy-vpc.yml deploy the vpc
-deploy-bastion.yml deploy the bastion node
-deploy-eks-cluster.yml deploy the cluster
#deploy infrastructure
$aws configure
$aws cloudformation create-stack --stack-name Iam-Stack --template-body "file://./deploy-iam.yml" --capabilities CAPABILITY_NAMED_IAM
$aws cloudformation create-stack --stack-name Vpc-Stack --template-body "file://./deploy-vpc.yml"
$aws iam add-user-to-group --user-name rodrigorev --group-name Iam-Stack-bastion-group-BastionConnectGroup
$aws iam add-user-to-group --user-name rodrigorev --group-name Iam-Stack-eks-group-EksAccessGroup
$aws cloudformation create-stack --stack-name Vpc-Bastion-Stack --template-body "file://./deploy-bastion.yml"
$aws cloudformation create-stack --stack-name Vpc-Eks1-Stack --template-body "file://./deploy-cluster.yml"
$aws eks update-kubeconfig --name Cluster-Test-eks
$ssh-keygen -t rsa -f bastion_key
$aws ec2-instance-connect send-ssh-public-key --instance-id i-0b72adb019cba567a --availability-zone eu-west-3a --instance-os-user rodrigorev --ssh-public-key file://aws.pub
#continuous deployment
the capstone-ml repository use circle-ci to deploy the service in elastic container registry. once the service has been deployed to master the plan in circle ci do the next steps:
-checkout
-restore cache
-install
-save cache
-lint
-deploy to ecr
#rolling deployment (canary release)
in order to use the canary release i use kubernetes to deploy next versions of the service. client apps use different endpoints to use different release versions. the files to do the canary release are

# references
https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-eks-cluster.html
https://github.com/aws-quickstart/quickstart-amazon-eks
https://medium.com/@susanto.bn/aws-kubernetes-eks-part-1-create-using-cloudformation-with-hardened-bastion-4e459250ffd0
https://hackernoon.com/canary-release-with-kubernetes-1b732f2832ac

#toImprove
-use more ml algorithms
-get data from more services than yahoo
-use another distributed storage service
-oaut2 and securized services