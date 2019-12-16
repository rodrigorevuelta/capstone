# Summary
This project stores the code to do the deployment of an architecture to use an algorithm to determine the value of an stock market. I use a cache system to store the predictions that the system does.

# services
Four main parts (microservices):
- storageService: developed with springBoot and h2 embedded, storage the prediction of the values
- machineLearningService: developed with scikit and pandas in python
- apiService: redirect the calls to the other service
- app: an interface in react to call the rest of the system and visualize results.

Communications between services use rest.

# references
##devops
https://docs.aws.amazon.com/apigateway/latest/developerguide/canary-release.html
https://aws.amazon.com/about-aws/whats-new/2019/02/deploy-a-kubernetes-cluster-using-amazon-eks-with-new-quick-start/
https://eksworkshop.com/servicemesh_with_appmesh/port_to_app_mesh/canary_testing/
https://github.com/aws-samples/eks-canary-deployment-stepfunction
https://thenewstack.io/perform-canary-deployments-with-aws-app-mesh-on-amazon-eks/
##app
https://reactjs.org/
https://medium.com/dailyjs/how-to-create-a-navigation-bar-with-react-router-styled-components-and-infrastructure-components-e24bee8d31bb
https://material-ui.com/components/app-bar/
https://github.com/ReactTraining/react-router
##api
https://grpc.io/docs/tutorials/basic/python/
##ml
https://medium.com/@randerson112358/predict-stock-prices-using-python-machine-learning-53aa024da20a
https://towardsdatascience.com/predicting-stock-prices-with-python-ec1d0c9bece1
https://finance.yahoo.com/
https://en.wikipedia.org/wiki/Data_hub
https://blog.es.logicalis.com/analytics/data-hub-las-nuevos-sistemas-de-gestion-de-datos
https://datahub.io/core/gold-prices#resource-gold-prices_zip
https://datahub.io/search?q=gold
https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-es-datahub-data-lake-y-datawarehouse
https://www.investopedia.com/articles/active-trading/052014/how-use-moving-average-buy-stocks.asp
https://towardsdatascience.com/in-12-minutes-stocks-analysis-with-pandas-and-scikit-learn-a8d8a7b50ee7
https://scikit-learn.org/stable/auto_examples/applications/plot_stock_market.html
https://scikit-learn.org/stable/user_guide.html
##storage
spring-boot
spring-data

#toImprove
-use more ml algorithms
-get data from more services than yahoo
-use another distributed storage service
-oaut2 and securized services