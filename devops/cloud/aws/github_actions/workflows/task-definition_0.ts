module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "projects-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-projects:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8039",
                    "protocol": "tcp",
                    "hostPort": "8039"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "contractors-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-contractors:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8040",
                    "protocol": "tcp",
                    "hostPort": "8040"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "subcontrators-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-subcontrators:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8041",
                    "protocol": "tcp",
                    "hostPort": "8041"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "attendancerecord-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-attendancerecord:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8042",
                    "protocol": "tcp",
                    "hostPort": "8042"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "accessprofile-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-accessprofile:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8043",
                    "protocol": "tcp",
                    "hostPort": "8043"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "safety-1110",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-cheiconstru-1110-safety:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8044",
                    "protocol": "tcp",
                    "hostPort": "8044"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@cheiconstru.local:27017/cheiconstru_1110?authSource=admin"},{"name":"MONGO_DOMAIN","value":"cheiconstru.local"},{"name":"CAMUNDAPOD_URL","value":"http://cheiconstru.local:8080"},{"name":"SECURITYURL","value":"http://cheiconstru.local:8003"},{"name":"AUTHPROXYURL","value":"http://cheiconstru.local:8001"},{"name":"ADMINURL","value":"http://cheiconstru.local:8004"},{"name":"CAMUNDAURL","value":"http://cheiconstru.local:8002"},{"name":"GCAMURL","value":"http://cheiconstru.local:8007"},{"name":"APIGATEWAY","value":"http://cheiconstru.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "cheiconstru"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/cheiconstru",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "cheiconstru",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "cheiconstru0",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
