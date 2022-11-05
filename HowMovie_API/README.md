## 🖥️ Collaborator

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

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |


<details><summary>Example</summary>

```yaml
{
    "success": true,
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
<summary>영화 세부화면 (/moviedetails)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /moviedetails  |    -     |
|   Method    |  GET   |    -     |
|   movie_id    |  integer   |    ✔️     |

### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |

<details><summary>Example</summary>


### Response example
```yaml
{
   "success": true,
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
                    "status": "Released",
                    "runtime": 149,
                    "tagline": "영화의 역사를 뒤바꿀 마블의 클라이맥스!",
                    "video": "tgManNfbva0"
                }
            ]
        },
        {
            "credit": [
               "acting": [
                    {
                        "id": 3223,
                        "name": "Robert Downey Jr.",
                        "gender": 2,
                        "character": "Tony Stark / Iron Man",
                        "profile_path": "/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
                        "popularity": 45.224
                    },
                    {
                        "id": 74568,
                        "name": "Chris Hemsworth",
                        "gender": 2,
                        "character": "Thor Odinson",
                        "profile_path": "/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
                        "popularity": 87.16
                    },
                    {
                        "id": 103,
                        "name": "Mark Ruffalo",
                        "gender": 2,
                        "character": "Bruce Banner / Hulk",
                        "profile_path": "/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg",
                        "popularity": 28.396
                    },
                    {
                        "id": 16828,
                        "name": "Chris Evans",
                        "gender": 2,
                        "character": "Steve Rogers / Captain America",
                        "profile_path": "/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
                        "popularity": 55.279
                    },
                    {
                        "id": 1245,
                        "name": "Scarlett Johansson",
                        "gender": 1,
                        "character": "Natasha Romanoff / Black Widow",
                        "profile_path": "/6bBCPmc55gzP7TR9Th4WbykrYd0.jpg",
                        "popularity": 60.453
                    },
               ]
               "writing": [
                    {
                        "id": 7624,
                        "name": "Stan Lee",
                        "gender": 2,
                        "character": "Schoolbus Driver",
                        "profile_path": "/kKeyWoFtTqOPsbmwylNHmuB3En9.jpg",
                        "popularity": 26.795
                    },
                    {
                        "id": 5552,
                        "name": "Stephen McFeely",
                        "gender": 2,
                        "character": "Secretary Ross' Aide",
                        "profile_path": "/hkn9D5L8TguJUmv8fXy5sHyMEtq.jpg",
                        "popularity": 16.232
                    }
                ]
                "directing": []
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

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |

<details><summary>Example</summary>

```yaml
{
    "success" true,
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


<details>
<summary>영화검색 세부화면 (/searchdetails)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /searchdetails  |    -     |
|   Method    |  GET   |    -     |
|   movie_id    |  integer   |    ✔️     |

### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |

<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true,
    "result": [
        {
            "detail": [
                {
                    "adult": false,
                    "original_language": "en",
                    "original_title": "Avengers: Infinity War",
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
                    "vote_count": 25667,
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
                    ],
                    "recommendations": [
                        {
                            "id": 299534,
                            "title": "어벤져스: 엔드게임",
                            "poster_path": "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg"
                        },
                        {
                            "id": 284054,
                            "title": "블랙 팬서",
                            "poster_path": "/iRkknrX0rRxZHSL79W2Rax0EFsL.jpg"
                        },
                        {
                            "id": 284053,
                            "title": "토르: 라그나로크",
                            "poster_path": "/jwswXltzpGaKZCtz1CiDjXHQYAs.jpg"
                        },
                        {
                            "id": 99861,
                            "title": "어벤져스: 에이지 오브 울트론",
                            "poster_path": "/sTUiA9zY6O4qFlmRC69nG6dngTh.jpg"
                        },
                        {
                            "id": 363088,
                            "title": "앤트맨과 와스프",
                            "poster_path": "/3E6b73EeYqY7PGJNJWjR9AANXVw.jpg"
                        },
                        {
                            "id": 271110,
                            "title": "캡틴 아메리카: 시빌 워",
                            "poster_path": "/vaMRzME3Dt73robEjOtDw4SPJGA.jpg"
                        },
                        {
                            "id": 315635,
                            "title": "스파이더맨: 홈커밍",
                            "poster_path": "/nS8700DvlmXBVX0UqZZwnCcFB1X.jpg"
                        },
                        {
                            "id": 24428,
                            "title": "어벤져스",
                            "poster_path": "/1uHRkB2Q00Y4i7I7KNd0jGi4OmY.jpg"
                        }
                    ]
                }
            ]
        },
        {
            "credit": {
                "acting": [
                    {
                        "id": 3223,
                        "name": "Robert Downey Jr.",
                        "gender": 2,
                        "character": "Tony Stark / Iron Man",
                        "profile_path": "/im9SAqJPZKEbVZGmjXuLI4O7RvM.jpg",
                        "popularity": 45.224
                    },
                    {
                        "id": 74568,
                        "name": "Chris Hemsworth",
                        "gender": 2,
                        "character": "Thor Odinson",
                        "profile_path": "/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",
                        "popularity": 87.16
                    },
                    {
                        "id": 103,
                        "name": "Mark Ruffalo",
                        "gender": 2,
                        "character": "Bruce Banner / Hulk",
                        "profile_path": "/z3dvKqMNDQWk3QLxzumloQVR0pv.jpg",
                        "popularity": 28.396
                    },
                    {
                        "id": 16828,
                        "name": "Chris Evans",
                        "gender": 2,
                        "character": "Steve Rogers / Captain America",
                        "profile_path": "/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",
                        "popularity": 55.279
                    },
                    {
                        "id": 1245,
                        "name": "Scarlett Johansson",
                        "gender": 1,
                        "character": "Natasha Romanoff / Black Widow",
                        "profile_path": "/6bBCPmc55gzP7TR9Th4WbykrYd0.jpg",
                        "popularity": 60.453
                    }

                ],
                "writing": [
                    {
                        "id": 7624,
                        "name": "Stan Lee",
                        "gender": 2,
                        "character": "Schoolbus Driver",
                        "profile_path": "/kKeyWoFtTqOPsbmwylNHmuB3En9.jpg",
                        "popularity": 26.795
                    },
                    {
                        "id": 5552,
                        "name": "Stephen McFeely",
                        "gender": 2,
                        "character": "Secretary Ross' Aide",
                        "profile_path": "/hkn9D5L8TguJUmv8fXy5sHyMEtq.jpg",
                        "popularity": 16.232
                    }
                ],
                "directing": []
            }
        }
    ]
}
```
</details>
</details>

<details>
<summary>장르별 검색 (/genre)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /genre  |    -     |
|   Method    |  GET   |    -     |
|   genre    |  integer   |    ✔️     |
|   page    |  integer   |    -     |

### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |

<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true,
    "result": [
        {
            "genres": [
                {
                    "id": 928123,
                    "title": "장진호지수문교",
                    "poster_path": "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
                    "backdrop_path": "/mMA2YNddowV8MZtxpbn0a7Yilum.jpg",
                    "release_date": "2022-02-01",
                    "adult": false,
                    "original_title": "长津湖之水门桥",
                    "genre_ids": [
                        10752,
                        36,
                        28,
                        18
                    ],
                    "overview": "",
                    "vote_average": 6.4
                },
                {
                    "id": 779782,
                    "title": "선과 악의 학교",
                    "poster_path": "/xr3oGJYQWLunuw7L5myo4VT8DBz.jpg",
                    "backdrop_path": "/tSxbUnrnWlR5dQvUgqMI7sACmFD.jpg",
                    "release_date": "2022-10-19",
                    "adult": false,
                    "original_title": "The School for Good and Evil",
                    "genre_ids": [
                        14,
                        28,
                        18
                    ],
                    "overview": "절친 소피와 아가사는 어느 날 신비한 존재에 의해 마법 학교로 휩쓸려 간다. 이 학교는 미래의 동화 속 영웅과 악당을 키워내는 곳. 운명을 알 길 없는 이곳에서 두 친구의 우정은 계속될 수 있을까.",
                    "vote_average": 7.3
                },
                {
                    "id": 848791,
                    "title": "더 스트레인저",
                    "poster_path": "/ydbm5Ad1nyZq7eywWsw82Wxdsgg.jpg",
                    "backdrop_path": "/u6WzMRpTkGzIlfsPNtDfIBfEy9z.jpg",
                    "release_date": "2022-10-06",
                    "adult": false,
                    "original_title": "The Stranger",
                    "genre_ids": [
                        80,
                        18,
                        9648,
                        53
                    ],
                    "overview": "살인 용의자와 진지하고 우정 어린 관계를 맺는 잠입 경찰. 그렇게 용의자의 신뢰를 얻어 자백을 유도하려 한다.",
                    "vote_average": 6.1
                }
            ]
        }
    ]
}
```
</details>
</details>
<details>
<summary>Comment (/comments)</summary>

<details>
<summary>POST</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /comments  |    -     |
|   Method    |  POST   |    -     |
|   user_name    |  string   |    ✔️     |
|   email    |  string   |    ✔️     |
|   movie_id    |  integer   |    ✔️     |
|   movie_name    |  string   |    ✔️     |
|   comment    |  string   |    ✔️     |
|   vote    |  float   |    ✔️     |

### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   201   | CREATED  |
|   400    |  err: BAD_REQUEST  |


<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true,
    "user_name": "junseong"
}
```
</details>
</details>

<details>
<summary>GET</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /comments  |    -     |
|   Method    |  GET   |    -     |
|   email    |  string   |    -     |
|   movie_id    |  integer   |    -     |


### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   404    |  err: NOT_FOUND   |

<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true,
    "vote_average": 4.2,
    "result": [
        {
            "id": 8,
            "user_name": "junseong",
            "movie_id": "760161",
            "movie_name": "오펀: 천사의 탄생",
            "comment": "재밌네요",
            "vote": 3.4,
            "email": "99junsung@naver.com"
        },
        {
            "id": 9,
            "user_name": "junseong2",
            "movie_id": "760161",
            "movie_name": "오펀: 천사의 탄생",
            "comment": "재밌네요2",
            "vote": 5.0,
            "email": "99junsung2@naver.com"
        }
    ]
}
```
</details>
</details>

<details>
<summary>PUT</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /comments  |    -     |
|   Method    |  PUT   |    -     |
|   id    |  integer   |    ✔️     |
|   user_name    |  string   |    ✔️     |
|   email    |  string   |    ✔️     |
|   movie_id    |  integer   |    ✔️     |
|   movie_name    |  string   |    ✔️     |
|   comment    |  string   |    ✔️     |
|   vote    |  float   |    ✔️     |

### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   201   | CREATED  |
|   400    |  err: BAD_REQUEST  |


<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true,
    "user_name": "junseong"
}
```
</details>
</details>

<details>
<summary>DELETE</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /comments  |    -     |
|   Method    |  DELETE   |    -     |
|   id    |  integer   |    ✔️     |
|   email    |  string   |    ✔️     |
|   movie_id    |  integer   |    ✔️     |


### Response 

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   404    |  err: NOT_FOUND  |


<details><summary>Example</summary>


### Response example
```yaml
{
    "success": true
}
```
</details>
</details>
</details>