package oauth2.service.movie;

import oauth2.entity.Movie;
import oauth2.entity.Review;
import oauth2.entity.User;
import oauth2.entity.dto.MovieDto;
import oauth2.entity.dto.ReviewDto;
import oauth2.repository.MovieRepository;
import oauth2.repository.ReviewRepository;
import oauth2.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    private final UserRepository userRepository;

    private final ReviewRepository reviewRepository;

    @Override
    public Movie getMovie(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

    @Override
    public Boolean checkMovieReview(Long id) {
        Movie movie = movieRepository.findById(id).orElse(null);

        assert movie != null;
        Set<Review> reviews = movie.getReview();

        return !reviews.isEmpty();
    }

    @Override
    public void saveMovie(MovieDto movieDto) {
        Movie movie = new Movie(
                null,
                movieDto.getTitle(),
                movieDto.getContent(),
                new HashSet<>()
        );

        movieRepository.save(movie);
    }

    @Override
    public void saveReview(ReviewDto reviewDto) {
        Movie movie = movieRepository.findById(reviewDto.getMovieId()).orElse(null);
        User user = userRepository.findByEmail(reviewDto.getUserEmail());

        if (checkUserReviewValid(user)) {
            if (movie != null && user != null) {
                Review review = new Review(
                        movie,
                        user,
                        reviewDto.getScore(),
                        reviewDto.getRating()
                );

                reviewRepository.save(review);

                movie.getReview().add(review);
            }
        } else {
            log.info("beep");
        }
    }

    @Override
    public void deleteReview(Long movieId, Long reviewId) {
        Movie movie = movieRepository.findById(movieId).orElse(null);
        Review review = reviewRepository.findById(reviewId).orElse(null);

        if (movie != null && review != null) {
            movie.getReview().remove(review);
            reviewRepository.delete(review);
        } else {
            log.info("beep");
        }
    }

    @Override
    public Boolean checkUserReviewValid(User user) {
        return reviewRepository.findByUser(user) == null;
    }

}
