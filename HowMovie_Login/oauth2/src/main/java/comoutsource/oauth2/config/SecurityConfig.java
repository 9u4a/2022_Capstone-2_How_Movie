package comoutsource.oauth2.config;

import comoutsource.oauth2.config.jwt.JwtAuthFilter;
import comoutsource.oauth2.config.jwt.TokenService;
import comoutsource.oauth2.config.oauth2.CustomOAuth2UserService;
import comoutsource.oauth2.config.oauth2.OAuth2SuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final CustomOAuth2UserService oAuth2UserService;
    private final OAuth2SuccessHandler successHandler;
    private final TokenService tokenService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/token/**").permitAll()
                .anyRequest().authenticated()
                .and()
                .addFilterBefore(new JwtAuthFilter(tokenService),
                        OAuth2LoginAuthenticationFilter.class)
                .oauth2Login() // oauth2Login 설정을 시작
                .loginPage("/token/expired") // login 페이지 Url을 직접 설정
                .successHandler(successHandler) // 로그인 성공 시 handler 설정
                .userInfoEndpoint() // 로그인 성공 후 설정 시작
                .userService(oAuth2UserService); // oauth2Service에서 처리

        http.addFilterBefore(new JwtAuthFilter(tokenService), UsernamePasswordAuthenticationFilter.class);
    }
}
