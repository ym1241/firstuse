import requests
from bs4 import BeautifulSoup #bs4f를 저걸로 쓰기로
import time
import json
from datetime import datetime

def save_file(data):
    file_name = "Nate_Time_List.txt"
    with open(f'{file_name}','wt', encoding = 'utf-8') as f: #f으로 받겠다
        f.write('\n'.join(data))
    return

now = datetime.now().strftime('%Y%m%d%H%M') #시간을 일어내는 부분

print("{} 현재 Nate 실시간 검색 순위 10".format(now)) # {}은 지금시간

url = 'https://www.nate.com/js/data/jsonLiveKeywordDataV1.js?=' + now
r = requests.get(url).content
keyword_list = json.loads(r.decode('euc-kr'))

result=[]
for k in keyword_list: #keyword_list는 리스트 :10
    result.append(k[1])

save_file(result) #텍스트파일에 검색순위 저장


FileName = "Nate_Time_List.txt"

with open(f'{FileName}', 'r', encoding = 'utf-8') as fd:

    while True:

        Member_Data = fd.readline()
        if not Member_Data:
            break
        print(Member_Data)
    

