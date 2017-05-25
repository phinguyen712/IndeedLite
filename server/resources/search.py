from flask_restful import Resource, reqparse
import urllib.request
import urllib
import json
import flask


class Search(Resource):
    @staticmethod
    def post():
        params = flask.request.get_json()
        queries = ''

        for key, value in params.items():
            queries = queries + '&' + key + '=' + urllib.parse.quote(value)

        indeed = 'http://api.indeed.com/ads/apisearch?publisher=6237323212598982&v=2&format=json'

        url = indeed + queries + '&limit=25'
        # search up more than 25 jobs at a time(indeed's limit) this will give us a massive list to play with
        x = 0
        job_list = {'found': 0, 'results': []}

        while x < 20:
            start = str((x*25) - 1)
            data = urllib.request.urlopen(url + '&start=' + start).read()
            data = json.loads(data)
            job_list['results'].extend(data['results'])

            # ends loop as soon as all search results have been found
            print(x)
            if data['end'] == data['totalResults']:
                x = 20
            else:
                x += 1

        job_list['found'] = len(job_list['results'])

        if job_list['found'] == 0:
            return {'message': 'no jobs found'}, 404
        else:
            return job_list, 201
