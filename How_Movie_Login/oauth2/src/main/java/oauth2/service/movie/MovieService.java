package oauth2.service.movie;

import oauth2.entity.Movie;
import oauth2.entity.User;
import oauth2.entity.dto.MovieDto;
import oauth2.entity.dto.ReviewDto;
import org.springframework.stereotype.Service;

@Service
public interface MovieService {

    Movie getMovie(Long id);

    Boolean checkMovieReview(Long id);

    void saveMovie(MovieDto movieDto);

    void saveReview(ReviewDto reviewDto);

    void deleteReview(Long movieId, Long reviewId);

    Boolean checkUserReviewValid(User user);

}
