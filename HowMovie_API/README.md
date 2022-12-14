## ð¥ï¸ Collaborator

<table>
  <tr>
    <td align="center"><a href="https://github.com/9u4a"><img src="https://avatars.githubusercontent.com/u/81855010?v=4" width="100px;" alt=""/><br /><sub><b>9u4a</b></sub></a><br />ð¿API Server</td>
  </tr>
</table>

## Back-end stack

- Django (Python 3.9)
- Postgresql

## Folder path

```py
./HowMovie_API
    |- /HowMovie_API          # íë¡ì í¸ ë£¨í¸ ëë í°ë¦¬
    |- /API                   # API ìë²
        |- /GetData           # API Data 
        |- /Views             # API View ëª¨ëí
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
<summary>ë©ì¸íë©´ (/main)</summary>

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
                    "title": "ì¤í: ì²ì¬ì íì",
                    "poster_path": "/vKIhsEVEtLTwTkmLSDNi230Zr3Q.jpg",
                    "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
                    "release_date": "2022-07-27"
                },
                {
                    "id": 642885,
                    "title": "í¸ì»¤ì¤ í¬ì»¤ì¤ 2",
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
                    "title": "ëë¶",
                    "poster_path": "/cOwVs8eYA4G9ZQs7hIRSoiZr46Q.jpg",
                    "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                    "release_date": "1972-03-14"
                },
                {
                    "id": 278,
                    "title": "ì¼ìí¬ íì¶",
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
                    "title": "ì¤í: ì²ì¬ì íì",
                    "poster_path": "/vKIhsEVEtLTwTkmLSDNi230Zr3Q.jpg",
                    "backdrop_path": "/5GA3vV1aWWHTSDO5eno8V5zDo8r.jpg",
                    "release_date": "2022-07-27"
                },
                {
                    "id": 985939,
                    "title": "í´: 600ë¯¸í°",
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
                    "title": "í´: 600ë¯¸í°",
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
<summary>ìí ì¸ë¶íë©´ (/moviedetails)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /moviedetails  |    -     |
|   Method    |  GET   |    -     |
|   movie_id    |  integer   |    âï¸     |

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
                            "name": "ëª¨í"
                        },
                        {
                            "id": 28,
                            "name": "ì¡ì"
                        },
                        {
                            "id": 878,
                            "name": "SF"
                        }
                    ],
                    "title": "ì´ë²¤ì ¸ì¤: ì¸í¼ëí° ì",
                    "overview": "íë¸ì¤ë 6ê°ì ì¸í¼ëí° ì¤í¤ì íëí´ ì ì¼ë¡ êµ°ë¦¼íë ¤ íë¤. ê·¸ê²ì ê³§ ì¸ë¥ì ì ë°ì íì´í´ ì°ì£¼ì ê· íì ë§ì¶ê² ë¤ë ë». íë¸ì¤ë ë¥í° ì¤í¸ë ì¸ì§ê° ìì í íì ì¤í¤, ë¹ì ì ì´ë§ì ë°í ìë ë§ì¸ë ì¤í¤ì ì°¨ì§íê¸° ìí´ ì§êµ¬ë¥¼ ì¹¨ëµíë¤. ìì´ì¸ë§¨ê³¼ ì¤íì´ëë§¨ì ê°ëì¸ì¦ ì¤ë¸ ê°¤ë­ìì ë©¤ë²ë¤ê³¼ íë¸ì¤ë¥¼ ìëíë¤. ì§êµ¬ìì  ìº¡í´ ìë©ë¦¬ì¹´, ìë¤, ë¸ë ìëì°, ë¸ë í¬ì ë±ì´ ë¹ì ì ì§í¤ê¸° ìí´ ë­ì¹ë¤.",
                    "poster_path": "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
                    "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
                    "release_date": "2018-04-25",
                    "vote_average": 8.266,
                    "status": "Released",
                    "runtime": 149,
                    "tagline": "ìíì ì­ì¬ë¥¼ ë¤ë°ê¿ ë§ë¸ì í´ë¼ì´ë§¥ì¤!",
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

<summary>ìíê²ì (/search)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /search  |    -     |
|   Method    |  GET   |    -     |
|   query    |  string   |    âï¸     |
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
                "title": "ì´ë²¤ì ¸ì¤: ìí¬ë¦¿ ìì¦",
                "poster_path": "/8chwENebfUEJzZ7sMUA0nOgiCKk.jpg",
                "backdrop_path": "/jqFC2WjYF07hx2X7cs0XmY9jBX6.jpg",
                "release_date": "2026-05-01"
            },
            {
                "id": 1003596,
                "title": "ì´ë²¤ì ¸ì¤: ìº ë¤ì´ëì¤í°",
                "poster_path": "/utZTb3VBrH0zR77BcISU67pHuAx.jpg",
                "backdrop_path": "/uR952NrgispGuyqIdUbkR24vE0u.jpg",
                "release_date": "2025-04-30"
            },
            {
                "id": 521720,
                "title": "ì´ë²¤ì ¸ì¤ ê·¸ë¦¼: ìê° ì ì",
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
<summary>ìíê²ì ì¸ë¶íë©´ (/searchdetails)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /searchdetails  |    -     |
|   Method    |  GET   |    -     |
|   movie_id    |  integer   |    âï¸     |

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
                            "name": "ëª¨í"
                        },
                        {
                            "id": 28,
                            "name": "ì¡ì"
                        },
                        {
                            "id": 878,
                            "name": "SF"
                        }
                    ],
                    "title": "ì´ë²¤ì ¸ì¤: ì¸í¼ëí° ì",
                    "overview": "íë¸ì¤ë 6ê°ì ì¸í¼ëí° ì¤í¤ì íëí´ ì ì¼ë¡ êµ°ë¦¼íë ¤ íë¤. ê·¸ê²ì ê³§ ì¸ë¥ì ì ë°ì íì´í´ ì°ì£¼ì ê· íì ë§ì¶ê² ë¤ë ë». íë¸ì¤ë ë¥í° ì¤í¸ë ì¸ì§ê° ìì í íì ì¤í¤, ë¹ì ì ì´ë§ì ë°í ìë ë§ì¸ë ì¤í¤ì ì°¨ì§íê¸° ìí´ ì§êµ¬ë¥¼ ì¹¨ëµíë¤. ìì´ì¸ë§¨ê³¼ ì¤íì´ëë§¨ì ê°ëì¸ì¦ ì¤ë¸ ê°¤ë­ìì ë©¤ë²ë¤ê³¼ íë¸ì¤ë¥¼ ìëíë¤. ì§êµ¬ìì  ìº¡í´ ìë©ë¦¬ì¹´, ìë¤, ë¸ë ìëì°, ë¸ë í¬ì ë±ì´ ë¹ì ì ì§í¤ê¸° ìí´ ë­ì¹ë¤.",
                    "poster_path": "/kmP6viwzcEkZeoi1LaVcQemcvZh.jpg",
                    "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
                    "release_date": "2018-04-25",
                    "vote_average": 8.266,
                    "vote_count": 25667,
                    "status": "Released",
                    "runtime": 149,
                    "tagline": "ìíì ì­ì¬ë¥¼ ë¤ë°ê¿ ë§ë¸ì í´ë¼ì´ë§¥ì¤!",
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
                            "title": "ì´ë²¤ì ¸ì¤: ìëê²ì",
                            "poster_path": "/z7ilT5rNN9kDo8JZmgyhM6ej2xv.jpg"
                        },
                        {
                            "id": 284054,
                            "title": "ë¸ë í¬ì",
                            "poster_path": "/iRkknrX0rRxZHSL79W2Rax0EFsL.jpg"
                        },
                        {
                            "id": 284053,
                            "title": "í ë¥´: ë¼ê·¸ëë¡í¬",
                            "poster_path": "/jwswXltzpGaKZCtz1CiDjXHQYAs.jpg"
                        },
                        {
                            "id": 99861,
                            "title": "ì´ë²¤ì ¸ì¤: ìì´ì§ ì¤ë¸ ì¸í¸ë¡ ",
                            "poster_path": "/sTUiA9zY6O4qFlmRC69nG6dngTh.jpg"
                        },
                        {
                            "id": 363088,
                            "title": "ì¤í¸ë§¨ê³¼ ìì¤í",
                            "poster_path": "/3E6b73EeYqY7PGJNJWjR9AANXVw.jpg"
                        },
                        {
                            "id": 271110,
                            "title": "ìº¡í´ ìë©ë¦¬ì¹´: ìë¹ ì",
                            "poster_path": "/vaMRzME3Dt73robEjOtDw4SPJGA.jpg"
                        },
                        {
                            "id": 315635,
                            "title": "ì¤íì´ëë§¨: íì»¤ë°",
                            "poster_path": "/nS8700DvlmXBVX0UqZZwnCcFB1X.jpg"
                        },
                        {
                            "id": 24428,
                            "title": "ì´ë²¤ì ¸ì¤",
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
<summary>ì¥ë¥´ë³ ê²ì (/genre)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /genre  |    -     |
|   Method    |  GET   |    -     |
|   genre    |  integer   |    âï¸     |
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
                    "title": "ì¥ì§í¸ì§ìë¬¸êµ",
                    "poster_path": "/ugiL6wIhl1OfPyv1gqLkTe45jLl.jpg",
                    "backdrop_path": "/mMA2YNddowV8MZtxpbn0a7Yilum.jpg",
                    "release_date": "2022-02-01",
                    "adult": false,
                    "original_title": "é¿æ´¥æ¹ä¹æ°´é¨æ¡¥",
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
                    "title": "ì ê³¼ ìì íêµ",
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
                    "overview": "ì ì¹ ìí¼ì ìê°ì¬ë ì´ë ë  ì ë¹í ì¡´ì¬ì ìí´ ë§ë² íêµë¡ í©ì¸ë ¤ ê°ë¤. ì´ íêµë ë¯¸ëì ëí ì ììê³¼ ìë¹ì í¤ìë´ë ê³³. ì´ëªì ì ê¸¸ ìë ì´ê³³ìì ë ì¹êµ¬ì ì°ì ì ê³ìë  ì ììê¹.",
                    "vote_average": 7.3
                },
                {
                    "id": 848791,
                    "title": "ë ì¤í¸ë ì¸ì ",
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
                    "overview": "ì´ì¸ ì©ììì ì§ì§íê³  ì°ì  ì´ë¦° ê´ê³ë¥¼ ë§ºë ì ì ê²½ì°°. ê·¸ë ê² ì©ììì ì ë¢°ë¥¼ ì»ì´ ìë°±ì ì ëíë ¤ íë¤.",
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
|   user_name    |  string   |    âï¸     |
|   email    |  string   |    âï¸     |
|   movie_id    |  integer   |    âï¸     |
|   movie_name    |  string   |    âï¸     |
|   comment    |  string   |    âï¸     |
|   vote    |  float   |    âï¸     |

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
            "movie_name": "ì¤í: ì²ì¬ì íì",
            "comment": "ì¬ë°ë¤ì",
            "vote": 3.4,
            "email": "99junsung@naver.com"
        },
        {
            "id": 9,
            "user_name": "junseong2",
            "movie_id": "760161",
            "movie_name": "ì¤í: ì²ì¬ì íì",
            "comment": "ì¬ë°ë¤ì2",
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
|   id    |  integer   |    âï¸     |
|   user_name    |  string   |    âï¸     |
|   email    |  string   |    âï¸     |
|   movie_id    |  integer   |    âï¸     |
|   movie_name    |  string   |    âï¸     |
|   comment    |  string   |    âï¸     |
|   vote    |  float   |    âï¸     |

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
|   id    |  integer   |    âï¸     |
|   email    |  string   |    âï¸     |
|   movie_id    |  integer   |    âï¸     |


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

<details>
<summary>Popular (/popular)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /popular  |    -     |
|   Method    |  GET   |    -     |
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
    "success": true,
    "result": {
        "popular": [
            {
                "id": 663712,
                "title": "íë¦¬íì´ì´ 2",
                "poster_path": "/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg",
                "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
                "release_date": "2022-10-06"
            },
            {
                "id": 436270,
                "title": "ë¸ë ìë´",
                "poster_path": "/mEdMHGy1FfCUc7PskFO0tibm8jp.jpg",
                "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                "release_date": "2022-10-19"
            },
            {
                "id": 420634,
                "title": "íë¦¬íì´ì´",
                "poster_path": "/6PQqC4SbY910VvyVad6mvsboILU.jpg",
                "backdrop_path": "/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg",
                "release_date": "2016-10-15"
            }
        ]
    }
}
```
</details>
</details>

