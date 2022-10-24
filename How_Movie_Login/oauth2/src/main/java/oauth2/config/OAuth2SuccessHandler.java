package oauth2.config;

import com.fasterxml.jackson.databind.ObjectMapper;
import oauth2.service.TokenService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final TokenService tokenService;
    private final UserRequestMapper userRequestMapper;
    private final ObjectMapper objectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        // 최초 로그인인지 확인하고 아니면 유저 등록
        OAuth2User oAuth2User = (OAuth2User)authentication.getPrincipal();
        UserDto userDto = userRequestMapper.toDto(oAuth2User);

        log.info("Principal에서 꺼낸 OAuth2User: {}", oAuth2User);
        log.info("토큰 발행 시작");

        TokenService.Token token = tokenService.generateToken(userDto.getEmail(), "USER");
        log.info("{}", token);

        writeTokenResponse(response, token);
    }

    // 토큰 생성 및 발급
    private void writeTokenResponse(HttpServletResponse response, TokenService.Token token) throws IOException {
        response.setContentType("text/html;charset=UTF-8");

        // 토큰 포함하여 response해준다.
        response.addHeader("Access", token.getToken());
        response.addHeader("Refresh", token.getRefreshToken());
        response.setContentType("application/json;charset=UTF-8");

        var writer = response.getWriter();
        writer.println(objectMapper.writeValueAsString(token));
        writer.flush();
    }
}