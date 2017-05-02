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
        data = urllib.request.urlopen(url).read()
        print(url)
        data = json.loads(data)
        return data