<details>
<summary>NowPlaying (/nowplaying)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /nowplaying  |    -     |
|   Method    |  GET   |    -     |
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
    "success": true,
    "result": {
        "nowplaying": [
            {
                "id": 663712,
                "title": "íë¦¬íì´ì´ 2",
                "poster_path": "/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg",
                "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
                "release_date": "2022-10-06"
            },
            {
                "id": 436270,
                "title": "ë¸ë ìë´",
                "poster_path": "/mEdMHGy1FfCUc7PskFO0tibm8jp.jpg",
                "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
                "release_date": "2022-10-19"
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
}
```
</details>
</details>

<details>
<summary>UpComing (/upcoming)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /upcoming  |    -     |
|   Method    |  GET   |    -     |
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
    "success": true,
    "result": {
        "upcoming": [
            {
                "id": 663712,
                "title": "íë¦¬íì´ì´ 2",
                "poster_path": "/yB8BMtvzHlMmRT1WmTQnGv1bcOK.jpg",
                "backdrop_path": "/y5Z0WesTjvn59jP6yo459eUsbli.jpg",
                "release_date": "2022-10-06"
            },
            {
                "id": 619730,
                "title": "ê±±ì ë§ìì ê·¸ë",
                "poster_path": "/9BXYLjXtSipBp2GfAlsri4i8hPC.jpg",
                "backdrop_path": "/4O9kFXsBjlxtgzXWHfgMS9CjhbN.jpg",
                "release_date": "2022-09-21"
            },
            {
                "id": 820067,
                "title": "ê·¹ì¥í 5ë±ë¶ì ì ë¶",
                "poster_path": "/63SDXxNKOA4ZfXvRCkF9B1y14Us.jpg",
                "backdrop_path": "/jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
                "release_date": "2022-05-20"
            }
        ]
    }
}
```
</details>
</details>

<details>
<summary>Trend (/trend)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /trend  |    -     |
|   Method    |  GET   |    -     |
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
    "success": true,
    "result": {
        "trend": [
            {
                "id": 829280,
                "title": "ìëë¼ íì¦ 2",
                "poster_path": "/S6fDnntDjduIWuLW2GcqFasobD.jpg",
                "backdrop_path": "/zzoFeH4PsV5Mh2Sc47JOMFwGYOX.jpg",
                "release_date": "2022-11-04"
            },
            {
                "id": 595586,
                "title": "ë ë¸ë¦¿ì§",
                "poster_path": "/wNSfX8GOCfusviA9yxuKv9Tc9Gq.jpg",
                "backdrop_path": "/qgbrCFlhx6OmyZmJZsKVZekBWBL.jpg",
                "release_date": "2022-10-28"
            },
            {
                "id": 744114,
                "title": "ëì ê²½ì°°ê´",
                "poster_path": "/wdbiMjXd4CxPfCx4r4Jfy8cGec0.jpg",
                "backdrop_path": "/s5MLcxbdFqvIzTLNLU5yQFFYALR.jpg",
                "release_date": "2022-10-21"
            }
        ]
    }
}
```
</details>
</details>

<details>
<summary>TopRated (/toprated)</summary>

### Request Form

|     TAG     |  value  | required |
| :---------: | :-----: | :------: |
|   API URL   |  /toprated  |    -     |
|   Method    |  GET   |    -     |
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
    "success": true,
    "result": {
        "toprated": [
            {
                "id": 238,
                "title": "ëë¶",
                "poster_path": "/cOwVs8eYA4G9ZQs7hIRSoiZr46Q.jpg",
                "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
                "release_date": "1972-03-14"
            },
            {
                "id": 278,
                "title": "ì¼ìí¬ íì¶",
                "poster_path": "/oAt6OtpwYCdJI76AVtVKW1eorYx.jpg",
                "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
                "release_date": "1994-09-23"
            },
            {
                "id": 620249,
                "title": "ëìíì ê¸°: ì²«ë§ë¨í¸",
                "poster_path": "/nDieZR47cirx44UZxKQsCbRGYqW.jpg",
                "backdrop_path": "/aVFx1VtlOxR3v0ADEatalXOvwbu.jpg",
                "release_date": "2019-08-27"
            }
        ]
    }
}
```
</details>
</details>