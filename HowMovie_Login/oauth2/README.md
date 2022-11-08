## 🖥️ Collaborator

<table>
  <tr>
    <td align="center"><a href="https://github.com/Tasty-Programmer"><img src="https://avatars.githubusercontent.com/u/47372381?v=4" width="100px;" alt=""/><br /><sub><b>Tasty-Programmer</b></sub></a><br />😿Login Server</td>
  </tr>
</table>

## Back-end stack

- SpringBoot (JDK17)

## Folder path

```java
./HowMovie_Login
    |- /HowMovie_Login          # 프로젝트 루트 디렉터리
    |- /oauth2             # 로그인 서버
        |- /config          # 로그인 config
        |- /dto             # 로그인 dto
        |- Oauth2Application # 로그인 실행파일
```

## Login Information (Git Document)

---
<details>
<summary>Token (/Token)</summary>

### Request
http://localhost:8080/oauth2/authorization/{provider}
로그인 후 
CustomOAuth2UserService 분기처리 (kakao , Google , Naver ) 후 로그인 성공시 토큰 생성 후 response 로 넘겨줌.

### response

|     STATUS     |  response  |
| :---------: | :-----: | 
|   200   | OK  |
|   400    |  err: BAD_REQUEST  |
|   401   |  err: API_KEY ERROR   |
|   404    |  err: NOT_FOUND   |

</details>
<details>
<summary>yml</summary>

### 기본설정
1. 하단 application.yml 파일에 각 서비스 제공자 별 `client-id`와 `client-secret` 두 가지를 각각 등록해 주셔야합니다.

spring:
  security:
    oauth2:
      client:
        registration:
          kakao:
            client-id: '{카카오 client-id}'
            client-secret:'{카카오 client-secret}'
            redirect-uri: http://localhost:8080/login/oauth2/code/kakao
            authorization-grant-type: authorization_code
            client-authentication-method: POST
            client-name: Kakao
            scope:
#              - profile
              - profile_nickname
              - profile_image
              - account_email
          naver:
            client-id: '{네이버 client-id}'
            client-secret: '{네이버 client-secret}'
            redirect-uri:  http://localhost:8080/login/oauth2/code/naver
            authorization-grant-type: authorization_code
            scope:
              - name
              - email
          google:
            client-id: '{구글 client-id}'
            client-secret: '{구글 client-secret}'
            scope:
              - profile
              - email
        provider:
          kakao:
            authorization-uri: https://kauth.kakao.com/oauth/authorize
            token-uri: https://kauth.kakao.com/oauth/token
            user-info-uri: https://kapi.kakao.com/v2/user/me
            user-name-attribute: id
          naver:
            authorization-uri: https://nid.naver.com/oauth2.0/authorize
            token-uri: https://nid.naver.com/oauth2.0/token
            user-info-uri: https://openapi.naver.com/v1/nid/me
            user-name-attribute: response
</details>

  
  
