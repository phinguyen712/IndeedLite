from flask_restful import Resource, reqparse
import urllib.request
import json


class Search(Resource):

    params = ['q']
    parser = reqparse.RequestParser()
    for i in range(len(params)):
        parser.add_argument(
            params[i],
            type=str,
            required=True,
            help="This field cannot be blank."
        )

    @staticmethod
    def post():
        data = Search.parser.parse_args()
        indeed = 'http://api.indeed.com/ads/apisearch?publisher=6237323212598982&v=2&format=json'
        print(data)
        queries = ''

        for params in data:
            queries = queries + '&' + params + '=' + data[params]

        url = indeed + queries + '&limit=600'
        # search up more than 25 jobs at a time(indeed's limit) this will give us a massive list to filter
        x = 1
        job_list = {'found': 0, 'results': []}

        while x < 10:
            page = str(x*25)
            data = urllib.request.urlopen(url + '&=' + page).read()
            data = json.loads(data)
            job_list['results'].extend(data['results'])
            x += 1
            print (x)
        job_list['found'] = len(job_list['results'])
        return job_list
