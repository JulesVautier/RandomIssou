import json
import re
from pprint import pprint
from time import sleep

import requests

regex = "http.*?\.(?:png|jpg|jpeg|gif))"
op_regex = "http:\/\/image.noelshack.com\/fichiers\/(.*?\.(?:png|jpg|jpeg|gif))"


def main():
    with open('results.json', 'r') as fp:
        results = fp.read()
        stickers = re.findall(op_regex, results)
        stickers = list(set(stickers))
        print('before check', len(stickers))
        check_results(stickers)
        print('after check', len(stickers))
        with open('parsed_results.json', 'w+') as parsed_fp:
            parsed_fp.write(json.dumps(stickers))

def check_results(results):
    bad_results = []
    for result in results:
        res = requests.get("https://image.noelshack.com/fichiers/" + result)
        if res.status_code != 200:
            bad_results.append(result)
        print(res.status_code, result)
        sleep(0.1)
    for bad_result in bad_results:
        results.remove(bad_result)


if __name__ == "__main__":
    # execute only if run as a script
    main()
    # res = ['2017/47/6/1511605811-isse.png', '2018/44/1/1540807746-tamamo-smirk.png']
    # check_results(res)
    # print(res)
