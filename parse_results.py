import json
import re
from pprint import pprint

regex = "http.*?\.(?:png|jpg|jpeg|gif))"
op_regex = "http:\/\/image.noelshack.com\/fichiers\/(.*?\.(?:png|jpg|jpeg|gif))"


def main():
    with open('results.json', 'r') as fp:
        results = fp.read()
        stickers = re.findall(op_regex, results)
        stickers = list(set(stickers))
        print(len(stickers))
        with open('parsed_results.json', 'w+') as parsed_fp:
            parsed_fp.write(json.dumps(stickers))


if __name__ == "__main__":
    # execute only if run as a script
    main()
