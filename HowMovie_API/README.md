## 🖥️ Collabrator

<table>
  <tr>
    <td align="center"><a href="https://github.com/9u4a"><img src="https://avatars.githubusercontent.com/u/81855010?v=4" width="100px;" alt=""/><br /><sub><b>9u4a</b></sub></a><br />😿API Server</td>
  </tr>
</table>

## Back-end stack

- Django (Python 3.9)
- Postgresql

## Folder path

```py
./HowMovie_API
    |- /HowMovie_API          # 프로젝트 루트 디렉터리
    |- /API                   # API 서버
        |- /GetData           # API Data 
        |- /Views             # API View 모듈화
```

## Django

### Django Setting

|    Env Setting    |                                                  value                                                   |
| :---------------: | :------------------------------------------------------------------------------------------------------: |
|  DATABASE_ENGINE  |                                      django.db.backends.postgresql                                       |
|   DATABASE_NAME   |                                                 hmdata                                                  |
|   DATABASE_USER   |                                              postgres(root)                                              |
| DATABASE_PASSWORD |                                                   1234                                                   |
|     TIME_ZONE     |                                                Asia/Seoul                                                |
|      Library      | [Require-Libraries](https://github.com/9u4a/2022_Capstone-2_How_Movie/blob/feature/api/HowMovie_API/requirements.txt) |

## API Information (Git Document)

---
<details>
<summary>메인화면(/main)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /main  |    -     |
|   Method    |  GET   |    -     |

### Response 
<details><summary>Example</summary>

```yaml
{
    "result": [
        {
            "popular": [
                {
                    "id": 760161,
                    "title": "오펀: 천사의 탄생",
                    "poster_path": "/vKIhsEVEtLTwTkmLSDNi230Zr3Q.jpg",
                    "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
                    "release_date": "2022-07-27"
                },
                {
                    "id": 642885,
                    "title": "호커스 포커스 2",
                    "poster_path": "/xpDdvIaTHn38F17pPseL1MQI05B.jpg",
                    "backdrop_path": "/iS9U3VHpPEjTWnwmW56CrBlpgLj.jpg",
                    "release_date": "2022-09-27"
                }
            ]
        },
        {
            "toprated": [
                {
                    "id": 238,
                    "title": "대부",
                    "poster_path": "/cOwVs8eYA4G9ZQs7hIRSoiZr46Q.jpg",
                    "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                    "release_date": "1972-03-14"
                },
                {
                    "id": 278,
                    "title": "쇼생크 탈출",
                    "poster_path": "/oAt6OtpwYCdJI76AVtVKW1eorYx.jpg",
                    "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
                    "release_date": "1994-09-23"
                }
            ]
        },
        {
            "nowplaying": [
                {
                    "id": 760161,
                    "title": "오펀: 천사의 탄생",
                    "poster_path": "/vKIhsEVEtLTwTkmLSDNi230Zr3Q.jpg",
                    "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
                    "release_date": "2022-07-27"
                },
                {
                    "id": 985939,
                    "title": "폴: 600미터",
                    "poster_path": "/1OdA3gOq8N5KWwXsZhYVHbeyx8l.jpg",
                    "backdrop_path": "/hT3OqvzMqCQuJsUjZnQwA5NuxgK.jpg",
                    "release_date": "2022-08-11"
                }
            ]
        },
        {
            "upcoming": [
                {
                    "id": 985939,
                    "title": "폴: 600미터",
                    "poster_path": "/1OdA3gOq8N5KWwXsZhYVHbeyx8l.jpg",
                    "backdrop_path": "/hT3OqvzMqCQuJsUjZnQwA5NuxgK.jpg",
                    "release_date": "2022-08-11"
                },
                {
                    "id": 717728,
                    "title": "Jeepers Creepers: Reborn",
                    "poster_path": "/aGBuiirBIQ7o64FmJxO53eYDuro.jpg",
                    "backdrop_path": "/tIX6j3NzadlwGcJ52nuWdmtOQkg.jpg",
                    "release_date": "2022-09-15"
                }
            ]
        }
    ]
}
```
</details>
</details>

<details>
<summary>영화 세부화면 (/moviedetail)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /moviedetail  |    -     |
|   Method    |  GET   |    -     |
|   movie_id    |  integer   |    ✔️     |

### Response 
<details><summary>Example</summary>


### Response example
```yaml
{
   "result": [
        {
            "detail": [
                {
                    "genres": [
                        {
                            "id": 12,
                            "name": "모험"
                        },
                        {
                            "id": 28,
                            "name": "액션"
                        },
                        {
                            "id": 878,
                            "name": "SF"
                        }
                    ],
                    "title": "어벤져스: 인피니티 워",
                    "overview": "타노스는 6개의 인피니티 스톤을 획득해 신으로 군림하려 한다. 그것은 곧 인류의 절반을 학살해 우주의 균형을 맞추겠다는 뜻. 타노스는 닥터 스트레인지가 소유한 타임 스톤, 비전의 이마에 박혀 있는 마인드 스톤을 차지하기 위해 지구를 침략한다. 아이언맨과 스파이더맨은 가디언즈 오브 갤럭시의 멤버들과 타노스를 상대한다. 지구에선 캡틴 아메리카, 완다, 블랙 위도우, 블랙 팬서 등이 비전을 지키기 위해 뭉친다.",
                    "poster_path": "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
                    "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
                    "release_date": "2018-04-25",
                    "vote_average": 8.266,
                    "vote_count": 25521,
                    "status": "Released",
                    "runtime": 149,
                    "tagline": "영화의 역사를 뒤바꿀 마블의 클라이맥스!",
                    "video": [
                        {
                            "video": "tgManNfbva0"
                        },
                        {
                            "video": "HEZknwJoW9Q"
                        },
                        {
                            "video": "F0kvfk1ghjA"
                        },
                        {
                            "video": "Y9FrN6chs3U"
                        },
                        {
                            "video": "xUDhdCsLkjU"
                        }
                    ]
                }
            ]
        },
        {
            "credit": [
                {
                    "id": 3223,
                    "name": "Robert Downey Jr.",
                    "gender": 2,
                    "character": "Tony Stark / Iron Man",
                    "profile_path": "/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
                    "popularity": 46.253
                },
                {
                    "id": 74568,
                    "name": "Chris Hemsworth",
                    "gender": 2,
                    "character": "Thor Odinson",
                    "profile_path": "/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
                    "popularity": 107.186
                },
                {
                    "id": 103,
                    "name": "Mark Ruffalo",
                    "gender": 2,
                    "character": "Bruce Banner / Hulk",
                    "profile_path": "/6LL1n6NvLpiEfu3trtsUI9VJcbV.jpg",
                    "popularity": 32.825
                },
                {
                    "id": 16828,
                    "name": "Chris Evans",
                    "gender": 2,
                    "character": "Steve Rogers / Captain America",
                    "profile_path": "/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
                    "popularity": 67.683
                },
            ]
        }
    ]
}    
```
</details>
</details>

<details>

<summary>영화검색(/search)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /search  |    -     |
|   Method    |  GET   |    -     |
|   query    |  string   |    ✔️     |
|   page    |  integer   |    -     |

### Response 
<details><summary>Example</summary>

```yaml
{
    "result": {
        "search": [
            {
                "id": 1003598,
                "title": "어벤져스: 시크릿 워즈",
                "poster_path": "/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
                "backdrop_path": "/jqFC2WjYF07hx2X7cs0XmY9jBX6.jpg",
                "release_date": "2026-05-01"
            },
            {
                "id": 1003596,
                "title": "어벤져스: 캉 다이너스티",
                "poster_path": "/utZTb3VBrH0zR77BcISU67pHuAx.jpg",
                "backdrop_path": "/uR952NrgispGuyqIdUbkR24vE0u.jpg",
                "release_date": "2025-04-30"
            },
            {
                "id": 521720,
                "title": "어벤져스 그림: 시간 전쟁",
                "poster_path": "/4ARjDBmYpOocL8kVTyWWSSzx5Df.jpg",
                "backdrop_path": "/sORO7a1cSghfWE5GD4cSJ0qTN8O.jpg",
                "release_date": "2018-05-01"
            },
        ]
    }
}
```

</details>
</details>