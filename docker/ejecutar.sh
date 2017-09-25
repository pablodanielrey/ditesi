#!/bin/bash
sudo docker run -ti -d --name ditesi -v $(pwd)/src:/src -p 5030:5000 -p 5031:5001 -p 5032:5002 -p 5033:5003 --env-file $HOME/gitlab/fce/produccion/ditesi ditesi
sudo docker exec -t ditesi bash instalar.sh
sudo docker restart ditesi
