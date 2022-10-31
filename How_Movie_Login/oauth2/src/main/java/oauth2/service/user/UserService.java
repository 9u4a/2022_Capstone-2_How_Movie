package oauth2.service.user;

import org.springframework.stereotype.Service;

@Service
public interface UserService {

    void checkUser(String email);

}
